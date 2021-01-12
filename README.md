# app-store-query-cli

A command-line tool to query the popular app stores (Google Play and Apple App Store).  It is is essentially a command-line wrapper for [google-play-scraper](https://github.com/facundoolano/google-play-scraper) and [app-store-scraper](https://github.com/facundoolano/app-store-scraper). 

## Installation
```
npm install app-store-query-cli
```

## Usage
Available query methods for both Google Play and Apple App Store.
- [app](#app): Retrieves the full detail of an application.
- [list](#list): Retrieves a list of applications from one of the collections at iTunes.
- [search](#search): Retrieves a list of apps that results of searching by the given term.
- [developer](#developer): Retrieves a list of apps by the given developer id.
- [suggest](#suggest): Given a string returns up to 50 suggestions to complete a search query term.
- [similar](#similar): Returns the list of "customers also bought" apps shown in the app's detail page.
- [reviews](#reviews): Retrieves a page of reviews for the app.
- [ratings](#ratings): Retrieves the ratings for the app.
