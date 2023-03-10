# partofspeech

## Introduction

In English language, words can be categorized according to their syntactic functions, which is known as "Part of Speech".
Examples of part of speech: (noun, verb, adjective, ...)

## Description

A simple quiz app that gives you 10 different words, one at a time and you should choose the correct answer regarading the part of speech of the word,
then score is calculated and returns your rank across an array of scores. No database used. All data comes from a JSON file.

This app was built using: <br />

For client side:
[react](https://reactjs.org/), [react-router](https://reactrouter.com/en/main) & [@reduxjs/toolkit](https://redux-toolkit.js.org/) 
following [eslint-config-airbnb](https://github.com/airbnb/javascript) syntax.

For server side:
[node](https://nodejs.org/en/) & [express](https://expressjs.com/).


## Usage

Install node_modules in both server and client directories.
You should start with the server app as the client app request data from the server.
You should have two terminal windows open to run both the server and client apps.

### Server

From the root directory *partofspeech*

1. cd /server  <!-- the server directory -->
2. npm install  <!-- install node_modules -->
3. npm run dev  <!-- start the server app -->

### Client

From the root directory *partofspeech*

1. cd /client  <!-- the client directory -->
2. npm install  <!-- install node_modules -->
3. npm start  <!-- start the client app -->


***Enjoy the quiz***
