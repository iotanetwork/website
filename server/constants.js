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

// exports.teamMembers = function() {
//     return [
//         {
//             "isActive": true,
//             "socialHandles": {
//                 "discord": "kev"
//             },
//             "location": "New York, US",
//             "detail": "",
//             "picture": "https://s3.amazonaws.com/iota-ien/members/kevin.jpg",
//             "postName": "Chen",
//             "name": "Kevin",
//             "preName": "",
//             "memberHandle": "kev",
//             "memberId": 1
//         }, {
//             "isActive": true,
//             "location": "Montreal, Canada",
//             "detail": "",
//             "picture": "https://s3.amazonaws.com/iota-ien/members/allen.jpg",
//             "postName": "Shashaty",
//             "name": "Allen",
//             "preName": "",
//             "memberHandle": "allen",
//             "memberId": 2
//         }, {
//             "isActive": true,
//             "location": "Hong Kong, China",
//             "detail": "",
//             "picture": "https://i.imgur.com/6kFWdvQ.jpg",
//             "postName": "Liu",
//             "name": "Jeffery",
//             "preName": "Xun",
//             "memberHandle": "jeff",
//             "memberId": 3
//         }, {
//             "isActive": true,
//             "socialHandles": {
//                 "discord": "ehe"
//             },
//             "location": "Brisbane, Australia",
//             "detail": "",
//             "picture": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/5/005/068/17b/0291588.jpg",
//             "postName": "Heitman",
//             "name": "Elliot",
//             "preName": "",
//             "memberHandle": "elliot",
//             "memberId": 4
//         }, {
//             "isActive": true,
//             "socialHandles": {
//                 "twitter": "kranirudha",
//                 "discord": "anistark",
//                 "github": "anistark"
//             },
//             "location": "Bengaluru, India",
//             "detail": "",
//             "picture": "https://i.imgur.com/x7ziXaZ.jpg",
//             "postName": "",
//             "name": "Anirudha",
//             "preName": "Kumar",
//             "memberHandle": "anistark",
//             "memberId": 5
//         }, {
//             "isActive": true,
//             "location": "Taipei, Taiwan",
//             "detail": "",
//             "picture": "https://i.imgur.com/6kFWdvQ.jpg",
//             "postName": "Chu",
//             "name": "Lman",
//             "preName": "",
//             "memberHandle": "lman",
//             "memberId": 6
//         }, {
//             "isActive": true,
//             "location": "Berlin, Germany",
//             "detail": "",
//             "picture": "https://i.imgur.com/6kFWdvQ.jpg",
//             "postName": "Reike",
//             "name": "Florin",
//             "preName": "",
//             "memberHandle": "florin",
//             "memberId": 7
//         }, {
//             "isActive": true,
//             "location": "New Orleans, US",
//             "detail": "",
//             "picture": "https://i.imgur.com/6kFWdvQ.jpg",
//             "postName": "Johnson",
//             "name": "Winston",
//             "preName": "Matthew",
//             "memberHandle": "matt",
//             "memberId": 8
//         }, {
//             "isActive": true,
//             "location": "Haarlem, Netherlands",
//             "detail": "",
//             "picture": "https://i.imgur.com/6kFWdvQ.jpg",
//             "postName": "Willemsen",
//             "name": "Peter",
//             "preName": "",
//             "memberHandle": "peter",
//             "memberId": 9
//         }, {
//             "isActive": true,
//             "location": "Tokyo, Japan",
//             "detail": "",
//             "picture": "https://i.imgur.com/6kFWdvQ.jpg",
//             "postName": "Gehrke",
//             "name": "Norbert",
//             "preName": "",
//             "memberHandle": "norbert",
//             "memberId": 10
//         }, {
//             "isActive": true,
//             "location": "Ahmedabad, India/Austin, US",
//             "detail": "",
//             "picture": "https://i.imgur.com/6kFWdvQ.jpg",
//             "postName": "Joshi",
//             "name": "Parikshit",
//             "preName": "",
//             "memberHandle": "parikshit",
//             "memberId": 11
//         }, {
//             "isActive": true,
//             "location": "Los Angeles, US",
//             "detail": "",
//             "picture": "https://i.imgur.com/6kFWdvQ.jpg",
//             "postName": "Kunert",
//             "name": "Martin",
//             "preName": "",
//             "memberHandle": "martin",
//             "memberId": 12
//         }, {
//             "isActive": true,
//             "location": "Yerevan, Armenia",
//             "detail": "",
//             "picture": "https://i.imgur.com/6kFWdvQ.jpg",
//             "postName": "Asriyan",
//             "name": "Tigran",
//             "preName": "",
//             "memberHandle": "tigran",
//             "memberId": 13
//         }, {
//             "isActive": true,
//             "location": "Toronto, Canada",
//             "detail": "",
//             "picture": "https://i.imgur.com/6kFWdvQ.jpg",
//             "postName": "Horowitz",
//             "name": "Liza",
//             "preName": "",
//             "memberHandle": "liza",
//             "memberId": 14
//         }, {
//             "isActive": true,
//             "location": "Sofia, Bulgaria",
//             "detail": "",
//             "picture": "https://i.imgur.com/6kFWdvQ.jpg",
//             "postName": "Lalev",
//             "name": "Hristo",
//             "preName": "",
//             "memberHandle": "hristo",
//             "memberId": 15
//         }, {
//             "isActive": true,
//             "location": "Barcelona, Spain",
//             "detail": "",
//             "picture": "https://i.imgur.com/6kFWdvQ.jpg",
//             "postName": "Montiel",
//             "name": "Miguel Díaz",
//             "preName": "",
//             "memberHandle": "miguel",
//             "memberId": 16
//         }, {
//             "isActive": true,
//             "location": "Zurich, Switzerland",
//             "detail": "",
//             "picture": "https://i.imgur.com/6kFWdvQ.jpg",
//             "postName": "Bertheau",
//             "name": "Tom",
//             "preName": "",
//             "memberHandle": "tom",
//             "memberId": 17
//         }, {
//             "isActive": true,
//             "location": "Washington D.C., US",
//             "detail": "",
//             "picture": "https://i.imgur.com/6kFWdvQ.jpg",
//             "postName": "Cheung",
//             "name": "Stephen",
//             "preName": "",
//             "memberHandle": "stephen",
//             "memberId": 18
//         }, {
//             "isActive": true,
//             "location": "Herzliya, Israel",
//             "detail": "",
//             "picture": "https://i.imgur.com/6kFWdvQ.jpg",
//             "postName": "Kotlarov",
//             "name": "Evgeny",
//             "preName": "",
//             "memberHandle": "evgeny",
//             "memberId": 19
//         }, {
//             "isActive": true,
//             "location": "Papendrecht, Netherlands",
//             "detail": "",
//             "picture": "https://i.imgur.com/VsgyH7y.png",
//             "postName": "Schouten",
//             "name": "Dennis",
//             "preName": "",
//             "memberHandle": "dennis",
//             "memberId": 20
//         }, {
//             "isActive": true,
//             "location": "Tokyo, Japan",
//             "detail": "",
//             "picture": "https://i.imgur.com/6kFWdvQ.jpg",
//             "postName": "Orihaka",
//             "name": "Tawago",
//             "preName": "",
//             "memberHandle": "tawago",
//             "memberId": 21
//         }, {
//             "isActive": true,
//             "location": "London, UK",
//             "detail": "",
//             "picture": "https://i.imgur.com/6kFWdvQ.jpg",
//             "postName": "Perla",
//             "name": "Akhilesh",
//             "preName": "",
//             "memberHandle": "akhilesh",
//             "memberId": 22
//         }, {
//             "isActive": true,
//             "location": "Berlin, Germany",
//             "detail": "",
//             "picture": "https://i.imgur.com/6kFWdvQ.jpg",
//             "postName": "Reike",
//             "name": "Florin",
//             "preName": "",
//             "memberHandle": "florin",
//             "memberId": 23
//         }, {
//             "memberId": 24,
//             "memberHandle": "kane",
//             "preName": "",
//             "name": "Kane",
//             "postName": "Templeton",
//             "picture": "https://s3.amazonaws.com/iota-ien/members/kane.jpg",
//             "detail": "",
//             "location": "Sydney, Australia",
//             "isActive": true
//         }, {
//             "isActive": true,
//             "location": "Taipei, Taiwan",
//             "detail": "",
//             "picture": "https://i.imgur.com/6kFWdvQ.jpg",
//             "postName": "Pradhan",
//             "name": "Sipun",
//             "preName": "",
//             "memberHandle": "sipun",
//             "memberId": 25
//         }, {
//             "isActive": true,
//             "location": "Boulder, US",
//             "detail": "",
//             "picture": "https://i.imgur.com/6kFWdvQ.jpg",
//             "postName": "MacNaughton",
//             "name": "Robert",
//             "preName": "",
//             "memberHandle": "robert",
//             "memberId": 26
//         }, {
//             "isActive": true,
//             "location": "Ankara, Turkey",
//             "detail": "",
//             "picture": "https://i.imgur.com/wxKbQ49.jpg",
//             "postName": "Sevinç",
//             "name": "Çağrı",
//             "preName": "",
//             "memberHandle": "cagri",
//             "memberId": 27
//         }, {
//             "isActive": true,
//             "location": "Stuttgart, Germany",
//             "detail": "",
//             "picture": "https://i.imgur.com/6kFWdvQ.jpg",
//             "postName": "Ross",
//             "name": "Mirko",
//             "preName": "",
//             "memberHandle": "mirko",
//             "memberId": 28
//         }, {
//             "isActive": true,
//             "location": "Miami, US",
//             "detail": "",
//             "picture": "https://i.imgur.com/6kFWdvQ.jpg",
//             "postName": "St.Paul",
//             "name": "Miguel",
//             "preName": "",
//             "memberHandle": "miguel",
//             "memberId": 29
//         }, {
//             "isActive": true,
//             "location": "Irvine, US",
//             "detail": "",
//             "picture": "https://i.imgur.com/6kFWdvQ.jpg",
//             "postName": "Bala",
//             "name": "Raghu",
//             "preName": "",
//             "memberHandle": "raghu",
//             "memberId": 30
//         }, {
//             "isActive": true,
//             "location": "Singapore",
//             "detail": "",
//             "picture": "https://s14.postimg.org/90tuunly7/Screen_Shot_2018-03-06_at_21.23.57.png",
//             "postName": "Ulrich",
//             "name": "Nino",
//             "preName": "",
//             "memberHandle": "nino",
//             "memberId": 31
//         }, {
//             "isActive": true,
//             "socialHandles": {
//                 "discord": "ralf"
//             },
//             "location": "Germany",
//             "detail": "",
//             "picture": "https://rottmann.net/wp-content/uploads/2018/01/ralf_rottmann_1000x1000_bandw_half.png",
//             "postName": "Rottmann",
//             "name": "Ralf",
//             "preName": "",
//             "memberHandle": "ralf",
//             "memberId": 32
//         }, {
//             "isActive": true,
//             "location": "Toronto, Canada",
//             "detail": "",
//             "picture": "https://i.imgur.com/6kFWdvQ.jpg",
//             "postName": "Olson",
//             "name": "Darren",
//             "preName": "",
//             "memberHandle": "greenprotocol",
//             "memberId": 33
//         }, {
//             "isActive": true,
//             "location": "Rio de Janeiro, Brazil",
//             "detail": "",
//             "picture": "https://i.imgur.com/6kFWdvQ.jpg",
//             "postName": "França de Mello",
//             "name": "Leandro",
//             "preName": "",
//             "memberHandle": "leandrofrancademello",
//             "memberId": 34
//         }, {
//             "isActive": true,
//             "location": "Berlin, Germany",
//             "detail": "",
//             "picture": "https://i.imgur.com/6kFWdvQ.jpg",
//             "postName": "Geike",
//             "name": "Michael",
//             "preName": "",
//             "memberHandle": "MikiGeike",
//             "memberId": 35
//         }, {
//             "isActive": true,
//             "socialHandles": {
//                 "discord": "Lady IOTA"
//             },
//             "location": "London, United Kingdom",
//             "detail": "",
//             "picture": "https://s3.amazonaws.com/iota-ien/members/lady_iota.jpg",
//             "postName": "Nightingale",
//             "name": "Angelica",
//             "preName": "",
//             "memberHandle": "angelica",
//             "memberId": 36
//         }, {
//             "isActive": true,
//             "socialHandles": {
//                 "linkedin": "jisseplaggenborg",
//                 "twitter": "Jisse93",
//                 "discord": "JisseP"
//             },
//             "location": "Utrecht, Netherlands",
//             "detail": "",
//             "picture": "https://i.imgur.com/KSWeOOJ.png",
//             "postName": "Plaggenborg",
//             "name": "Jisse",
//             "preName": "",
//             "memberHandle": "JisseP",
//             "memberId": 37
//         }, {
//             "isActive": true,
//             "socialHandles": {
//                 "discord": "raafaell"
//             },
//             "location": "Leominster, United States",
//             "detail": "",
//             "picture": "https://www.tanglefy.com/IMG_20131102_131004_2.jpg",
//             "postName": "Rohden",
//             "name": "Rafael",
//             "preName": "",
//             "memberHandle": "rafaelrohden",
//             "memberId": 38
//         }, {
//             "isActive": true,
//             "socialHandles": {
//                 "discord": "Rajiv Shah #5322"
//             },
//             "location": "Wilmington, DE, United States",
//             "detail": "",
//             "picture": "https://ca.slack-edge.com/T1MAUQMD4-U5N5NE2LS-588f282b9128-512",
//             "postName": "Shah",
//             "name": "Rajiv",
//             "preName": "",
//             "memberHandle": "rajivshah",
//             "memberId": 39
//         }, {
//             "isActive": true,
//             "location": "Tallinn, Estonia",
//             "detail": "",
//             "picture": "https://i.imgur.com/6kFWdvQ.jpg",
//             "postName": "Bernadt",
//             "name": "Juhan",
//             "preName": "",
//             "memberHandle": "ajuhanb",
//             "memberId": 40
//         }, {
//             "isActive": true,
//             "socialHandles": {
//                 "discord": "kevinley"
//             },
//             "location": "Luxembourg Netherlands",
//             "detail": "",
//             "picture": "https://i.imgur.com/6kFWdvQ.jpg",
//             "postName": "Ley",
//             "name": "Kevin",
//             "preName": "",
//             "memberHandle": "kevinley",
//             "memberId": 41
//         }, {
//             "isActive": true,
//             "socialHandles": {
//                 "discord": "Max_E"
//             },
//             "location": "Montreal, Canada",
//             "detail": "",
//             "picture": "http://aeronook.com/wp-content/uploads/2016/09/IMG_3364.jpg",
//             "postName": "Eichelbaum",
//             "name": "Max",
//             "preName": "",
//             "memberHandle": "Max_E",
//             "memberId": 42
//         }, {
//             "isActive": true,
//             "socialHandles": {
//                 "discord": "originalcopy"
//             },
//             "location": "New York City, United States",
//             "detail": "",
//             "picture": "https://i.imgur.com/6kFWdvQ.jpg",
//             "postName": "Stoinis",
//             "name": "Alexi",
//             "preName": "",
//             "memberHandle": "originalcopy",
//             "memberId": 43
//         }, {
//             "isActive": true,
//             "location": "Skien, Norway",
//             "detail": "",
//             "picture": "https://i.imgur.com/6kFWdvQ.jpg",
//             "postName": "",
//             "name": "Kent-Ruben",
//             "preName": "Johansen",
//             "memberHandle": "kentruben",
//             "memberId": 44
//         }, {
//             "isActive": true,
//             "location": "Paris, France",
//             "detail": "",
//             "picture": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAMAAgDGAAwAAQAAAAAAAA8lAAAAJDMwOGE2YWRhLWYxZDQtNGIxZC04Yzk4LTcwNzc1ZThjOWFlMA.jpg",
//             "postName": "Goetz",
//             "name": "Julia K.",
//             "preName": "",
//             "memberHandle": "juliak",
//             "memberId": 44
//         }, {
//             "memberId": 45,
//             "memberHandle": "larserik",
//             "preName": "Lars-Erik",
//             "name": "Notevarp",
//             "postName": "Bjørge",
//             "picture": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAzMAAAAJGM0MDE1ZGM1LTdhMmQtNDY2Ni1iMDg3LTQ3MjM4OGI0NGFjMw.jpg",
//             "detail": "",
//             "location": "Trondheim, Norway",
//             "socialHandles": {
//                 "discord": "wEEtoZ #2111"
//             },
//             "isActive": true
//         }, {
//             "memberId": 46,
//             "memberHandle": "mporter",
//             "preName": "",
//             "name": "Michael",
//             "postName": "Porter",
//             "picture": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAjdAAAAJDM3NTJhYmVjLTVjZGItNGU1MC04NTQ4LTgyYTIxMzExOWQ2ZA.jpg",
//             "detail": "",
//             "location": "Tokyo, Japan",
//             "isActive": true
//         }, {
//             "isActive": true,
//             "location": "Montreal, Canada",
//             "detail": "",
//             "picture": "https://i.imgur.com/6kFWdvQ.jpg",
//             "postName": "Al-Rabea",
//             "name": "Hassan",
//             "preName": "",
//             "memberHandle": "hassan",
//             "memberId": 47
//         }
//     ]
// };

exports.teamMembers = function(cb) {
    let memberDataFromGoogleSheet = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRTus6J1vSHZSwkGzPg7iGnzGHx9kNcMj9dAiO5oDYQQSra00PIbW-U8O5V-4s__7LiPQIkA1sNgUzV/pub?gid=1396558413&single=true&output=csv";

    let finalResult = []
    let sl = 1;
    csv().fromStream(request.get(memberDataFromGoogleSheet))
    .on('csv', (csvRow) => {
        finalResult.push({
            "isActive": true,
            "socialHandles": {
                "discord": csvRow[4]
            },
            "location": csvRow[3]+', '+csvRow[2],
            "detail": "",
            "picture": csvRow[5],
            "postName": csvRow[1],
            "name": csvRow[0],
            "preName": "",
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
