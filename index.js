#!/usr/bin/env node

const fs = require('fs');
const google_play = require('google-play-scraper');
const app_store = require('app-store-scraper');

const allowed_queries_gplay = ['app', 'list', 'search', 'developer', 'suggest', 'reviews', 'similar', 'permissions', 'categories:'];
const allowed_queries_appstore = ['app', 'list', 'search', 'developer', 'suggest', 'similar', 'reviews', 'ratings'];

const argv = require('yargs')
    .alias('s', 'store-name')
    .nargs('s', 1)
    .describe('s', 'The app market / store [google-play or app-store]')
    .alias('m', 'method')
    .nargs('m', 1)
    .describe('m', 'The query method [app, list, search, developer, suggest, reviews, similar, ratings (app-store only), categories (google-play only) and permissions (google-play only)]')
    .alias('q', 'query')
    .nargs('q', 1)
    .describe('q', 'The query formatted in json')
    .alias('i', 'query-file')
    .nargs('i', 1)
    .describe('i', 'The file containing a query formatted in json')
    .alias('o', 'ouput-file')
    .nargs('o', 1)
    .describe('o', 'The file to which query results will be written')
    .demandOption(['m', 'q',])
    .help('h')
    .alias('h', 'help');


function read_json_file(filename) {
    return JSON.parse(fs.readFileSync(file = filename, encoding = 'utf8'));
}

function on_scraper_success(results) {
    var result_string = JSON.stringify(results);
    if (args.o) {
        try {
            fs.writeFileSync(file = args.o, data = JSON.stringify(results), encoding = 'utf8');
        }
        catch (err) {
            on_error(`Failed to write to the output file ${args.o}`);
        }
    } else {
        console.log(result_string);
    }
    process.exit(0);
}

function on_error(err) {
    console.log(err)
    process.exit(1);
}

const args = argv.argv;

function main() {

    var query = null;

    try {
        if (args.i) {
            query = string.read_json_file(args.q);
        } else if (args.q) {
            query = JSON.parse(args.q);
        }
    } finally {
        if (!query) {
            on_error("No valid query or input file");
        }
    }

    if (args.s == "google-play") {
        if (allowed_queries_gplay.includes(args.m)) {
            google_play[args.m](query).then(on_scraper_success, on_error);
        } else {
            on_error(`Query method '${args.m}' is invalid for Google Play`);
        }
    }
    else if (args.s == "app-store") {
        if (allowed_queries_appstore.includes(args.m)) {
            app_store[args.m](query).then(on_scraper_success, on_error);
        } else {
            on_error(`Query method '${args.m}' is invalid for Apple App Store`);
        }
    }
    else {
        on_error("The app market / store is not supported");
    }
}

main();
