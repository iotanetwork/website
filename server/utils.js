

exports.sortTeamMembersByPicture = function(teamMembers, cb) {
    try {
        let finalResult = [];
        let noPicList = false;
        let noPicResult = [];
        let defaultPictureUrl = 'https://i.imgur.com/pLzV5XF.png';
        for (var i = 0; i < teamMembers.length; i++) {
            noPicList = false;
            if (teamMembers[i]['picture']==defaultPictureUrl) {
                noPicList = true;
            }
            if(noPicList) {
                noPicResult.push(teamMembers[i])
            }
            else {
                finalResult.push(teamMembers[i]);
            }
        }
        finalResult = finalResult.concat(noPicResult);
        cb(null, finalResult);
    } catch (e) {
        cb(e, teamMembers);
    }
};
