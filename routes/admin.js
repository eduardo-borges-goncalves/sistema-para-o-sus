const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')

const router = express.Router()
const mongoose = require('mongoose')
require("../models/cadastro.js")
const Cadastro = mongoose.model('cadastro')
require("../models/solicitations.js")
const Solicitation = mongoose.model('solicitations')

  // Body Parser
  app.use(bodyParser.urlencoded({extended: false}))
  app.use(bodyParser.json())

  // Handlebars
  
const hbs = handlebars.create({
  /* configuração */
 });
app.engine("handlebars", hbs.engine);
app.set('view engine', "handlebars")


// ROTAS
 
router.get('/cadastro', (req, res) => {
  res.render("admin/cadastro.handlebars")
})

router.get('/login', (req, res) =>{
  res.render('admin/login.handlebars')
})

router.get("/home-page", (req, res) => {
  res.render('admin/home-page.handlebars')
})

router.get("/solicitations", (req, res) =>{ 
  res.render('admin/solicitations.handlebars')
})

router.post('/teste/authorize', (req, res) => {

  const name = req.body.nameAut
  const tipo = req.body.consultaOuExame
  const especialidade = req.body.especialidadeAut
  const exame = req.body.tipoDeExameAut

  Solicitation.find({especialidade}).lean().then(
    (solicitations) => {
     res.render('admin/authorize.handlebars', {solicitations: solicitations})
    }).catch( (err) => {
      console.log('erro: ' + err)
      res.redirect("/admin/solicitations")
    })
})

router.get("/authorize", (req, res) => {

     res.render('admin/authorize.handlebars')

})

router.post("/authorize2", (req, res) => {
  const name = req.body.nameAut
  const tipo = req.body.consultaOuExame
  const especialidade = req.body.especialidadeAut
  const exame = req.body.tipoDeExameAut

  console.log(especialidade)

  Solicitation.find({especialidade}).lean().then(
    (solicitations) => {
     res.render('admin/authorize.handlebars', {solicitations: solicitations})
    }).catch( (err) => {
      console.log('erro: ' + err)
      res.redirect("/admin/solicitations")
    })
})

router.post('/solicitar', (req, res) => {

  const newSolicitation = {
    userId: req.body.userId, 
    name: req.body.nameSol, 
    surname: req.body.surnameSol, 
    birthday: req.body.birthdaySol, 
    whatsapp: req.body.whatsappSol,
    cns: req.body.cnsSol, 
    phone: req.body.phoneSol, 
    age: req.body.ageSol, 
    unidadeSolicitante: req.body.unidadeSolicitanteSol, 
    medicoSolicitante: req.body.medicoSolicitanteSol, 
    crm: req.body.crmSol, 
    especialidadeSol: req.body.especialidadeSol, 
    quadroClinico: req.body.quadroClinicoSol, 
    justificativa: req.body.justificativaSol,
    gravidade: req.body.classificacaoDeRisco,
    tipo: req.body.consultaOuExame, 
    especialidade: req.body.especialidade, 
    exame: req.body.tipoDeExameSol,
  }
  
  new Solicitation(newSolicitation).save().then(() => {
    console.log('solicitação salva com muito sucesso!')
    res.redirect('/admin/solicitations')
  })
})

router.post('/teste2', (req, res) => {

  const novoCadastro = {
    user: req.body.userCad,
    name: req.body.nameCad,
    password: req.body.passwordCad,
    cpf: req.body.cpfCad,
    address: req.body.addressCad 
  }

  new Cadastro(novoCadastro).save().then(() => {
    console.log('cadastro salvo com sucesso')

  }).catch((err) => {
    console.log('erro: ' +err)
    res.redirect('/admin/login')
  })
 
})


module.exports = router