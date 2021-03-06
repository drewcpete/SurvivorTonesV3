// import { Bar } from "react-chartjs-2";
// const fs = require('fs');
var s13Tonejson = require("../toneData/s13toneText.json");
var s14Tonejson = require("../toneData/s14toneText.json");
var s15Tonejson = require("../toneData/s15toneText.json");
var s16Tonejson = require("../toneData/s16toneText.json");
var s17Tonejson = require("../toneData/s17toneText.json");
var s18Tonejson = require("../toneData/s18toneText.json");
var s19Tonejson = require("../toneData/s19toneText.json");
var s20Tonejson = require("../toneData/s20toneText.json");
var s21Tonejson = require("../toneData/s21toneText.json");
var s22Tonejson = require("../toneData/s22toneText.json");
var s23Tonejson = require("../toneData/s23toneText.json");
var s24Tonejson = require("../toneData/s24toneText.json");
var s25Tonejson = require("../toneData/s25toneText.json");
var s26Tonejson = require("../toneData/s26toneText.json");
var s27Tonejson = require("../toneData/s27toneText.json");
var s28Tonejson = require("../toneData/s28toneText.json");
var s29Tonejson = require("../toneData/s29toneText.json");
var s30Tonejson = require("../toneData/s30toneText.json");
var s31Tonejson = require("../toneData/s31toneText.json");
var s32Tonejson = require("../toneData/s32toneText.json");
var s33Tonejson = require("../toneData/s33toneText.json");
var s34Tonejson = require("../toneData/s34toneText.json");
var s35Tonejson = require("../toneData/s35toneText.json");
var s36Tonejson = require("../toneData/s36toneText.json");
var s37Tonejson = require("../toneData/s37toneText.json");
var s38Tonejson = require("../toneData/s38toneText.json");
// var s39json = require("../toneData/s39toneText.json");

var jsonArray = [s13Tonejson, s14Tonejson, s15Tonejson, s16Tonejson, s17Tonejson, s18Tonejson, s19Tonejson, s20Tonejson, s21Tonejson, s22Tonejson, s23Tonejson, s24Tonejson, s25Tonejson, s26Tonejson, s27Tonejson, s28Tonejson, s29Tonejson, s30Tonejson, s31Tonejson, s32Tonejson, s33Tonejson, s34Tonejson, s35Tonejson, s36Tonejson, s37Tonejson, s38Tonejson];

var seasonArray = ["Cook Islands", "Fiji", "China", "Micronesia", "Gabon", "Tocantis", "Samoa", "Heroes vs. Villians", "Nicaragua", "Redemption Island", "South Pacific", "One World", "Philippines", "Caramoan", "Blood vs. Water", "Cagayan", "San Juan del Sur", "Worlds Apart", "Cambodia", "Kaoh Rong", "Millennials vs Gen X", "Game Changers", "Heroes vs. Healers vs. Hustlers", "Ghost Island", "David vs. Goliath", "Edge of Extinction", "Island of the Idols"];

let AllSeasonTones = [];
// let AllSeasonSentenceTones = [];

function Season() {
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
// function Tones() {
//     this.id = 0;
//     this.fear = 0;
//     this.joy = 0;
//     this.sadness = 0;
//     this.anger = 0;
//     this.confident = 0;
//     this.tentative = 0;
//     this.analytical = 0;
//     // this.users = []
// };

// function getSentenceTones(json) {
//     let newSentenceTones = new Tone()
//     for (let i = 0; i < json.length; i++) {
//         for (let k = 0; k < json[i].result.sentences_tone[k].tones.length; k++){
//             if(json[i].result.sentences_tone[k].tones.tone_name == "Joy"){
//                 newSentenceTones.joy++;
//             }
//             if(json[i].result.sentences_tone[k].tones.tone_name == "Fear"){
//                 newSentenceTones.fear++;
//             }
//             if(json[i].result.sentences_tone[k].tones.tone_name == "Anger"){
//                 newSentenceTones.anger++;
//             }
//             if(json[i].result.sentences_tone[k].tones.tone_name == "Sadness"){
//                 newSentenceTones.sadness++;
//             }
//             if(json[i].result.sentences_tone[k].tones.tone_name == "Tentative"){
//                 newSentenceTones.tentative++;
//             }
//             if(json[i].result.sentences_tone[k].tones.tone_name == "Analytical"){
//                 newSentenceTones.analytical++;
//             }
//             if(json[i].result.sentences_tone[k].tones.tone_name == "Confident"){
//                 newSentenceTones.confident++;
//             }
//         }
      
//     }
//     return AllSeasonsSentenceTones;
// }

function getDocumentTones(json) {
    for (let i = 0; i < json.length; i++) {
        let newSeason = new Season();  
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
        AllSeasonTones.push(newSeason);
    }
    return AllSeasonTones;
}

let newDocumentTones = getDocumentTones(jsonArray)

function AssignSeasonNames(allSeasonTones) {
    for (let j = 0; j < allSeasonTones.length; j++) {
        for (let l = 0; l < seasonArray.length; l++) {
            allSeasonTones[j].name = seasonArray[j]
        }
    }

    return allSeasonTones
}

export const AssignedDocumentSeasons = AssignSeasonNames(newDocumentTones);

