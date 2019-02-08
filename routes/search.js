'use strict';

const request = require('request');

const apiKey = 'key';
const customConfigId = 'customConfigId';
let mySnippet = '';

function searchQuery (query) {
  let options = {
    url:
      `https://api.cognitive.microsoft.com/bingcustomsearch/v7.0/search?q=${encodeURIComponent(query)}&customconfig=${customConfigId}`,

    headers: {
      'Ocp-Apim-Subscription-Key' : 'key'
    }
  };
  request(options, (error, response, body) =>{
    let searchResponse = JSON.parse(body);
      mySnippet = searchResponse.webPages.value[0].snippet;
      console.log("SNIP!:", mySnippet);
      return mySnippet;
  });
}

/*const query = 'powerade';
searchQuery(query);*/

module.exports = searchQuery;

