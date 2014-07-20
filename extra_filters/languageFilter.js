function changeLang(word,language){

	var lang_map = {'English' : 'en', 'German' : 'de' , 'French' : 'fr', 'Spanish' : 'es', 'Dutch' : 'nl' }

	var data;

	$.ajax({
		// url : 'https://api.datamarket.azure.com/Bing/MicrosoftTranslator/v1/Translate?Text=%27' + word + '%27&To=%27' + lang_map[language] + '%27',
		url : 'https://user:6ZZrSX4PmMGHVqbuIoZFzmVYViTTixYHDT4hEx19tuk@api.datamarket.azure.com/Bing/MicrosoftTranslator/v1/Translate?Text=%27' + word + '%27&To=%27' + lang_map[language] + '%27',
		// url : 'https://api.datamarket.azure.com/Bing/MicrosoftTranslator/v1/Translate?Text=%27hello%27&To=%27es%27',
		success : function(result) { data = result; },
		async : false
	});

	return data;

}

function Language(){}
Language.prototype.convertLang = changeLang;