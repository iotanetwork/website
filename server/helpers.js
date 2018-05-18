/**
 * Created by Anirudha.
 * Helper File
 * Write additional functions to be used in Project here.
 *
 */
var models = require('./models/index')

exports.createMember = function (memberData, cb) {
  models.member.create(memberData).then(function (newMemberData) {
    cb(null, newMemberData)
  })
}

exports.getAllMembers = function (cb) {
  models.member.findAll({
    where: {
      'isActive': true
    },
    order: [
      ['id', 'ASC']
    ]
  }).then(result => {
    var teamMembers = []
    for (var i = 0; i < result.length; i++) {
      teamMembers.push(result[i].dataValues)
    }
    cb(null, teamMembers)
  })
}

exports.createOrUpdateMember = function (requestData) {
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
        console.log('user' + updatedMember + 'updated')
      })
    }
  })
}
