function getScores(word){

	var data;
	var scores = {};

	$.ajax({
		url : 'http://api.wordnik.com:80/v4/word.json/' + word + '/relatedWords/?useCanonical=true&relationshipTypes=synonym&limitPerRelationshipType=5&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
		success : function(result) { data = result; },
		async : false
	});

	//console.log(data);

	if(data.length == 0){
		scores[word] = calcWordUsage(word);
		return scores;
	}

	var syn = data[0]['words'] + ',' + word;

	for(var i = 0; i < syn.split(',').length; i++){
		var w = syn.split(',')[i].trim();
		scores[w] = calcWordUsage(w);
	}

	return scores;	
}

function Dumbify(){ }
Dumbify.prototype.getDumberWord = function(word) {
	
	var scores = getScores(word);
	//console.log(scores);
	var newScores = {};

	for(var i = 0; i < Object.keys(scores).length; i++){
		// change sign ('>=') to make into smartify
		if(scores[Object.keys(scores)[i]] >= scores[word]){
			newScores[Object.keys(scores)[i]] = scores[Object.keys(scores)[i]];
		}
	}

	var random = Math.floor(Math.random() * Object.keys(newScores).length);
	return Object.keys(newScores)[random];
	

};


function calcWordUsage(word){

	var value;

	$.ajax({
		url: 'http://weblm.research.microsoft.com/weblm/rest.svc/bing-body/apr10/1/jp?u=a15ec3fe-4a31-4ba8-8e59-1b0550d048ba&p=' + word + '&format=json',
		success : function(data){ value = data; },
		async : false
	});

	return value;

}
