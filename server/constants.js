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
            'iconClass': 'fa-commenting social commenting',
            'baseUrl': '@'
        }
    };
    return socialAccountValues;
};


exports.teamMembers = function(cb) {
    let memberDataFromGoogleSheet = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRTus6J1vSHZSwkGzPg7iGnzGHx9kNcMj9dAiO5oDYQQSra00PIbW-U8O5V-4s__7LiPQIkA1sNgUzV/pub?gid=965069893&single=true&output=csv";

    let finalResult = []
    let sl = 1;
    csv().fromStream(request.get(memberDataFromGoogleSheet))
    .on('csv', (csvRow) => {
        let pictureUrl = 'http://www.iotaclimbing.uk/s/cc_images/teaserbox_258203.png';
        let socialHandles = {};
        if (csvRow[5] && csvRow[5].length>0) {
            pictureUrl = csvRow[5]
        }
        if (csvRow[4]) {
            socialHandles["discord"] = csvRow[4];
        }
        finalResult.push({
            "isActive": true,
            "socialHandles": socialHandles,
            "location": csvRow[3]+', '+csvRow[2],
            "detail": "",
            "picture": pictureUrl,
            "lastName": csvRow[1],
            "firstName": csvRow[0],
            "memberHandle": csvRow[0].toLowerCase(),
            "memberId": sl
        });
        sl = sl+1;
    })
    .on('done', (error) => {
        if(error){
            console.log('error:', error);
            cb(error);
        }
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
