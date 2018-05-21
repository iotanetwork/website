/**
 * Created by Anirudha on 15/07/17.
 */

var rp = require('request-promise');
const request = require('request');
const csv = require('csvtojson');

exports.sampleFunction = function() {};

exports.cities = function() {
    return []
};

exports.socialAccounts = function() {
    var socialAccountValues = {
        'website': {
            'iconClass': 'fa-link',
            'baseUrl': ''
        },
        'facebook': {
            'iconClass': 'fa-facebook',
            'baseUrl': 'https://facebook.com/'
        },
        'twitter': {
            'iconClass': 'fa-twitter',
            'baseUrl': 'https://twitter.com/'
        },
        'linkedin': {
            'iconClass': 'fa-linkedin',
            'baseUrl': 'https://www.linkedin.com/in/'
        },
        'github': {
            'iconClass': 'fa-github',
            'baseUrl': 'https://github.com/'
        },
        'discord': {
            'iconClass': 'fa-discord',
            'baseUrl': 'https://discord.gg/csc7Dak'
        },
        'telegram': {
            'iconClass': 'fa-telegram',
            'baseUrl': 'https://web.telegram.org/#/im?p=@'
        }
    };
    return socialAccountValues;
};

exports.teamMembers = function(cb) {
    let memberDataFromGoogleSheet = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRTus6J1vSHZSwkGzPg7iGnzGHx9kNcMj9dAiO5oDYQQSra00PIbW-U8O5V-4s__7LiPQIkA1sNgUzV/pub?gid=965069893&single=true&output=csv";
    let finalResult = [];
    let sl = 1;
    let noPicList = false;
    let noPicResult = [];
    csv().fromStream(request.get(memberDataFromGoogleSheet))
    .on('csv', (csvRow) => {
        let pictureUrl = 'https://i.imgur.com/pLzV5XF.png';
        let socialHandles = {};
        noPicList = false
        if (csvRow[5] && csvRow[5].length>0) {
            pictureUrl = csvRow[5]
        }
        else {
            noPicList = true;
        }
        if (csvRow[4]) {
            socialHandles["discord"] = csvRow[4];
        }
        if (csvRow[6]) {
            socialHandles["linkedin"] = csvRow[6];
        }
        if (csvRow[7]) {
            socialHandles["facebook"] = csvRow[7];
        }
        if (csvRow[8]) {
            socialHandles["twitter"] = csvRow[8];
        }
        if (csvRow[9]) {
            socialHandles["github"] = csvRow[9];
        }
        if(noPicList) {
            noPicResult.push({
                "isActive": true,
                "socialHandles": socialHandles,
                "location": csvRow[3]+', '+csvRow[2],
                "detail": "",
                "picture": pictureUrl,
                "lastName": csvRow[1],
                "firstName": csvRow[0],
                "memberHandle": csvRow[0].toLowerCase(),
                "memberEmail": csvRow[10],
                "memberId": sl
            })
        }
        else {
            finalResult.push({
                "isActive": true,
                "socialHandles": socialHandles,
                "location": csvRow[3]+', '+csvRow[2],
                "detail": "",
                "picture": pictureUrl,
                "lastName": csvRow[1],
                "firstName": csvRow[0],
                "memberHandle": csvRow[0].toLowerCase(),
                "memberEmail": csvRow[10],
                "memberId": sl
            });
        }
        sl = sl+1;
    })
    .on('done', (error) => {
        if(error){
            console.log('error:', error);
            cb(error);
        }
        finalResult = finalResult.concat(noPicResult);
        cb(null, finalResult);
    })

}

exports.partners = function() {
    return []
};

exports.mentors = function() {
    return [
        {
            'mentorId': 1,
            'mentorHandle': '',
            'preName': '',
            'name': '',
            'postName': '',
            'picture': '',
            'detail': '',
            'socialHandles': {
                'twitter': '',
                'linkedin': ''
            },
            'isActive': true
        }
    ]
};

exports.talks = function() {
    return []
};
