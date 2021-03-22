//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const date = require(__dirname + "/date.js");

const app = express();
let items = ["WakeUp", "Brush your Teeth"];
let workItems = [];
//telling app to use EJS
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

//make public as local folder to store images,sound css etc 
app.use(express.static("public"));

app.get("/", function (req, res) {
  //require date.js allows us to use date.getDay() or date.getDate()
  let day = date.getDate();
  //EJS use it looks for list file inside views so, have to create views folder and list file before
  // using it //inside {} is passing object to list.ejs file
  res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", function (req, res) {


  let item = req.body.addedList;
  //dont use 2 render cause 1st render will already traverse an give error for sencond obj passed
  //insted use redirect and mention let/array on top ,pas onj at same render using ,
  //items  is arry we created on top cause item could only hold 1 data and would replace the old list


  if (req.body.list === "WorkList") {

    workItems.push(item);
    res.redirect("/work");

  }
  else {
    items.push(item);

    res.redirect("/");
  }


});

//creating work list
app.get("/work", function (req, res) {
  res.render("list", { listTitle: "WorkList", newListItems: workItems });
});

app.post("/work", function (req, res) {
  let item = req.body.addedList;
  workItems.push(addedList);
  res.redirect("/");
});

//for detail
app.get("/detail", function (req, res) {
  res.render("detail");
});

app.listen(3000, function () {
  console.log("server running on port 3000");
});
