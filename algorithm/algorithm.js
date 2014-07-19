var wordUsage = {};

function calcWordUsage(word){
	$.get('http://api.wordnik.com:80/v4/word.json/' + word + '/frequency', 
  		{ useCanonical : false, startYear : 1990, endYear : 2012, api_key : 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'},
	 	function(data){ saveData(data['totalCount']); } );
}

function saveData(usage){
	wordUsage[word] = count;
}



