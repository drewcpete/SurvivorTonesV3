require('dotenv').config();

// Twitter data to string for each season

function tweetToString(json) {
    var seasonText = "";
    console.log("length"+json.results.length);
    for (let i = 0; i < json.results.length; i++) {
        const text = json.results[i].text;
        // console.log(text)
        seasonText = seasonText + text;
        // seasonText.concat(text);
    }
    console.log("season" +seasonText)
    return seasonText;
}

var s13json = require("./twitterData/s13tweetData.json");
var s14json = require("./twitterData/s14tweetData.json");
var s15json = require("./twitterData/s15tweetData.json");
var s16json = require("./twitterData/s16tweetData.json");
var s17json = require("./twitterData/s17tweetData.json");
var s18json = require("./twitterData/s18tweetData.json");
var s19json = require("./twitterData/s19tweetData.json");
// var s20json = require("./twitterData/s20tweetData.json");
// var s21json = require("./twitterData/s21tweetData.json");
// var s22json = require("./twitterData/s22tweetData.json");
// var s23json = require("./twitterData/s23tweetData.json");
// var s24json = require("./twitterData/s24tweetData.json");
// var s25json = require("./twitterData/s25tweetData.json");
// var s26json = require("./twitterData/s26tweetData.json");
// var s27json = require("./twitterData/s27tweetData.json");
// var s28json = require("./twitterData/s28tweetData.json");
// var s29json = require("./twitterData/s29tweetData.json");
// var s30json = require("./twitterData/s30tweetData.json");
// var s31json = require("./twitterData/s31tweetData.json");
// var s32json = require("./twitterData/s32tweetData.json");
// var s33json = require("./twitterData/s33tweetData.json");
// var s34json = require("./twitterData/s34tweetData.json");
// var s35json = require("./twitterData/s35tweetData.json");
// var s36json = require("./twitterData/s36tweetData.json");
// var s37json = require("./twitterData/s37tweetData.json");
// var s38json = require("./twitterData/s38tweetData.json");
// var s39json = require("./twitterData/s39tweetData.json");


var s13Text = tweetToString(s13json);
var s14Text = tweetToString(s14json);
var s15Text = tweetToString(s15json);
var s16Text = tweetToString(s16json);
var s17Text = tweetToString(s17json);
var s18Text = tweetToString(s18json);
var s19Text = tweetToString(s19json);
var s20Text = tweetToString(s20json);
var s21Text = tweetToString(s21json);
var s22Text = tweetToString(s22json);
var s23Text = tweetToString(s23json);
var s24Text = tweetToString(s24json);
var s25Text = tweetToString(s25json);
var s26Text = tweetToString(s26json);
var s27Text = tweetToString(s27json);
var s28Text = tweetToString(s28json);
var s29Text = tweetToString(s29json);
var s30Text = tweetToString(s30json);
var s31Text = tweetToString(s31json);
var s32Text = tweetToString(s32json);
var s33Text = tweetToString(s33json);
var s34Text = tweetToString(s34json);
var s35Text = tweetToString(s35json);
var s36Text = tweetToString(s36json);
var s37Text = tweetToString(s37json);
var s38Text = tweetToString(s38json);
var s39Text = tweetToString(s39json);

// console.log(s13Text)

// Watson Tone Analyzer
const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

const toneAnalyzer = new ToneAnalyzerV3({
  version: '2017-09-21',
  authenticator: new IamAuthenticator({
    apikey: process.env.APIKEY,
  }),
  url: 'https://api.us-south.tone-analyzer.watson.cloud.ibm.com/instances/0d09ef0e-0aad-4d91-9a39-31d817d93616',
});

const toneParams = {
    toneInput: {'text': s13Text},
    contentType: 'text/plain',
} ;


toneAnalyzer.tone(toneParams)
.then(toneAnalysis => {
    console.log(JSON.stringify(toneAnalysis, null, 2));
})
.catch(err => {
    console.log("error", err)
});
