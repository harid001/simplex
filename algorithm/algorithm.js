function calcWordUsage(word){

	var data;

	$.ajax({
		url : 'http://api.wordnik.com:80/v4/word.json/' + word + '/frequency' + "?useCanonical=false&startYear=1990&endYear=2012&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5",
		success : function(result) { data = result; },
		async : false
	});

	return data['totalCount'];
}

function getScores(word){

	var data;
	var scores = {};

	$.ajax({
		url : 'http://www.dictionaryapi.com/api/v1/references/thesaurus/xml/' + word + '?key=e4a0fb4e-d5d2-49ab-852a-c797139a93a6',
		success : function(result) { data = result; },
		async : false
	});

	var syn = $(data).find('syn').text();

	for(var i = 0; i < syn.split(',').length; i++){
		scores[syn.split(',')[i].trim()] = calcWordUsage(syn.split(',')[i].trim());
	}

	return scores;	
}

var word = 'inundate';

var scores = getScores('inundate');
var newScores = {};

for(var i = 0; i < Object.keys(scores).length; i++){
	if(scores[Object.keys(scores)[i]] > scores['inundate']){
		newScores[Object.keys(scores)[i]] = scores[Object.keys(scores)[i]];
	}
}


