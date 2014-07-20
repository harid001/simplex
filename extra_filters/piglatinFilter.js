function piglatinate(word){
	var vowels = new Array('a','e','i','o','u');
	var charac = word.charAt(0);
	var result = "";
	if(charac != 'a' || charac != 'e' || charac != 'i' || charac != 'o' || charac != 'u'){
		int index = 0;
		for(c in word){
			for(e in vowels){
				if(vowels[e] == c)
					break;
			}
			index++;
		}

		result += word.substring(index, word.length);
		result += word.substring(0, index) + "ay";
	}
	else{
		result += word + "way";
	}

	return result;
}