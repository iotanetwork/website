// *** main dependencies *** //
var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
// var swig = require("swig");

// *** routes *** //
var routes = require("./routes/index.js");
var adminRoutes = require("./routes/admin.js");

// *** express instance *** //
var app = express(),
    session = require("express-session");

app.use(
    session({
        secret: "2C44-4D44-WppQ38S",
        resave: true,
        saveUninitialized: true,
    })
);

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// *** view engine *** //
// var swig = new swig.Swig();
// app.engine("html", swig.renderFile);
// app.set("view engine", "html");

// Using ejs
app.engine("ejs", require("ejs-locals"));
// *** static directory *** //
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use("/static", express.static("client"));

// *** config middleware *** //
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "../client")));

// *** main routes *** //
app.use("/admin", adminRoutes);
app.use("/", routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    console.log("route 404:", req.originalUrl);
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// *** error handlers *** //

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        // res.render('error', {
        //   message: err.message,
        //   error: err
        // });
        console.log("err:", err);
        res.redirect("/404");
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
        message: err.message,
        error: {},
    });
});

module.exports = app;