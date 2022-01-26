let consulta = document.getElementById('consulta')
let exame = document.getElementById('exame')

let especialidadeDiv = document.getElementById('especialidadeDiv')
let tipoDeExame = document.getElementById('tipoDeExameDiv')
let nameAut = document.getElementById('nameAut')
let especialidadeInput = document.getElementById('especialidadeInput')
let tipoDeExameInput = document.getElementById('tipoDeExameInput')

let solicitationsToAuthorize = document.getElementById('solicitationsToAuthorize')

let validate = false
let validateExam = false
let validateName = false


// // // // // menu // // // // // //

let logUser = JSON.parse(localStorage.getItem('logUser') )
let welcomeUser = document.querySelector("#welcomeUser")

let menu = document.getElementById('menu')

let navList = document.getElementById('nav-list')
let menuOn = false

let subList = document.getElementById('sub-list')
let subListOn = false
let menuLevelOne = document.getElementById('menu-level-one')

if (localStorage.getItem('token') == null) {
  window.alert('Você precisa estar logado para acessar essa página')
  window.location.href = 'login.html'
}

function sair () {
  localStorage.removeItem('token')
  localStorage.removeItem('logUser')
  window.location.href = 'login'
}

function mobileMenu(){
 
  if(menuOn == false) {
    navList.setAttribute('style', "transform: translateX(0)")
    menuOn = true;
  } 
  
  else if (menuOn == true) {
    navList.setAttribute('style', "transform: translateX(-150%")
    menuOn = false;
    menuLevelOne.setAttribute("style", "height: 12vh")
    subList.setAttribute('style', "transform: translateX(-150%)")
    subListOn = false;
  }
}

function levelOneMenu(){
 
  if(subListOn == false) {
    menuLevelOne.setAttribute("style", "height: 40vh")
    subList.setAttribute('style', "transform: translateX(0)")
    subListOn = true;
  } 
  
  else if (subListOn == true) {
    menuLevelOne.setAttribute("style", "height: 12vh")
    subList.setAttribute('style', "transform: translateX(-150%)")
    subListOn = false;
  }
}

// // // // //

function teste() {
    console.log(consulta)
}

function especialidadeOn() {
    if (validate == false) {
        especialidadeDiv.setAttribute("style","display: flex")
        tipoDeExame.setAttribute("style","display: none")
        console.log("Oi")
        validateExam = false
        validate = true
    } else if (validate == true) {
        especialidadeDiv.setAttribute("style","display: none")
        tipoDeExame.setAttribute("style","display: flex")
        console.log('é sobre isso')
        validate = false
    }
}

function tipoDeExameOn() {
    if (validateExam == false) {
        especialidadeDiv.setAttribute("style","display: none")
        tipoDeExame.setAttribute("style","display: flex")
        console.log("Oi")
        validateExam = true
        validate = false
    } else if (validateExam == true) {
        especialidadeDiv.setAttribute("style","display: flex")
        tipoDeExame.setAttribute("style","display: none")
        console.log('é sobre isso')
        validateExam = false
    }
}

function buscar() {
    solicitationsToAuthorize.setAttribute('style', "display: flex")
}


function nameOn () {
  if (especialidadeInput.value.length >= 1 || tipoDeExameInput.value.length >= 1) {
    nameAut.setAttribute('style', "display: flex")
  }
}

consulta.addEventListener("change", especialidadeOn)
exame.addEventListener("change", tipoDeExameOn)
especialidadeInput.addEventListener("change", nameOn)
tipoDeExameInput.addEventListener('change', nameOn)

