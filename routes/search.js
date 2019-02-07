'use strict';

const request = require('request');

const apiKey = 'e8d2a1ed1c8f49639d03b3f7eff8d85d';
const customConfigId = '9760f4dc-5d3e-47a8-8797-91ded37df33f';
let mySnippet = '';

function searchQuery (query) {
  let options = {
    url:
      `https://api.cognitive.microsoft.com/bingcustomsearch/v7.0/search?q=${encodeURIComponent(query)}&customconfig=${customConfigId}`,

    headers: {
      'Ocp-Apim-Subscription-Key' : 'e8d2a1ed1c8f49639d03b3f7eff8d85d'
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

