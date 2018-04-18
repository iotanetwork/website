// Get all member data from excell sheet.
const constants = require('../server/constants');
const helpers = require('../server/helpers');
var Promise = require("bluebird");

constants.teamMembers(function (err, excellAllMembers) {
    if(err) {
        console.log('err', err);
    }
    Promise.each(excellAllMembers, async function(excellMemberData){
        console.log('excellMemberData:', excellMemberData['memberEmail']);
        let memberData = await helpers.createOrUpdateMember(excellMemberData);
    }).then(function(){
        console.log("ALL ARR DATA PRINTED");
        return;
    })
});
