
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
  window.location.href = 'login'
} else {

  welcomeUser.innerHTML = `Bem vindo ${logUser.name.toUpperCase()}!`
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

