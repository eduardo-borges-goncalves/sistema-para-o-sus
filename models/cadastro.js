const mongoose = require('mongoose')
const { stringify } = require('querystring')
const Schema = mongoose.Schema 
 
const Cadastro = new Schema({
  user: {
    type: String, 
    required: true
  },
  name: {
    type: String, 
    required: true
  }, 
  cpf: {
    type: String, 
    required: true
  },
  address: {
    type: String, 
    required: true
  },
  password: {
    type: String, 
    required: true
  }
})

mongoose.model("cadastro", Cadastro)