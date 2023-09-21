#!/usr/bin/node
/*
Write a script that computes the number of tasks completed by user id.
The first argument is the API URL: https://jsonplaceholder.typicode.com/todos
Only print users with completed task
You must use the module request
filter() method for creating a new array with that completed tasks only true
*/
const request = require('request');
const url = process.argv[2];

request(url, (err, response, body) => {
  if (err) {
    console.log(err);
  }

  const json = JSON.parse(body);
  const toDict = {};

  for (const task of json) {
    if (task.completed) {
      if (toDict[task.userId] === undefined) {
        toDict[task.userId] = 0;
      }
      toDict[task.userId] += 1;
    }
  }
  console.log(toDict);
});
