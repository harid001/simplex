var wordUsage = {};
var synonyms = [];

function calcWordUsage(word){
	$.get('http://api.wordnik.com:80/v4/word.json/' + word + '/frequency', 
  		{ useCanonical : false, startYear : 1990, endYear : 2012, api_key : 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'},
	 	function(data){ saveWordUsage(data['totalCount']); } );
}

function saveWordUsage(usage){
	wordUsage[word] = count;
}

function getSynonyms(word){
	$.get('http://www.dictionaryapi.com/api/v1/references/thesaurus/xml/' + word,
		{key : 'e4a0fb4e-d5d2-49ab-852a-c797139a93a6'},
		function(data){
			saveSynonyms($(data).find('syn').text());
		});
}

function saveSynonyms(syn){
	for(var i = 0; i < syn.split(',').length; i++){
		synonyms.push(syn.split(',')[i].trim());
	}
	console.log(synonyms);
}





