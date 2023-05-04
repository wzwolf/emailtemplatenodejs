// this is a object oriented version of the same code
const fs  = require('fs');
const path = require('path');

//declare globals
text_to_replace_filepath = '/resources/text_to_replace.txt';
maintext_filepath = '/resources/maintext.txt';
fileformat ='utf8';

// filedata object
function filedata(text_file,fileformat) {
	this.file = path.join(__dirname,text_file)
	this.fileformat = fileformat
}

// attach function to filedata object
// function to read data from file
// return data from file;
filedata.prototype.data= function() {
	try{
		if(!fs.existsSync(this.file)) {
			console.log("File Not Found", this.file);
			throw new Error("File Not Found");
		} else {
			var data = fs.readFileSync(this.file,this.fileformat);
			console.log(data);
			return data;
		}
	} catch(err) {
		console.log(err);
		return err;
	}
}

/**
 * @param {string} data
*/
function replacedata(data) {
	this.data
}

// return an array of searchreplacepair from string data 
replacedata.prototype.convertarray = function() {
	output  = [];
	// convert data to array of search-replace-object
	var lines = this.data.split(/\r?\n/);
	lines.forEach((line)=> {
		if(!/:/.test(line)){return}
		let searcharray = line.split(/:/);
		// trim whitespace, replace all [ with \[, replace all ] with /]
		// eg. " [text] " to "\[text\]"
		let key = searcharray[0].trim().replace(/\[(.*?)\]/g,"\\[$1\\]");
		let replace = searcharray[1].trim();
		let pair = new searchreplacepair(key,replace);
		ouput.push(pair);
	});
	return output
}



/**
 * creates a search replacement pair object
 * contains @param {string} key
 * contains @param {string} replace
*/
function searchreplacepair(key,replace) {
	this.searchkey = key;
	this.replacement = replace;
}

module.exports = {
	filedata
	};
