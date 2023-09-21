#!/usr/bin/node
/*
Write a script that reads and prints the content of a file.
The first argument is the file path
The content of the file must be read in utf-8
If an error occurred during the reading, print the error object
*/
const filePath = process.argv[2];
const moduleImport = require('fs');

moduleImport.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
