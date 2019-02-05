const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    detectText()
        .then((data) => {
            res.send(data);
        })
        .catch(err => console.log(err));
});

async function detectText() {
    // [START vision_text_detection]
    const vision = require('@google-cloud/vision');
    // Creates a client
    const client = new vision.ImageAnnotatorClient();
    const fileName = './src/js/res/kohls.jpg';

    // Performs text detection on the local file
    const [result] = await client.textDetection(fileName);
    const detections = result.textAnnotations;
    console.log('Text:');
    detections.forEach(text => console.log(text));
    // [END vision_text_detection]
    return detections[0];
}

module.exports = router;