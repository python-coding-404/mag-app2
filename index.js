const express = require('express');
const path = require("path") //For staic
var serveStatic = require('serve-static') // does 
var favicon = require('serve-favicon');
var cookieParser = require("cookie-parser")
  const lol = require("body-parser")
  const app = express();
  app.use(lol.urlencoded({ extended: false }));
  app.set('views', __dirname + '/views');
  app.set("view engine", "ejs");
  app.use(serveStatic(path.join(__dirname, "static")))
app.use(favicon(path.join(__dirname, 'static', 'img/favicon.png')));
let users = []
app.use(cookieParser())
app.get('/', (req, res) => {
  res.cookie('cookieName', 'cookieValue')
  res.render('index', { cookie: res.cookie.cookieName })
});
app.get("/*")


app.get((req, res) => {
 res.redirect("https://404-page.neverforget.repl.co")
})
app.listen(3000, () => {

  
})