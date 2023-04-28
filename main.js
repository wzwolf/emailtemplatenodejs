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
	// get data from text to replace file
	try{
		var data = fs.readFileSync(text_to_replace_full_path,fileformat).split(/\r?\n/);
		console.log("data : "+data);
	} catch(err) {
		console.log(err);
	}
	console.log("data : "+data);
	// convert data to array of search-replace-object
	console.log("testing :" + new searchreplacepair("haha","hoho"));
	const text_to_replace = [];
	console.log(typeof data);
	
	console.log('end of script');
}

/**
 * creates an object with
 * searchkey and  replacements as attributes
 * @param {string} searchkey
 * @param {string} replacement
 * create new obj with new searchreplacepair({searchkey},{replacement})
*/
function searchreplacepair(searchkey,replacement) {
	this.searchkey = searchkey;
	this.replacement = replacement;
}

console.log(main(text_to_replace_filepath,maintext_filepath))
