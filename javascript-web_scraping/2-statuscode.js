#!/usr/bin/node
/*
Write a script that prints the title of a Star Wars movie where
the episode number matches a given integer.
*/
const filePath = process.argv[2];
const request = require('request');
