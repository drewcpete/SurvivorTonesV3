// const fs = require('fs');
const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const { IamAuthenticator } = require('ibm-watson/auth');
// require(dotenv).config();

var e1Tonejson = require("../toneData/s39/s39e1Tone.json");
var e2Tonejson = require("../toneData/s39/s39e2Tone.json");
var e3Tonejson = require("../toneData/s39/s39e3Tone.json");
var e4Tonejson = require("../toneData/s39/s39e4Tone.json");
var e5Tonejson = require("../toneData/s39/s39e5Tone.json");
var e6Tonejson = require("../toneData/s39/s39e6Tone.json");
var e7Tonejson = require("../toneData/s39/s39e7Tone.json");
var e8Tonejson = require("../toneData/s39/s39e8Tone.json");
var e9Tonejson = require("../toneData/s39/s39e9Tone.json");
var e10Tonejson = require("../toneData/s39/s39e10Tone.json");
var e11Tonejson = require("../toneData/s39/s39e11Tone.json");
var e12Tonejson = require("../toneData/s39/s39e12Tone.json");
// var e13Tonejson = require("../toneData/s39/s39e13Tone.json");

let s39jsonArray = [e1Tonejson, e2Tonejson, e3Tonejson, e4Tonejson, e5Tonejson, e6Tonejson, e7Tonejson, e8Tonejson, e9Tonejson,e10Tonejson, e11Tonejson, e12Tonejson]
let s39Tones = []
const s39eArray = ["I Vote You Out and That's It", "YOLO, Let's Play", "Honesty Would Be Chill", "Plan Z", "Don't Bite the Hand That Feeds You", "Suck It Up Buttercup", "I was Born at Night, But Not Last Night", "We Made it to the Merge", "Two for the Price of One", "Bring on the Bacon", "A Very Simple Plan", "Just Go For It"]

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

function get39DocTones(json) {
    for (let i = 0; i < json.length; i++) {
        let newSeason = new Episode()

        for (let k = 0; k < json[i].result.document_tone.tones.length; k++) {
            newSeason.id = i;
            if (json[i].result.document_tone.tones[k].tone_name == "Joy") {
                newSeason.joy += json[i].result.document_tone.tones[k].score * 100;
            }
            if (json[i].result.document_tone.tones[k].tone_name == "Fear") {
                newSeason.fear += json[i].result.document_tone.tones[k].score * 100;
            }
            if (json[i].result.document_tone.tones[k].tone_name == "Sadness") {
                newSeason.sadness += json[i].result.document_tone.tones[k].score * 100;
            }
            if (json[i].result.document_tone.tones[k].tone_name == "Anger") {
                newSeason.anger += json[i].result.document_tone.tones[k].score * 100;
            }
            if (json[i].result.document_tone.tones[k].tone_name == "Confident") {
                newSeason.confident += json[i].result.document_tone.tones[k].score * 100;
            }
            if (json[i].result.document_tone.tones[k].tone_name == "Tentative") {
                newSeason.tentative += json[i].result.document_tone.tones[k].score * 100;
            }
            if (json[i].result.document_tone.tones[k].tone_name == "Analytical") {
                newSeason.analytical += json[i].result.document_tone.tones[k].score * 100;
            }

        };
        s39Tones.push(newSeason);
    }
    return s39Tones;
}
let new39DocTones = get39DocTones(s39jsonArray)
function AssignEpisodeNames(s39Tones) {
    for (let j = 0; j < s39Tones.length; j++) {
        for (let l = 0; l < s39eArray.length; l++) {
            s39Tones[j].name = s39eArray[j]
        }
    }
    return s39Tones
}

export const AssignedDoc39Episodes = AssignEpisodeNames(new39DocTones)
console.log(AssignedDoc39Episodes[3]);
console.log(AssignedDoc39Episodes[11]);
