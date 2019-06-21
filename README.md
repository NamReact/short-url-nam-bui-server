# Short URL back end

> This is part of my full stack final exam.

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Features](#features)
- [Status](#status)
- [Inspiration](#inspiration)

## General info

A simple short URL website. I dont have a domain name so some URLs might end up longer.

This is only the back end. You can find the front end [here](https://github.com/NamReact/short-url-nam-bui)

## Technologies

- body-parser - version 1.19.0
- cors - version 2.8.5
- express - version 4.17.1
- mongoose - version 5.6.0
- uid2 - version 0.0.3

## Setup

Clone the repository then install the dependencies using `npm install`.

Make sure nothing is running on your port 3000.

Use `npm start`to launch the website.

You can send request to the API using this URL :

https://short-url-back-nam.herokuapp.com/

## Features

- Create a new short URL with ```/url/create```route. The API expect a key ``òriginal```and return the shortened URL
- Get all short URLS with ```/url```route.
- Increment the number of visit everytime someone uses the short URL.

## Status

Project is _finished_.

## Inspiration

Project inspired by websites like https://bitly.com/ and https://tiny.cc/.
