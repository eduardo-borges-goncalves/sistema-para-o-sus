
const express = require('express') 
const app = express()
const path =  require('path')
const handlebars = require('express-handlebars')
const bodyParser = require("body-parser")
const mongoose = require('mongoose')
const admin = require('./routes/admin')
const session = require('express-session')
const flash = require('connect-flash')


// Body Parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Handlebars
const hbs = handlebars.create({
  /* configuração */
 });
 app.engine("handlebars", hbs.engine);
 app.set("view engine", "handlebars");

// Session
app.use(session({
  secret: "cursodenode",
  resave: true, 
  saveUninitialized: true
}))
app.use(flash()) 

// Mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/sigss").then(() => console.log('Data Base connect')).catch((err) => {
  console.log(`Erro ao se conectar ao db: ${err}`)
})

// Public
app.use(express.static(path.join(__dirname, "/public")))

// Middleware
app.use((req, res, next) => {
  // Variáveis globais: acessíveis de qualquer ponto da aplicação
  res.locals.success_msg = req.flash('success_msg')
  res.locals.error_msg = req.flash('error_msg')
  next()
})

// Routes

app.get("/", (req, res) =>
  res.send("olá mundo sigss")
)

app.post("/testinho", (req, res) => {
  res.send(req.body.teste)
})

app.use('/admin', admin)





// Server 

app.listen("8082", () => {
  console.log('server is running')
})
