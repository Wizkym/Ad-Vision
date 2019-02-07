'use strict';

const request = require('request');

const apiKey = 'e8d2a1ed1c8f49639d03b3f7eff8d85d';
const customConfigId = '9760f4dc-5d3e-47a8-8797-91ded37df33f';

function searchQuery(query) {
  let options = {
    url:
      `https://api.cognitive.microsoft.com/bingcustomsearch/v7.0/search?q=${encodeURIComponent(query)}&customconfig=${customConfigId}`,
  
    headers: {
      'Ocp-Apim-Subscription-Key' : 'e8d2a1ed1c8f49639d03b3f7eff8d85d'
    }
  };
  request(options, (error, response, body) =>{
    let searchResponse = JSON.parse(body);
    for(let i = 0; i < searchResponse.webPages.value.length; ++i){
      let webPage = searchResponse.webPages.value[i];
      console.log('name: ' + webPage.name);
      console.log('displayUrl: ' + webPage.displayUrl);
      console.log('snippets: ' + webPage.snippets);
      console.log();
    }
  });  
}

const query = process.arg[2] || 'powerade';
searchQuery(query);