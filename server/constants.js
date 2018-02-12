/**
 * Created by Anirudha on 15/07/17.
 */

exports.sampleFunction = function() {
};

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
            'baseUrl': 'https://www.linkedin.com/'
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

exports.teamMembers = function() {
    return [
        {
            'memberId': 1,
            'memberHandle': 'kev',
            'preName': '',
            'name': 'Kevi',
            'postName': 'Chen',
            'picture': 'https://i.imgur.com/6kFWdvQ.jpg',
            'detail': '',
            'location': 'New York, US',
            'socialHandles': {
                'discord': 'kev'
            },
            'isActive': true
        },
        {
            'memberId': 2,
            'memberHandle': 'allen',
            'preName': '',
            'name': 'Allen',
            'postName': 'Shashaty',
            'picture': 'https://s3.amazonaws.com/iota-ien/members/allen.jpg',
            'detail': '',
            'location': 'Montreal, Canada',
            'socialHandles': {},
            'isActive': true
        },
        {
            'memberId': 3,
            'memberHandle': 'jeff',
            'preName': 'Xun',
            'name': 'Jeffery',
            'postName': 'Liu',
            'picture': 'https://i.imgur.com/6kFWdvQ.jpg',
            'detail': '',
            'location': 'Hong Kong, China',
            'socialHandles': {},
            'isActive': true
        },
        {
            'memberId': 4,
            'memberHandle': 'elliot',
            'preName': '',
            'name': 'Elliot',
            'postName': 'Heitman',
            'picture': 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/5/005/068/17b/0291588.jpg',
            'detail': '',
            'location': 'Brisbane, Australia',
            'socialHandles': {
                'discord': 'ehe'
            },
            'isActive': true
        },
        {
            'memberId': 5,
            'memberHandle': 'anistark',
            'preName': 'Kumar',
            'name': 'Anirudha',
            'postName': '',
            'picture': 'https://i.imgur.com/x7ziXaZ.jpg',
            'detail': '',
            'location': 'Bengaluru, India',
            'socialHandles': {
                'github': 'anistark',
                'discord': 'anistark',
                'twitter': 'kranirudha'
            },
            'isActive': true
        },
        {
            'memberId': 6,
            'memberHandle': 'lman',
            'preName': '',
            'name': 'Lman',
            'postName': 'Chu',
            'picture': 'https://i.imgur.com/6kFWdvQ.jpg',
            'detail': '',
            'location': 'Taipei, Taiwan',
            'socialHandles': {},
            'isActive': true
        },
        {
            'memberId': 7,
            'memberHandle': 'florin',
            'preName': '',
            'name': 'Florin',
            'postName': 'Reike',
            'picture': 'https://i.imgur.com/6kFWdvQ.jpg',
            'detail': '',
            'location': 'Berlin, Germany',
            'socialHandles': {},
            'isActive': true
        },
        {
            'memberId': 8,
            'memberHandle': 'matt',
            'preName': 'Matthew',
            'name': 'Winston',
            'postName': 'Johnson',
            'picture': 'https://i.imgur.com/6kFWdvQ.jpg',
            'detail': '',
            'location': 'New Orleans, US',
            'socialHandles': {},
            'isActive': true
        },
        {
            'memberId': 9,
            'memberHandle': 'peter',
            'preName': '',
            'name': 'Peter',
            'postName': 'Willemsen',
            'picture': 'https://i.imgur.com/6kFWdvQ.jpg',
            'detail': '',
            'location': 'Haarlem, Netherlands',
            'socialHandles': {},
            'isActive': true
        },
        {
            'memberId': 10,
            'memberHandle': 'norbert',
            'preName': '',
            'name': 'Norbert',
            'postName': 'Gehrke',
            'picture': 'https://i.imgur.com/6kFWdvQ.jpg',
            'detail': '',
            'location': 'Tokyo, Japan',
            'socialHandles': {},
            'isActive': true
        },
        {
            'memberId': 11,
            'memberHandle': 'parikshit',
            'preName': '',
            'name': 'Parikshit',
            'postName': 'Joshi',
            'picture': 'https://i.imgur.com/6kFWdvQ.jpg',
            'detail': '',
            'location': 'Ahmedabad, India/Austin, US',
            'socialHandles': {},
            'isActive': true
        },
        {
            'memberId': 12,
            'memberHandle': 'martin',
            'preName': '',
            'name': 'Martin',
            'postName': 'Kunert',
            'picture': 'https://i.imgur.com/6kFWdvQ.jpg',
            'detail': '',
            'location': 'Los Angeles, US',
            'socialHandles': {},
            'isActive': true
        },
        {
            'memberId': 13,
            'memberHandle': 'tigran',
            'preName': '',
            'name': 'Tigran',
            'postName': 'Asriyan',
            'picture': 'https://i.imgur.com/6kFWdvQ.jpg',
            'detail': '',
            'location': 'Yerevan, Armenia',
            'socialHandles': {},
            'isActive': true
        },
        {
            'memberId': 14,
            'memberHandle': 'liza',
            'preName': '',
            'name': 'Liza',
            'postName': 'Horowitz',
            'picture': 'https://i.imgur.com/6kFWdvQ.jpg',
            'detail': '',
            'location': 'Toronto, Canada',
            'socialHandles': {},
            'isActive': true
        },
        {
            'memberId': 15,
            'memberHandle': 'hristo',
            'preName': '',
            'name': 'Hristo',
            'postName': 'Lalev',
            'picture': 'https://i.imgur.com/6kFWdvQ.jpg',
            'detail': '',
            'location': 'Sofia, Bulgaria',
            'socialHandles': {},
            'isActive': true
        },
        {
            'memberId': 16,
            'memberHandle': 'miguel',
            'preName': '',
            'name': 'Miguel Díaz',
            'postName': 'Montiel',
            'picture': 'https://i.imgur.com/6kFWdvQ.jpg',
            'detail': '',
            'location': 'Barcelona, Spain',
            'socialHandles': {},
            'isActive': true
        },
        {
            'memberId': 17,
            'memberHandle': 'tom',
            'preName': '',
            'name': 'Tom',
            'postName': 'Bertheau',
            'picture': 'https://i.imgur.com/6kFWdvQ.jpg',
            'detail': '',
            'location': 'Zurich, Switzerland',
            'socialHandles': {},
            'isActive': true
        },
        {
            'memberId': 18,
            'memberHandle': 'stephen',
            'preName': '',
            'name': 'Stephen',
            'postName': 'Cheung',
            'picture': 'https://i.imgur.com/6kFWdvQ.jpg',
            'detail': '',
            'location': 'Washington D.C., US',
            'socialHandles': {},
            'isActive': true
        },
        {
            'memberId': 19,
            'memberHandle': 'evgeny',
            'preName': '',
            'name': 'Evgeny',
            'postName': 'Kotlarov',
            'picture': 'https://i.imgur.com/6kFWdvQ.jpg',
            'detail': '',
            'location': 'Herzliya, Israel',
            'socialHandles': {},
            'isActive': true
        },
        {
            'memberId': 20,
            'memberHandle': 'dennis',
            'preName': '',
            'name': 'Dennis',
            'postName': 'Schouten',
            'picture': 'https://i.imgur.com/6kFWdvQ.jpg',
            'detail': '',
            'location': 'Papendrecht, Netherlands',
            'socialHandles': {},
            'isActive': true
        },
        {
            'memberId': 21,
            'memberHandle': 'tawago',
            'preName': '',
            'name': 'Tawago',
            'postName': 'Orihaka',
            'picture': 'https://i.imgur.com/6kFWdvQ.jpg',
            'detail': '',
            'location': 'Tokyo, Japan',
            'socialHandles': {},
            'isActive': true
        },
        {
            'memberId': 22,
            'memberHandle': 'akhilesh',
            'preName': '',
            'name': 'Akhilesh',
            'postName': 'Perla',
            'picture': 'https://i.imgur.com/6kFWdvQ.jpg',
            'detail': '',
            'location': 'London, UK',
            'socialHandles': {},
            'isActive': true
        },
        {
            'memberId': 23,
            'memberHandle': 'florin',
            'preName': '',
            'name': 'Florin',
            'postName': 'Reike',
            'picture': 'https://i.imgur.com/6kFWdvQ.jpg',
            'detail': '',
            'location': 'Berlin, Germany',
            'socialHandles': {},
            'isActive': true
        },
        {
            'memberId': 24,
            'memberHandle': 'hassan',
            'preName': '',
            'name': 'Hassan',
            'postName': 'Al-Rabea',
            'picture': 'https://i.imgur.com/6kFWdvQ.jpg',
            'detail': '',
            'location': 'Montreal, Canada',
            'socialHandles': {},
            'isActive': true
        },
        {
            'memberId': 25,
            'memberHandle': 'sipun',
            'preName': '',
            'name': 'Sipun',
            'postName': 'Pradhan',
            'picture': 'https://i.imgur.com/6kFWdvQ.jpg',
            'detail': '',
            'location': 'Taipei, Taiwan',
            'socialHandles': {},
            'isActive': true
        },
        {
            'memberId': 26,
            'memberHandle': 'robert',
            'preName': '',
            'name': 'Robert',
            'postName': 'MacNaughton',
            'picture': 'https://i.imgur.com/6kFWdvQ.jpg',
            'detail': '',
            'location': 'Boulder, US',
            'socialHandles': {},
            'isActive': true
        },
        {
            'memberId': 27,
            'memberHandle': 'cagri',
            'preName': '',
            'name': 'Çağrı',
            'postName': 'Sevinç',
            'picture': 'https://i.imgur.com/6kFWdvQ.jpg',
            'detail': '',
            'location': 'Ankara, Turkey',
            'socialHandles': {},
            'isActive': true
        },
        {
            'memberId': 28,
            'memberHandle': 'mirko',
            'preName': '',
            'name': 'Mirko',
            'postName': 'Ross',
            'picture': 'https://i.imgur.com/6kFWdvQ.jpg',
            'detail': '',
            'location': 'Stuttgart, Germany',
            'socialHandles': {},
            'isActive': true
        },
        {
            'memberId': 29,
            'memberHandle': 'miguel',
            'preName': '',
            'name': 'Miguel',
            'postName': 'St.Paul',
            'picture': 'https://i.imgur.com/6kFWdvQ.jpg',
            'detail': '',
            'location': 'Miami, US',
            'socialHandles': {},
            'isActive': true
        },
        {
            'memberId': 30,
            'memberHandle': 'raghu',
            'preName': '',
            'name': 'Raghu',
            'postName': 'Bala',
            'picture': 'https://i.imgur.com/6kFWdvQ.jpg',
            'detail': '',
            'location': 'Irvine, US',
            'socialHandles': {},
            'isActive': true
        },
        {
            'memberId': 31,
            'memberHandle': 'nino',
            'preName': '',
            'name': 'Nino',
            'postName': 'Ulrich',
            'picture': 'https://i.imgur.com/6kFWdvQ.jpg',
            'detail': '',
            'location': 'Singapore',
            'socialHandles': {},
            'isActive': true
        },
        {
            'memberId': 32,
            'memberHandle': 'ralf',
            'preName': '',
            'name': 'Ralf',
            'postName': 'Rottmann',
            'picture': 'http://rottmann.net/wp-content/uploads/2018/01/ralf_rottmann_1000x1000_bandw_half.png',
            'detail': '',
            'location': 'Germany',
            'socialHandles': {},
            'isActive': true
        },
    ]
};

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