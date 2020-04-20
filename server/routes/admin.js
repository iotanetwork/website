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
    helpers
        .validateToken(req.cookies.Authorization)
        .then((tokenAuth) => {
            if (tokenAuth.id != "undefined") {
                res.render("admin/pages/home", {
                    title: "IEN Admin",
                });
            }
        })
        .catch((err) => {
            console.log("rejected", err);
            res.redirect("/admin/login");
        });
});

router.get("/members", function(req, res, next) {
    helpers
        .validateToken(req.cookies.Authorization)
        .then((tokenAuth) => {
            if (tokenAuth.id != "undefined") {
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
                            res.render("admin/pages/members", {
                                title: "IOTA Evangelist Network | IEN",
                                teamMembers: teamMembersSorted,
                                socialAccounts: socialAccounts,
                            });
                        });
                    } else {
                        res.render("admin/pages/members", {
                            title: "IEN Members",
                            teamMembers: teamMembers,
                            socialAccounts: socialAccounts,
                        });
                    }
                });
            }
        })
        .catch((err) => {
            console.log("rejected", err);
            res.redirect("/admin/login");
        });
});

router.get("/members/:memberId/edit", function(req, res, next) {
    helpers
        .validateToken(req.cookies.Authorization)
        .then((tokenAuth) => {
            if (tokenAuth.id != "undefined") {
                let socialAccounts = constants.socialAccounts();
                helpers.getMemberById(
                    req.params.memberId,
                    socialAccounts,
                    function(err, memberData) {
                        if (err) {
                            console.log("Error");
                        }
                        res.render("admin/pages/memberedit", {
                            title: "IEN Member Update",
                            memberData: memberData,
                        });
                    }
                );
            }
        })
        .catch((err) => {
            console.log("rejected", err);
            res.redirect("/admin/login");
        });
});

router.post("/members/:memberId/update", function(req, res, next) {
    helpers
        .validateToken(req.cookies.Authorization)
        .then((tokenAuth) => {
            if (tokenAuth.id != "undefined") {
                let redirectUrl =
                    "/admin/members/" + req.params.memberId + "/edit";
                // update member data
                // console.log(req.body);
                helpers.updateMember(req.params.memberId, req.body, function(
                    err,
                    success
                ) {
                    res.redirect(redirectUrl);
                });
            }
        })
        .catch((err) => {
            console.log("rejected", err);
            res.redirect("/admin/login");
        });
});

router.post("/members/:memberId/update/social", function(req, res, next) {
    helpers
        .validateToken(req.cookies.Authorization)
        .then((tokenAuth) => {
            if (tokenAuth.id != "undefined") {
                let tokenAuth = helpers.validateToken(
                    req.cookies.Authorization
                );
                if (tokenAuth.id === "undefined") {
                    res.redirect("./login");
                } else {
                    let redirectUrl =
                        "/admin/members/" + req.params.memberId + "/edit";
                    // update member social data
                    // console.log(req.body);
                    helpers.updateMember(
                        req.params.memberId, { socialHandles: req.body },
                        function(err, success) {
                            res.redirect(redirectUrl);
                        }
                    );
                }
            }
        })
        .catch((err) => {
            console.log("rejected", err);
            res.redirect("/admin/login");
        });
});

router.get("/members/new", function(req, res, next) {
    helpers
        .validateToken(req.cookies.Authorization)
        .then((tokenAuth) => {
            if (tokenAuth.id != "undefined") {
                res.render("admin/pages/membernew", {
                    title: "IEN New Member",
                });
            }
        })
        .catch((err) => {
            console.log("rejected", err);
            res.redirect("/admin/login");
        });
});

router.post("/members/new", function(req, res, next) {
    helpers
        .validateToken(req.cookies.Authorization)
        .then((tokenAuth) => {
            if (tokenAuth.id != "undefined") {
                // update member data
                // console.log(req.body);
                helpers.createOrUpdateMember(req.body, function(
                    err,
                    createdData
                ) {
                    if (err) {
                        res.redirect("/admin/members/new");
                    }
                    if (createdData.created) {
                        let redirectUrl =
                            "/admin/members/" +
                            createdData.userData.id +
                            "/edit";
                        res.redirect(redirectUrl);
                    } else {
                        res.redirect("/admin/members/new");
                    }
                });
            }
        })
        .catch((err) => {
            console.log("rejected", err);
            res.redirect("/admin/login");
        });
});

router.get("/login", function(req, res, next) {
    res.render("admin/pages/login", {
        title: "IEN Login",
    });
});

router.post("/login", function(req, res, next) {
    // console.log('data:', req.body);
    helpers.memberLoginCheck(req.body, function(err, memberData) {
        if (err) {
            console.log("Error");
            res.redirect("/admin/login");
        } else {
            // Set Authorisation header
            let tokenGenerated = helpers.generateToken({
                id: memberData.id,
                handle: memberData.handle,
            });
            console.log("tokenGenerated:", tokenGenerated);
            res.cookie("Authorization", tokenGenerated, { maxAge: 900000000 });
            if (memberData.role == 1) {
                res.redirect("/admin/");
            } else {
                res.redirect("/");
            }
        }
    });
});

router.get("*", function(req, res, next) {
    res.render("pages/error-pages/not_found", {
        title: "IOTA Evangelist Netowrk | IEN | 404 | Not Found",
    });
});

module.exports = router;