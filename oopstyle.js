// this is a object oriented version of the same code 
const fs  = require('fs');
const path = require('path');

//declare globals 
text_to_replace_filepath = '/resources/text_to_replace.txt'; 
maintext_filepath = '/resources/maintext.txt'; 
fileformat ='utf8';

// filedata class
class file {
	constructor(text_file,format){
		this.text_full_path = path.join(__dirname,text_file)
		this.fileformat = format
	}
}

