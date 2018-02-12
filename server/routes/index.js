var express = require('express');
var router = express.Router();
var models = require('../models/index');
var helpers = require('../helpers');
var constants = require('../constants');

// Routes

router.get('/', function(req, res, next) {
    var socialAccounts = constants.socialAccounts();
    var teamMembers = constants.teamMembers();
    res.render('pages/home', {
        title: 'IOTA Evangelist Netowrk | IEN',
        teamMembers: teamMembers,
        socialAccounts: socialAccounts
    });
});

router.get('/404', function(req, res, next) {
    res.render('pages/error-pages/not_found', { title: 'IOTA Evangelist Netowrk | IEN | 404 | Not Found' });
});

module.exports = router;
