'use strict';

const request = require('request');

const apiKey = '###';
const customConfigId = '###';

function searchQuery() {
  let options = {
    url:
      `https://api.cognitive.microsoft.com/bingcustomsearch/v7.0/search?q=${encodeURIComponent(query)}&customconfig=###`,
  
    headers: {
      'Ocp-Apim-Subscription-Key' : 'e8d2a1ed1c8f49639d03b3f7eff8d85d'
    }
  };
}

request(options, (error, response, body) =>{
  let searchResponse = JSON.parse(body);
  for(let i = 0; i < searchResponse.webPages.value.length; ++i){
    let webPage = searchResponse.webPages.value[i];
    console.log('name: ' + webPage.name);
    console.log('displayUrl: ' + webPage.displayUrl);
    console.log();
  }
});

