function getScores(word){

	var scores = {};

	// if word is in top 100, don't do call, immediately return scores
	var ignore = ['the','be','to','of','and','a','in','that','have','I','it','for','not','on','with','he','as','you','do','at','this','but','his','by','from','they','we','say','her','she','or','an','will','my','one','all','would','there','their','what','so','up','out','if','about','who','get','which','go','me','when','make','can','like','time','no','just','him','know','take','people','into','year','your','could','them','see','other','than','then','now','look','only','come','its','over','think','also','back','after','use','two','how','our','work','first','well','way','even','new','want','because','any','these','give','day','most','us'];
	if(ignore.indexOf(word) > -1){
		scores[word] = calcWordUsage(word);
		return scores;
	}

	var data;
	

	$.ajax({
		url : 'http://www.stands4.com/services/v2/syno.php?uid=3481&tokenid=Q52WeeduzI3sCbad&word=' + word,
		success : function(result) { data = result; },
		async : false
	});

	var sys = $(data).find('synonyms').first().text().split(',');
	sys.push(word);

	for(var i = 0; i < sys.length; i++){
		scores[sys[i].trim()] = calcWordUsage(sys[i].trim());
	}

	return scores;	
}

function Dumbify(){ }
Dumbify.prototype.getDumberWord = function(word) {
	
	var scores = getScores(word);
	var newScores = {};

	for(var i = 0; i < Object.keys(scores).length; i++){
		if(scores[Object.keys(scores)[i]] >= scores[word]){
			newScores[Object.keys(scores)[i]] = scores[Object.keys(scores)[i]];
		}
	}

	var random = Math.floor(Math.random() * Object.keys(newScores).length);
	return Object.keys(newScores)[random];
	

};

Dumbify.prototype.getSmarterWord = function(word) {
	var scores = getScores(word);
	console.log(scores);
	var newScores = {};

	for(var i = 0; i < Object.keys(scores).length; i++){
		if(scores[Object.keys(scores)[i]] <= scores[word]){
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
