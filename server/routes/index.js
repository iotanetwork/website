var express = require('express');
var router = express.Router();
var models = require('../models/index');
var helpers = require('../helpers');
var constants = require('../constants');
var utils = require('../utils');

// Routes

router.get('/', function(req, res, next) {
    var socialAccounts = constants.socialAccounts();
    helpers.getAllMembers(function (err, teamMembers) {
        if (err) {
            teamMembers = [];
        }
        if(teamMembers.length > 0) {
            utils.sortTeamMembersByPicture(teamMembers, function (err, teamMembersSorted) {
                res.render('pages/home', {
                    title: 'IOTA Evangelist Network | IEN',
                    teamMembers: teamMembersSorted,
                    socialAccounts: socialAccounts
                });
            })
        }
        else {
            res.render('pages/home', {
                title: 'IOTA Evangelist Network | IEN',
                teamMembers: teamMembers,
                socialAccounts: socialAccounts
            });
        }
    });
});

router.get('/apply', function(req, res, next) {
    res.render('pages/apply', {
        title: 'Apply to IOTA Evangelist Network | IEN'
    });
});

router.get('/team', function(req, res, next) {
  var socialAccounts = constants.socialAccounts();
  helpers.getAllMembers(function (err, teamMembers) {
      if (err) {
          teamMembers = [];
      }
      if(teamMembers.length > 0) {
          utils.sortTeamMembersByPicture(teamMembers, function (err, teamMembersSorted) {
              res.render('pages/team', {
                  title: 'Global Team | IEN',
                  teamMembers: teamMembersSorted,
                  socialAccounts: socialAccounts
              });
          })
      }
      else {
          res.render('pages/team', {
              title: 'Global Team | IEN',
              teamMembers: teamMembers,
              socialAccounts: socialAccounts
          });
      }
  });
});

router.get('/404', function(req, res, next) {
    res.render('pages/error-pages/not_found', { title: 'IOTA Evangelist Netowrk | IEN | 404 | Not Found' });
});

module.exports = router;
