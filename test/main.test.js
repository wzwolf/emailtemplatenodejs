// import module to test
const main = require("../main");

describe("main tests", () => {
	// test 1 - standard working test
	test("test1",() => {
		//arrange and act
		var result = main("test/searchreplace_1.txt","test/maintext_1.txt").trim;
		// assert
		expectedresult = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt test 1 replaced ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco test 3 replaced laboris nisi ut aliquip ex ea commodo consequat. test 2 replaced Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. test 1 replaced Excepteur sint occaecat cupidatat non proident, sunt test 3 replaced in culpa qui officia deserunt mollit anim id est laborum".trim;
		expect(result).toBe(expectedresult);
	});
	// test 2 - file not available error
	test("failtest1",()=> {
		//arrange and act 
		const testFunction = () => main("", "");
		// assert
		expect(testFunction).toThrow(TypeError);
	});
})




