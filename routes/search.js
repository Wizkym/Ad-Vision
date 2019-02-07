'use strict';

const request = require('request');

const apiKey = '###';
const customConfigId = '###';

function searchQuery(query) {
  let options = {
    url:
      `https://api.cognitive.microsoft.com/bingcustomsearch/v7.0/search?q=${encodeURIComponent(query)}&customconfig=###`,
  
    headers: {
      'Ocp-Apim-Subscription-Key' : 'e8d2a1ed1c8f49639d03b3f7eff8d85d'
    }
  };
  
    }
  });  
}

