var express = require("express");
var router = express.Router();
var models = require("../models/index");
var helpers = require("../helpers");
var constants = require("../constants");
var utils = require("../utils");
var google = require("googleapis");
var privatekey = require("../../ien-alpha.json");

// Routes

router.get("/", function(req, res, next) {
    var socialAccounts = constants.socialAccounts();
    let teamMemberIdOrder = [49, 5, 6, 20, 46, 1];

    let teamMembers = [];
    for (var i = 0; i < teamMemberIdOrder.length; i++) {
        helpers.getMemberById(teamMemberIdOrder[i], socialAccounts, function(
            err,
            memberData
        ) {
            teamMembers.push(memberData);
            if (teamMembers.length == teamMemberIdOrder.length) {
                res.render("pages/home", {
                    title: "IOTA Evangelist Network | IEN",
                    teamMembers: teamMembers,
                    socialAccounts: socialAccounts,
                });
            }
        });
    }

    // helpers.getOrderedMembers(teamMemberIdOrder, function(err, teamMembers) {
    //     if (err) {
    //         teamMembers = [];
    //     }
    //     if (teamMembers.length > 0) {
    //         res.render("pages/home", {
    //             title: "IOTA Evangelist Network | IEN",
    //             teamMembers: teamMembers,
    //             socialAccounts: socialAccounts,
    //         });
    //     } else {
    //         res.render("pages/home", {
    //             title: "IOTA Evangelist Network | IEN",
    //             teamMembers: teamMembers,
    //             socialAccounts: socialAccounts,
    //         });
    //     }
    // });
});

router.get("/apply", function(req, res, next) {
    res.render("pages/apply", {
        title: "Apply to IOTA Evangelist Network | IEN",
    });
});

router.get("/team", function(req, res, next) {
    var socialAccounts = constants.socialAccounts();
    helpers.getAllMembers(function(err, teamMembers) {
        if (err) {
            teamMembers = [];
        }
        if (teamMembers.length > 0) {
            utils.sortTeamMembersByPicture(teamMembers, function(
                err,
                teamMembersSorted
            ) {
                // console.log('teamMembersSorted:', teamMembersSorted[4])
                // console.log('socialAccounts:', socialAccounts)
                res.render("pages/team", {
                    title: "Global Team | IEN",
                    teamMembers: teamMembersSorted,
                    socialAccounts: socialAccounts,
                });
            });
        } else {
            res.render("pages/team", {
                title: "Global Team | IEN",
                teamMembers: teamMembers,
                socialAccounts: socialAccounts,
            });
        }
    });
});

router.post("/apply", function(req, res, next) {
    // console.log('body:', req.body.values);
    // configure a JWT auth client
    let jwtClient = new google.auth.JWT(
        privatekey.client_email,
        null,
        privatekey.private_key, [
            "https://www.googleapis.com/auth/spreadsheets",
            "https://www.googleapis.com/auth/calendar",
        ]
    );
    // authenticate request
    jwtClient.authorize(function(err, tokens) {
        if (err) {
            console.log(err);
            return;
        } else {
            //Google Sheets API
            let spreadsheetId = "1YEFwEdpBVfYGwwDN-BivqMAy-prhrA3zZ36iatgKv8A";
            let sheetName = "'Form responses 1'!A1";
            let sheets = google.sheets("v4");
            sheets.spreadsheets.values.append({
                    auth: jwtClient,
                    spreadsheetId: spreadsheetId,
                    range: sheetName,
                    valueInputOption: "USER_ENTERED",
                    resource: {
                        values: [req.body.values],
                    },
                },
                function(err, response) {
                    if (err) {
                        console.log("The API returned an error: " + err);
                        res.send({
                            status: 400,
                            message: "Something went wrong!",
                            error: err,
                        });
                    } else {
                        // console.log('response:', response);
                        res.send({
                            status: 200,
                            message: "Successfully Applied!",
                        });
                    }
                }
            );
        }
    });
});

router.get("/faq", function(req, res, next) {
    res.render("pages/faq", { title: "IOTA Evangelist Network | IEN | FAQ" });
});

router.get("/resources", function(req, res, next) {
    var resources = constants.resources();
    // console.log("resources:", resources);
    res.render("pages/resources", {
        title: "IOTA Evangelist Network | Resources",
        resources: resources,
    });
});

router.get("/gallery", function(req, res, next) {
    res.render("pages/gallery", {
        title: "Gallery for IOTA Evangelist Network | IEN",
    });
});

router.get("/404", function(req, res, next) {
    res.render("pages/error-pages/not_found", {
        title: "IOTA Evangelist Netowrk | IEN | 404 | Not Found",
    });
});

router.get("*", function(req, res, next) {
    console.log("route main:", req.originalUrl);
    res.render("pages/error-pages/not_found", {
        title: "IOTA Evangelist Netowrk | IEN | 404 | Not Found",
    });
});

module.exports = router;