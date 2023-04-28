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
	const data = extractdatafromfile(text_to_replace_full_path,fileformat);
	console.log("data : "+data);
	// convert data to array of search-replace-object
	console.log("testing :" + new searchreplacepair("haha","hoho"));
	const text_to_replace = [];
	console.log(typeof data);
	var lines =data.split(/\r?\n/);
	lines.forEach((line) => {
		if(/:/.test(line)){
			console.log(line);
			let searcharray = line.split(/:/);
			// trim whitespace, replace all [ with \[, replace all ] with /]
			// eg. " [text] " to "\[text\]"
			let searchkey = searcharray[0].trim()
					.replace(/\[(.*?)\]/g,"\\[$1\\]");
			console.log(searchkey);
			let replacement = searcharray[1].trim();
			let searchreplaceobj = new searchreplacepair(searchkey,replacement);
			text_to_replace.push(searchreplaceobj);
		}
	});
	console.log(text_to_replace);
	// get main text
	const maintext = extractdatafromfile(maintext_full_path,fileformat);
	// for each searchreplacepair, replace search term with replacment in main.txt
	var result = maintext;
	for(const i in text_to_replace){
		//console.log(text_to_replace[i]);
		//let searchkey = text_to_replace[i].searchkey
		let searchkey = new RegExp(text_to_replace[i].searchkey,"ig");
		console.log(searchkey);
		let replacement = text_to_replace[i].replacement;
		result = result.replace(searchkey,replacement);
	}
	console.log('end of script');
	return result;
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
/**
 * takes fullfilepath and return text inside the file
 * @param {string} filepath
 * @param {string} fileformat eg. utf8
 * @return {string} text in file
*/
function extractdatafromfile(file_full_path,fileformat) {
	try{
		var output = fs.readFileSync(file_full_path,fileformat)
	} catch(err) {
		console.log(err);
	}
	//console.log(output);
	return output;
}

// main script run
console.log(main(text_to_replace_filepath,maintext_filepath));
