
const fs = require('fs');
const path = require('path');

//declare globals
text_to_replace_filepath = '/resources/text_to_replace.txt';
maintext_filepath = '/resources/maintext.txt';
fileformat ='utf8';

/**
 * returns template with flags replaced by text
 * @param {string} file path of text to replace
 * @param {string} file path of main text
 * @return {string} text of main text, with 
 * each [text] replaced with respective text 
 * as per text_to_replace file
*/
function main(text_to_replace_file,maintext_file) {
	console.log('start main script');
	// convert filepath to full file paths
	const text_to_replace_full_path = path.join(__dirname,text_to_replace_file);
	const maintext_full_path = path.join(__dirname,maintext_file);
	// create list of text to replace. 
	const text_to_replace = [];
	// for each item in text_to_replace file
	var filelines = [];
	fs.readFile(text_to_replace_full_path,fileformat,(err,data)=>{
		if(err){
			console.error('error',err);
			return;
		}
		console.log(data)
	});
}

console.log(main(text_to_replace_filepath,maintext_filepath))
