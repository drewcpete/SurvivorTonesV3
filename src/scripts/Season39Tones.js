const s39Text = require('./tweetToString.js');
var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
require(dotenv).config();


function Episode() {
    this.id = 0;
    this.fear = 0;
    this.joy = 0;
    this.sadness = 0;
    this.anger = 0;
    this.confident = 0;
    this.tentative = 0;
    this.analytical = 0;
    // this.users = []
};


// function get39Tones(json) {
//     for (let i = 0; i < json.length; i++) {
//         let newSeason = new Episode()

//         for (let k = 0; k < json[i].result.document_tone.tones.length; k++) {
//             newSeason.id = i;
//             if (json[i].result.document_tone.tones[k].tone_name == "Joy") {
//                 newSeason.joy += json[i].result.document_tone.tones[k].score * 100;
//             }
//             if (json[i].result.document_tone.tones[k].tone_name == "Fear") {
//                 newSeason.fear += json[i].result.document_tone.tones[k].score * 100;
//             }
//             if (json[i].result.document_tone.tones[k].tone_name == "Sadness") {
//                 newSeason.sadness += json[i].result.document_tone.tones[k].score * 100;
//             }
//             if (json[i].result.document_tone.tones[k].tone_name == "Anger") {
//                 newSeason.anger += json[i].result.document_tone.tones[k].score * 100;
//             }
//             if (json[i].result.document_tone.tones[k].tone_name == "Confident") {
//                 newSeason.confident += json[i].result.document_tone.tones[k].score * 100;
//             }
//             if (json[i].result.document_tone.tones[k].tone_name == "Tentative") {
//                 newSeason.tentative += json[i].result.document_tone.tones[k].score * 100;
//             }
//             if (json[i].result.document_tone.tones[k].tone_name == "Analytical") {
//                 newSeason.analytical += json[i].result.document_tone.tones[k].score * 100;
//             }

//         };
//         s39Tones.push(newSeason);
//     }
//     return s39Tones;
// }


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