var express = require('express');
var router = express.Router();
var models = require('../models/index');
var helpers = require('../helpers');
var constants = require('../constants');
var utils = require('../utils');
var google = require('googleapis');
var privatekey = require("../../ien-alpha.json");

// Routes

router.get('/', function(req, res, next) {
    res.render('admin/pages/home', {
        title: 'IEN Admin'
    });
});

router.get('/members', function(req, res, next) {
    var socialAccounts = constants.socialAccounts();
    helpers.getAllMembers(function(err, teamMembers) {
        if (err) {
            teamMembers = [];
        }
        if (teamMembers.length > 0) {
            utils.sortTeamMembersByPicture(teamMembers, function(err, teamMembersSorted) {
                res.render('admin/pages/members', {
                    title: 'IOTA Evangelist Network | IEN',
                    teamMembers: teamMembersSorted,
                    socialAccounts: socialAccounts
                });
            })
        } else {
            res.render('admin/pages/members', {
                title: 'IEN Members',
                teamMembers: teamMembers,
                socialAccounts: socialAccounts
            });
        }
    });

});

router.get('/members/:memberId/edit', function(req, res, next) {
    let socialAccounts = constants.socialAccounts();
    helpers.getMemberById(req.params.memberId, socialAccounts, function(err, memberData) {
        if(err) {
            console.log('Error');
        }
        res.render('admin/pages/memberedit', {
            title: 'IEN Member Update',
            memberData: memberData
        });
    });
});

router.post('/members/:memberId/update', function(req, res, next) {
    let redirectUrl = '/admin/members/'+req.params.memberId+'/edit';
    // update member data
    // console.log(req.body);
    helpers.updateMember(req.params.memberId, req.body, function(err, success) {
        res.redirect(redirectUrl);
    });
});

router.post('/members/:memberId/update/social', function(req, res, next) {
    let redirectUrl = '/admin/members/'+req.params.memberId+'/edit';
    // update member social data
    // console.log(req.body);
    helpers.updateMember(req.params.memberId, {'socialHandles': req.body}, function(err, success) {
        res.redirect(redirectUrl);
    });
});

router.get('/login', function(req, res, next) {
    res.render('admin/pages/login', {
        title: 'IEN Login'
    });
});

router.post('/login', function(req, res, next) {
    console.log('data:', req.body);
    helpers.memberLoginCheck(req.body, function(err, memberData) {
        if(err) {
            console.log('Error');
            res.redirect('/admin/login');
        }
        else {
            if(memberData.role == 1) {
                res.redirect('/admin/');
            }
            else {
                res.redirect('/');
            }
        }
    });
});

router.get('*', function(req, res, next) {
    res.render('pages/error-pages/not_found', {title: 'IOTA Evangelist Netowrk | IEN | 404 | Not Found'});
});

module.exports = router;
