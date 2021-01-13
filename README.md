# app-store-query-cli

A command-line tool to query the popular app stores (Google Play and Apple App Store).  It is is essentially a command-line wrapper for [google-play-scraper](https://github.com/facundoolano/google-play-scraper) and [app-store-scraper](https://github.com/facundoolano/app-store-scraper). 

## Installation
```
git clone https://github.com/jason-chao/app-store-query-cli.git
cd app-store-query-cli
npm install
```

## Usage

Command line argument:
```
node index.js -s [store name] -m [query method] -q [the query parameters formatted in JSON] -o [output filename]
```

Example:
```
node index.js -s google-play -m search -q '{"term":"vaccine"}' -o google_play_search_vaccine.json
node index.js -s app-store -m search -q '{"term":"vaccine"}' -o app_store_search_vaccine.json
```

Query methods for both Google Play and Apple App Store:
- app: Retrieves the full detail of an application.
- list: Retrieves a list of applications from one of the collections at iTunes.
- search: Retrieves a list of apps that results of searching by the given term.
- developer: Retrieves a list of apps by the given developer id.
- suggest: Given a string returns up to 50 suggestions to complete a search query term.
- similiar: Returns the list of "customers also bought" apps shown in the app's detail page.
- reviews: Retrieves a page of reviews for the app.
- ratings: Retrieves the ratings for the app.

See the documentation on [google-play-scraper](https://github.com/facundoolano/google-play-scraper) and [app-store-scraper](https://github.com/facundoolano/app-store-scraper) for the parameters for each query method.