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

router.get('*', function(req, res, next) {
    res.render('pages/error-pages/not_found', {title: 'IOTA Evangelist Netowrk | IEN | 404 | Not Found'});
});

module.exports = router;
