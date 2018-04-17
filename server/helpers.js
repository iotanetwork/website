/**
 * Created by Anirudha.
 * Helper File
 * Write additional functions to be used in Project here.
 *
 */
var models = require('./models/index');

exports.createMember = function(memberData, cb) {
    models.member.create(memberData).then(function(newMemberData) {
        cb(null, newMemberData);
    });
};

exports.getAllMembers = function(cb) {
    models.member.findAll({
        where: {
            isActive: true
        }
    }).then(result => {
        var teamMembers = [];
        for (var i= 0; i < result.length; i++) {
            teamMembers.push(result[i].dataValues);
        }
        cb(null, teamMembers)
    });
};
