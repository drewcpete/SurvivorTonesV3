// Watson Tone Analyzer
const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const { IamAuthenticator } = require('ibm-watson/auth');
const s39Text = require('./tweetToString.js');


const toneAnalyzer = new ToneAnalyzerV3({
    version: '2017-09-21',
    authenticator: new IamAuthenticator({
        apikey: process.env.APIKEY,
    }),
    url: 'https://api.us-south.tone-analyzer.watson.cloud.ibm.com/instances/0d09ef0e-0aad-4d91-9a39-31d817d93616',
});

function Analyze(tweetArray) {
    for (let i = 0; i < tweetArray.length; i++) {
        const toneParams = {
            toneInput: { 'text': tweetArray[i] },
            contentType: 'text/plain',
        };
        toneAnalyzer.tone(toneParams)
            .then(toneAnalysis => {
                fs.writeFile(`./src/toneData/s39e${i}.json`, (`{
                "season": "s${i + 13}"` + JSON.stringify(toneAnalysis, null, 2) + `}`), (err) => {
                        if (err) throw err;
                    });
            })
            .catch(err => {
                console.log("error", err)
            });
    }
}


// Analyze(allText);
function Analyze39(tweetArray) {
    for (let i = 0; i < tweetArray.length; i++) {
        const toneParams = {
            toneInput: { 'text': tweetArray[i] },
            contentType: 'text/plain',
        };
        toneAnalyzer.tone(toneParams)
            .then(toneAnalysis => {
                fs.writeFile(`./src/toneData/s39e${i}Tone.json`, (JSON.stringify(toneAnalysis, null, 2)), (err) => {
                    if (err) throw err;
                });
            })
            .catch(err => {
                console.log('error', err)
            });
    }
}
Analyze39(s39Text)