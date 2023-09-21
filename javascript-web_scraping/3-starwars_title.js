#!/usr/bin/node
/*
Write a script that prints the title of a Star Wars movie where
the episode number matches a given integer.
*/
const request = require('request');
const movieID = process.argv[2];
const url = 'https://swapi-api.hbtn.io/api/films/' + movieID + '/';

request(url, (err, response, body) => {
  if (err) {
    console.log(err);
  }
  const json = JSON.parse(body);
  console.log(json.title);
});
