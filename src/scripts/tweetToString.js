require('dotenv').config();
var fs = require('fs');
function tweetToString(json) {
    var seasonText = "";
    console.log("length" + json.results.length);
    for (let i = 0; i < json.results.length; i++) {
        const text = json.results[i].text;
        // console.log(text)
        seasonText = seasonText + text;
    }
    console.log("season" + seasonText)
    return seasonText;
}
// Twitter data to string for each season


// var s13json = require("./twitterData/s13tweetData.json");
// var s14json = require("./twitterData/s14tweetData.json");
// var s15json = require("./twitterData/s15tweetData.json");
// var s16json = require("./twitterData/s16tweetData.json");
// var s17json = require("./twitterData/s17tweetData.json");
// var s18json = require("./twitterData/s18tweetData.json");
// var s19json = require("./twitterData/s19tweetData.json");
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
// // var s39json = require("./twitterData/s39tweetData.json");


// var s13Text = tweetToString(s13json);
// var s14Text = tweetToString(s14json);
// var s15Text = tweetToString(s15json);
// var s16Text = tweetToString(s16json);
// var s17Text = tweetToString(s17json);
// var s18Text = tweetToString(s18json);
// var s19Text = tweetToString(s19json);
// var s20Text = tweetToString(s20json);
// var s21Text = tweetToString(s21json);
// var s22Text = tweetToString(s22json);
// var s23Text = tweetToString(s23json);
// var s24Text = tweetToString(s24json);
// var s25Text = tweetToString(s25json);
// var s26Text = tweetToString(s26json);
// var s27Text = tweetToString(s27json);
// var s28Text = tweetToString(s28json);
// var s29Text = tweetToString(s29json);
// var s30Text = tweetToString(s30json);
// var s31Text = tweetToString(s31json);
// var s32Text = tweetToString(s32json);
// var s33Text = tweetToString(s33json);
// var s34Text = tweetToString(s34json);
// var s35Text = tweetToString(s35json);
// var s36Text = tweetToString(s36json);
// var s37Text = tweetToString(s37json);
// var s38Text = tweetToString(s38json);
// // var s39Text = tweetToString(s39json);

// var allText = [s13Text, s14Text, s15Text, s16Text, s17Text, s18Text, s19Text, s20Text, s21Text, s22Text, s23Text, s24Text, s25Text, s26Text, s27Text, s28Text, s29Text, s30Text, s31Text, s32Text, s33Text, s34Text, s35Text, s36Text, s37Text, s38Text]


var s39e1json = require("./../twitterData/s39/s39e1tweetData.json");
var s39e3json = require("./../twitterData/s39/s39e3tweetData.json");
var s39e2json = require("./../twitterData/s39/s39e2tweetData.json");
var s39e4json = require("./../twitterData/s39/s39e4tweetData.json");
var s39e5json = require("./../twitterData/s39/s39e5tweetData.json");
var s39e6json = require("./../twitterData/s39/s39e6tweetData.json");
var s39e7json = require("./../twitterData/s39/s39e7tweetData.json");
var s39e8json = require("./../twitterData/s39/s39e8tweetData.json");
var s39e9json = require("./../twitterData/s39/s39e9tweetData.json");
var s39e10json = require("./../twitterData/s39/s39e10tweetData.json");
var s39e11json = require("./../twitterData/s39/s39e11tweetData.json");
var s39e12json = require("./../twitterData/s39/s39e12tweetData.json");

var e1Text = tweetToString(s39e1json);
var e2Text = tweetToString(s39e2json);
var e3Text = tweetToString(s39e3json);
var e4Text = tweetToString(s39e4json);
var e5Text = tweetToString(s39e5json);
var e6Text = tweetToString(s39e6json);
var e7Text = tweetToString(s39e7json);
var e8Text = tweetToString(s39e8json);
var e9Text = tweetToString(s39e9json);
var e10Text = tweetToString(s39e10json);
var e11Text = tweetToString(s39e11json);
var e12Text = tweetToString(s39e12json);

const s39Text = [e1Text,    e2Text,    e3Text,    e4Text,    e5Text,    e6Text,    e7Text,    e8Text,    e9Text,    e10Text,    e11Text,    e12Text];

module.exports = s39Text;