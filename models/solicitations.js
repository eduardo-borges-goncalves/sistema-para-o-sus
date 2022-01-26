const { truncate } = require('fs')
const mongoose = require('mongoose')
const { stringify } = require('querystring')
const Schema = mongoose.Schema

const Solicitation = new Schema({
  userId: {
    type: Number, 
    required: true
  },
  name: {
    type: String, 
    required: true
  }, 
  surname: {
    type: String, 
    required: true
  },
  birthday: {
    type: String, 
    required: true
  }, 
  cns: {
    type: String, 
    required: true
  }, 
  whatsapp: {
    type: String, 
    required: false
  }, 
  phone: {
    type: String, 
    required: true
  }, 
  age: {
    type: Number, 
    required: true
  },
  unidadeSolicitante:{
    type: String, 
    required: true
  },
  medicoSolicitante:{
    type: String, 
    required: true
  }, 
  crm: {
    type: String, 
    required: true
  }, 
  especialidadeSol: {
    type: String,  
    required: true
  }, 
  quadroClinico: {
    type: String, 
    required: true
  },
  justificativa: {
    type: String, 
    required: true
  }, 
  tipo: {
    type: String, 
    required: true
  },
  especialidade: {
    type: String, 
  }, 
  exame: {
    type: String, 
  },
  gravidade: {
    type: String, 
    required: true
  }, 
  createdAt: {
    type: Date, 
    default: Date.now()
  }
})

mongoose.model("solicitations", Solicitation)