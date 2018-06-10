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

exports.resources = function() {
    return [
        {
            'id': 1,
            'type': 'tutorial',
            'name': 'What is IOTA and some terminology explained',
            'author': 'Robert Lie',
            'url': 'https://www.youtube.com/watch?v=MsaPA3U4ung',
            'icon': 'https://i.ytimg.com/vi/MsaPA3U4ung/maxresdefault.jpg'
        },
        {
            'id': 2,
            'type': 'tutorial',
            'name': 'Trit and Tryte',
            'author': 'Robert Lie',
            'url': 'https://www.youtube.com/watch?v=2pBZJvVn4NY',
            'icon': 'https://i.ytimg.com/vi/2pBZJvVn4NY/maxresdefault.jpg'
        },
        {
            'id': 3,
            'type': 'tutorial',
            'name': 'IOTA Seed',
            'author': 'Robert Lie',
            'url': 'https://www.youtube.com/watch?v=UClPU2e2MJI',
            'icon': 'https://i.ytimg.com/vi/UClPU2e2MJI/maxresdefault.jpg'
        },
        {
            'id': 4,
            'type': 'tutorial',
            'name': 'Own weight, cumulative weight and minimum weight magnitude',
            'author': 'Robert Lie',
            'url': 'https://www.youtube.com/watch?v=sOM9BM2__iU',
            'icon': 'https://i.ytimg.com/vi/sOM9BM2__iU/maxresdefault.jpg'
        },
        {
            'id': 5,
            'type': 'tutorial',
            'name': 'Snapshot and Attach to tangle',
            'author': 'Robert Lie',
            'url': 'https://www.youtube.com/watch?v=U4vF0_Imz_0',
            'icon': 'https://i.ytimg.com/vi/U4vF0_Imz_0/maxresdefault.jpg'
        },
        {
            'id': 6,
            'type': 'tutorial',
            'name': 'Why you should not reuse an address for outgoing transactions',
            'author': 'Robert Lie',
            'url': 'https://www.youtube.com/watch?v=EohFxzWLh1U',
            'icon': 'https://i.ytimg.com/vi/EohFxzWLh1U/maxresdefault.jpg'
        },
        {
            'id': 7,
            'type': 'tutorial',
            'name': 'Proof of Work, Curl and Nonce',
            'author': 'Robert Lie',
            'url': 'https://www.youtube.com/watch?v=EEgpt2EsLh4',
            'icon': 'https://i.ytimg.com/vi/EEgpt2EsLh4/maxresdefault.jpg'
        },
        {
            'id': 8,
            'type': 'tutorial',
            'name': 'Cryptographic sponge construction',
            'author': 'Robert Lie',
            'url': 'https://www.youtube.com/watch?v=s09BWh9yjMw',
            'icon': 'https://i.ytimg.com/vi/s09BWh9yjMw/maxresdefault.jpg'
        },
        {
            'id': 9,
            'type': 'tutorial',
            'name': 'Address and checksum',
            'author': 'Robert Lie',
            'url': 'https://www.youtube.com/watch?v=YdYjJA-NFcE',
            'icon': 'https://i.ytimg.com/vi/YdYjJA-NFcE/maxresdefault.jpg'
        },
        {
            'id': 10,
            'type': 'tutorial',
            'name': 'Key, Digests and Address',
            'author': 'Robert Lie',
            'url': 'https://www.youtube.com/watch?v=NuGl6od5L18',
            'icon': 'https://i.ytimg.com/vi/NuGl6od5L18/maxresdefault.jpg'
        },
        {
            'id': 11,
            'type': 'tutorial',
            'name': 'Transaction and Bundle',
            'author': 'Robert Lie',
            'url': 'https://www.youtube.com/watch?v=M9dwwgtbbOU',
            'icon': 'https://i.ytimg.com/vi/M9dwwgtbbOU/maxresdefault.jpg'
        },
        {
            'id': 12,
            'type': 'tutorial',
            'name': 'Attach Address To Tangle',
            'author': 'Robert Lie',
            'url': 'https://www.youtube.com/watch?v=bQQGvFQEc24',
            'icon': 'https://i.ytimg.com/vi/bQQGvFQEc24/maxresdefault.jpg'
        },
        {
            'id': 13,
            'type': 'tutorial',
            'name': 'Coordinator',
            'author': 'Robert Lie',
            'url': 'https://www.youtube.com/watch?v=O5BWD0yxiJA',
            'icon': 'https://i.ytimg.com/vi/O5BWD0yxiJA/maxresdefault.jpg'
        },
        {
            'id': 14,
            'type': 'tutorial',
            'name': 'Rebroadcast, reattach and promote',
            'author': 'Robert Lie',
            'url': 'https://www.youtube.com/watch?v=GEUMG_5Rgg8',
            'icon': 'https://i.ytimg.com/vi/GEUMG_5Rgg8/maxresdefault.jpg'
        },
        {
            'id': 15,
            'type': 'tutorial',
            'name': 'Message and Tag',
            'author': 'Robert Lie',
            'url': 'https://www.youtube.com/watch?v=jvJ3Q_QWdhw',
            'icon': 'https://i.ytimg.com/vi/jvJ3Q_QWdhw/maxresdefault.jpg'
        },
        {
            'id': 16,
            'type': 'tutorial',
            'name': 'BundleHash',
            'author': 'Robert Lie',
            'url': 'https://www.youtube.com/watch?v=2k1P6xOmjZ8',
            'icon': 'https://i.ytimg.com/vi/2k1P6xOmjZ8/maxresdefault.jpg'
        },
        {
            'id': 17,
            'type': 'tutorial',
            'name': 'normalizedBundleHash',
            'author': 'Robert Lie',
            'url': 'https://www.youtube.com/watch?v=XlisvyDPv_Q',
            'icon': 'https://i.ytimg.com/vi/XlisvyDPv_Q/maxresdefault.jpg'
        },
        {
            'id': 18,
            'type': 'tutorial',
            'name': 'Create and validate a signature',
            'author': 'Robert Lie',
            'url': 'https://www.youtube.com/watch?v=7lhS542wDL8',
            'icon': 'https://i.ytimg.com/vi/7lhS542wDL8/maxresdefault.jpg'
        },
        {
            'id': 19,
            'type': 'tutorial',
            'name': 'Merkle Tree',
            'author': 'Robert Lie',
            'url': 'https://www.youtube.com/watch?v=s0fruNfgW30',
            'icon': 'https://i.ytimg.com/vi/s0fruNfgW30/maxresdefault.jpg'
        },
        {
            'id': 20,
            'type': 'tutorial',
            'name': 'Masked Authenticated Messaging',
            'author': 'Robert Lie',
            'url': 'https://www.youtube.com/watch?v=Nnwn_o_ZBFU',
            'icon': 'https://i.ytimg.com/vi/Nnwn_o_ZBFU/maxresdefault.jpg'
        },
        {
            'id': 21,
            'type': 'tutorial',
            'name': 'Masked Authenticated Messaging Payload',
            'author': 'Robert Lie',
            'url': 'https://www.youtube.com/watch?v=3oRYCfGun-A',
            'icon': 'https://i.ytimg.com/vi/3oRYCfGun-A/maxresdefault.jpg'
        },
        {
            'id': 22,
            'type': 'tutorial',
            'name': 'CryptoJS',
            'author': 'Robert Lie',
            'url': 'https://www.youtube.com/watch?v=0IIh_aXGzBs',
            'icon': 'https://i.ytimg.com/vi/0IIh_aXGzBs/maxresdefault.jpg'
        },
        {
            'id': 23,
            'type': 'tutorial',
            'name': 'Masked Authenticated Messaging Demo Verifiable Claims',
            'author': 'Robert Lie',
            'url': 'https://www.youtube.com/watch?v=4YbxGBrhwE8',
            'icon': 'https://i.ytimg.com/vi/4YbxGBrhwE8/maxresdefault.jpg'
        },
        {
            'id': 24,
            'type': 'tutorial',
            'name': 'Masked Authenticated Messaging Demo Store File',
            'author': 'Robert Lie',
            'url': 'https://www.youtube.com/watch?v=m26HhMQBJZ0',
            'icon': 'https://i.ytimg.com/vi/m26HhMQBJZ0/maxresdefault.jpg'
        },
        {
            'id': 25,
            'type': 'tutorial',
            'name': 'Multisignatures',
            'author': 'Robert Lie',
            'url': 'https://www.youtube.com/watch?v=U4IkOCtYiAg',
            'icon': 'https://i.ytimg.com/vi/U4IkOCtYiAg/maxresdefault.jpg'
        },
        {
            'id': 26,
            'type': 'tutorial',
            'name': 'WebRTC and MAM Signaling',
            'author': 'Robert Lie',
            'url': 'https://www.youtube.com/watch?v=_KpwUMolw0k',
            'icon': 'https://i.ytimg.com/vi/_KpwUMolw0k/maxresdefault.jpg'
        },
        {
            'id': 27,
            'type': 'tutorial',
            'name': 'Trinity Wallet Seed and Two-Factor Authentication',
            'author': 'Robert Lie',
            'url': 'https://www.youtube.com/watch?v=Tp98yWNFV1g',
            'icon': 'https://i.ytimg.com/vi/Tp98yWNFV1g/maxresdefault.jpg'
        },
        {
            'id': 28,
            'type': 'tutorial',
            'name': 'Trinity Wallet Seed and Two-Factor Authentication Part 2',
            'author': 'Robert Lie',
            'url': 'https://www.youtube.com/watch?v=cfCFUMCFA68',
            'icon': 'https://i.ytimg.com/vi/cfCFUMCFA68/maxresdefault.jpg'
        },
        {
            'id': 29,
            'type': 'tutorial',
            'name': 'Why normalizedBundleHash? Why not reuse an address for outgoing transactions?',
            'author': 'Robert Lie',
            'url': 'https://www.youtube.com/watch?v=xu70JnThsXk',
            'icon': 'https://i.ytimg.com/vi/xu70JnThsXk/maxresdefault.jpg'
        }
    ]
};
