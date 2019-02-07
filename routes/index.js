const express = require('express');
const router = express.Router();
const request = require('request');
const apiKey = 'e8d2a1ed1c8f49639d03b3f7eff8d85d';
const customConfigId = '9760f4dc-5d3e-47a8-8797-91ded37df33f';

router.post("/", (req, res) => {
    detectText('./src/js/res/kohls.jpg')
        .then((data) => {
            let options = {
                url:
                    `https://api.cognitive.microsoft.com/bingcustomsearch/v7.0/search?q=${encodeURIComponent(data)}&customconfig=${customConfigId}`,

                headers: {
                    'Ocp-Apim-Subscription-Key' : 'e8d2a1ed1c8f49639d03b3f7eff8d85d'
                }
            };

            request(options, function (error, response, body) {
                let searchResponse = JSON.parse(body);
                let mineSnippet = searchResponse.webPages.value[0].snippet;
                console.log("SNIP!:",  mineSnippet);
                res.send({snip: mineSnippet});
            });

        })
        .catch(err => console.log(err));
});

async function detectText(fileName) {
    console.log("IM HEREEEE...!!\n" + fileName);
    // [START vision_text_detection]
    const vision = require('@google-cloud/vision');
    // Creates a client
    const client = new vision.ImageAnnotatorClient();
    // Performs text detection on the local file
    const [result] = await client.textDetection(fileName);
    const detections = result.textAnnotations;
    console.log('Text:');
    detections.forEach(text => console.log(text));
    // [END vision_text_detection]
    return detections[0].description;
}

module.exports = router;