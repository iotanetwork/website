/**
 * Created by Anirudha.
 * Helper File
 * Write additional functions to be used in Project here.
 *
 */
var bcrypt = require('bcryptjs');
var models = require('./models/index');

exports.createMember = function(memberData, cb) {
    models.member.create(memberData).then(function(newMemberData) {
        cb(null, newMemberData);
    });
};

exports.getAllMembers = function(cb) {
    models.member.findAll({
        where: {
            "isActive": true
        },
        order: [
            ['id', 'ASC'],
        ]
    }).then(result => {
        var teamMembers = [];
        for (var i = 0; i < result.length; i++) {
            teamMembers.push(result[i].dataValues);
        }
        cb(null, teamMembers)
    });
};

exports.getMemberById = function(memberId, socialAccounts, cb) {
    models.member.findOne({
        where: {
            id: memberId
        }
    }).then(result => {
        result = result.get()
        // console.log('result', result);
        if(Object.keys(socialAccounts).length>0) {
            Object.keys(socialAccounts).forEach(function(key) {
                var val = socialAccounts[key];
                if(!result.socialHandles[key]) {
                    result.socialHandles[key] = '';
                }
            });
        }
        else {
            // console.log(socialAccounts);
            Object.keys(socialAccounts).forEach(function(key) {
                var val = socialAccounts[key];
                console.log(key, val);
                result.socialHandles[key] = '';
            });
            // return result;
        }
        return result;
    }).then(result => {
        // console.log('in 2', result);
        cb(null, result);
    });
};

exports.createOrUpdateMember = function(requestData) {
    models.member.findOrCreate({
        where: {
            email: requestData['memberEmail']
        },
        defaults: {
            firstName: requestData['firstName'],
            lastName: requestData['lastName'],
            email: requestData['memberEmail'],
            handle: requestData['memberHandle'],
            socialHandles: requestData['socialHandles'],
            picture: requestData['picture'],
            detail: requestData['detail']
        }
    }).spread((user, created) => {
        if (created) {
            // console.log('user:', user.get({plain: true}));
            return;
        } else {
            models.member.update({
                firstName: requestData['firstName'],
                lastName: requestData['lastName'],
                handle: requestData['memberHandle'],
                socialHandles: requestData['socialHandles'],
                picture: requestData['picture'],
                detail: requestData['detail']
            }, {
                where: {
                    email: requestData['memberEmail']
                }
            }).then((updatedMember) => {
                return;
            });
        }
    })
}

exports.updateMember = function(memberId, requestData, cb) {
    models.member.update(requestData, {
        where: {
            id: memberId
        }
    }).then((updatedMember) => {
        cb(null, true)
    });
}

exports.memberLoginCheck = function(requestData, cb) {
    models.member.findOne({
        where: {
            email: requestData.email
        }
    }).then(result => {
        if(result) {
            // Check Password
            console.log(requestData.password);
            console.log(result.password);
            const paswordResult = bcrypt.compareSync(requestData.password, result.password)
            console.log('paswordResult:', paswordResult);
            if(paswordResult) {
                return result;
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    }).then(result => {
        if(Object.keys(result).length>0) {
            cb(null, result);
        }
        else {
            cb('incorrect password')
        }

    });
};
