const { filedata, main } = require('../oopstyle');
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
	// test 1 - standard working test
	test("test1",() => {
		//arrange and act
		var result = main("test/searchreplace_1.txt","test/maintext_1.txt","utf8").trim;
		// assert
		var expectedresult = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt test 1 replaced 
		ut labore et dolore magna aliqua. Ut enim 
		ad minim veniam, quis nostrud 
		exercitation ullamco test 3 replaced 
		laboris nisi ut aliquip ex ea commodo 
		consequat. test 2 replaced Duis aute 
		irure dolor in reprehenderit in voluptate 
		velit esse cillum dolore eu fugiat nulla 
		pariatur. test 1 replaced Excepteur sint 
		occaecat cupidatat non proident, sunt 
		test 3 replaced in culpa qui officia 
		deserunt mollit anim id est 
		laborum".trim; 
		expect(result).toBe(expectedresult);
	});
	// test 2 - file not available error
	test("failtest1",()=> {
		//arrange and act
		const testFunction = () => main("", "","");
		// assert
		expect(testFunction).toThrow(TypeError);
	});
});
