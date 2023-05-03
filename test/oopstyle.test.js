const { filedata } = require('../oopstyle');
const fs = require('fs');

describe('filedata', () => {
	const text_file = 'test/text_to_replace_oop_test1.txt';
  	const fileformat = 'utf8';
	const testContent = 'This is a test file.';
	
	beforeAll(() => {
		// create a test file before each test
		fs.writeFileSync(text_file, testContent, fileformat);
	});

	afterAll(() => {
		// delete test file after each test
		fs.unlinkSync(text_file)
	});
	test('should read data from file', () => {
		// Create a new filedata object and call the data() function
		const myFileData = new filedata(text_file, fileformat);
		const data = myFileData.data();
		expect(data).toBe(testContent);
	});
  
  	test('should throw an error when file is not found', () => {
		// Create a filedata object with an invalid file path
		const nonexistentFile = './resources/nonexistent.txt';    
		const myFileData = new filedata(nonexistentFile, fileformat);
		expect(() => {
			myFileData.data();
		}).toThrow();
	});
});
