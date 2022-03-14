const express = require('express');
const path = require("path") //For staic
var serveStatic = require('serve-static') // does 
var favicon = require('serve-favicon');
  const lol = require("body-parser")
  const app = express();
  app.use(lol.urlencoded({ extended: false }));
  app.set('views', __dirname + '/views');
  app.set("view engine", "ejs");
  app.use(serveStatic(path.join(__dirname, "static")))
app.use(favicon(path.join(__dirname, 'static', 'img/favicon.png')));
let users = []
app.get('/', (req, res) => {

  res.render('index')
});



app.get("*", (req, res) => {
 res.redirect("https://404-page.neverforget.repl.co")
})
app.listen(3000, () => {

  
})