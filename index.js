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
  res.render('index')
});
app.post('/home', (req, res) => {

  res.render('home', {name: req.body.name, pass: req.body.pass})
  users.push(req.body.pass)
  users.push(req.body.name)
});
app.get('/home', (req, res) => {
  res.redirect('/')
})
app.get('/you', (req, res) => {
  

  res.render(you, {name: user})
})
app.get((req, res) => {
 res.redirect("https://404-page.neverforget.repl.co")
})
app.listen(3000, () => {

  
})