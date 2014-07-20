function toSpanish(word){
	$.ajax({
		url : 'https://api.datamarket.azure.com/Bing/MicrosoftTranslator/v1/Translate?Text=%27' + word + '%27&To=%27es%27',
		success : function(result) { data = result; },
		async : false
	});

}