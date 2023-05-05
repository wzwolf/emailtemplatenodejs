# emailtemplatenodejs
a sample nodejs app to generate a quick template for sending email resumes to companies

use of regrex module, file write and file read in nodejs
nodemon module 
jest module for testing


how to install 
build docker image from Dockerfile in dockerfile folder

run docker image

cd into home/emailtemplatenodejs


how to use 

add words to replace in resources/resources/text_to_replace.txt 
format : 
[replacethisword] : with this
[anotherreplacement] : with this one too

add main text to replace in resources/maintext.txt
format:
this is the word to replace [replacethisword].  heres another word to replace [anotherreplacement]. 

npm start - run main.js code

return string with main text modified with replacement text 

npm oopstart - run oopstyle.js code // same version but written with objects

return string with main text modified with replacement text

unit test with npm test
