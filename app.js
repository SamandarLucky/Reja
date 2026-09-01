console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();


// MongoDB connect
const db = require("./server").db();

// 1: Kirish codlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2 : SESSION

// 3 backendda view yasimiz
app.set("views", "views");
app.set("view engine", "ejs");


// 4 Routing code
app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({ test: "success" });
})
app.get("/author", function (req, res) {
    res.render("author", {user: user});
});
app.get("/", function (req, res) {
    res.render("reja");
});

module.exports = app;


