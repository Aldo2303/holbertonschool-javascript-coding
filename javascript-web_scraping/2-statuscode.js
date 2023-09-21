#!/usr/bin/node
/*
Display the status code of a GET request.
The first argument is the URL to request (GET)
The status code must be printed like this: code: <status code>
You must use the module request
*/
const request = require('request');
const url = process.argv[2];

request(url, (err, response) => {
	if (err) {
		console.log(err);
	}
	const statusCode = response.statusCode;
	console.log(`code: ${statusCode}`);
});
