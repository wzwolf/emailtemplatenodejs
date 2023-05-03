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

module.exports = {
	filedata
	};
