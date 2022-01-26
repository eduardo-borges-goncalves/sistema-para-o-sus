
let userCad = document.getElementById('userCad')
let userCadLabel = document.getElementById('userCadLabel')

let nameCad = document.getElementById('nameCad')
let nameCadLabel = document.getElementById('nameCadLabel')

let passwordCad = document.getElementById('passwordCad')
let passwordCadLabel = document.getElementById('passwordCadLabel')

let confirmPasswordCad = document.getElementById('confirmPasswordCad')
let confirmPasswordCadLabel = document.getElementById('confirmPasswordCadLabel')

let cpfCad = document.getElementById('cpfCad')
let cpfCadLabel = document.getElementById('cpfCadLabel')

let addressCad = document.getElementById('addressCad')
let addressCadLabel = document.getElementById('addressCadLabel')

let msgError = document.getElementById('msgError')
let msgSuccess = document.getElementById('msgSuccess')

const userBase = []

let user = {
  user: '',
  name: '',
  password: '',
  cpf: '', 
  address:'',
  
}

userCad.addEventListener('keyup', () => {
  if (userCad.value.length <= 2) {
    userCadLabel.setAttribute('style', "color:red")
    userCad.setAttribute("style", "border-color: red")
    userCadLabel.innerHTML = "Usuário deve ter no mínimo 3 caracteres"
  } else {
    userCadLabel.setAttribute('style', "color= green")
    userCad.setAttribute("style", "border-color: green")
    userCadLabel.innerHTML = "Usuário"

  }
} )

nameCad.addEventListener('keyup', () => {
  if (nameCad.value.length <= 2) {
    nameCadLabel.setAttribute('style', "color:red")
    nameCad.setAttribute("style", "border-color: red")
    nameCadLabel.innerHTML = "Nome deve ter no mínimo 3 caracteres"
  } else {
    nameCadLabel.setAttribute('style', "color= green")
    nameCad.setAttribute("style", "border-color: green")
    nameCadLabel.innerHTML = "Nome"

  }
} )

passwordCad.addEventListener('keyup', () => {
  if (passwordCad.value.length <= 5) {
    passwordCadLabel.setAttribute('style', "color:red")
    passwordCad.setAttribute("style", "border-color: red")
    passwordCadLabel.innerHTML = "Senha deve ter no mínimo 6 caracteres"
  } else {
    passwordCadLabel.setAttribute('style', "color= green")
    passwordCad.setAttribute("style", "border-color: green")
    passwordCadLabel.innerHTML = "Senha"

  }
} )

confirmPasswordCad.addEventListener( "keyup" , () => {
  if (confirmPasswordCad.value != passwordCad.value) {

    confirmPasswordCadLabel.setAttribute('style', "color:red")
    confirmPasswordCad.setAttribute("style", "border-color: red")
    confirmPasswordCadLabel.innerHTML = "Confirmar Senha *As senhas não conferem"
  } else {
    confirmPasswordCadLabel.setAttribute('style', "color= green")
    confirmPasswordCad.setAttribute("style", "border-color: green")
    confirmPasswordCadLabel.innerHTML = "Confirmar Senha"

  }
} )

cpfCad.addEventListener('keyup', () => {
  if (cpfCad.value.length <= 10) {
    cpfCadLabel.setAttribute('style', "color:red")
    cpfCad.setAttribute("style", "border-color: red")
    cpfCadLabel.innerHTML = "CPF deve ter no mínimo 11 números"
  } else {
    cpfCadLabel.setAttribute('style', "color= green")
    cpfCad.setAttribute("style", "border-color: green")
    cpfCadLabel.innerHTML = "CPF"
  }
} )

addressCad.addEventListener('keyup', () => {
  if (addressCad.value.length <= 10 ) {
    addressCadLabel.setAttribute('style', "color:red")
    addressCad.setAttribute("style", "border-color: red")
    addressCadLabel.innerHTML = "Endereço deve ter no mínimo 10 caracteres"
  } else {
    addressCadLabel.setAttribute('style', "color= green")
    addressCad.setAttribute("style", "border-color: green")
    addressCadLabel.innerHTML = "Endereço"
  }
} )

function inputsAreOk () {
  // confirmar se os casos estão preenchidos

  if (userCad.value.length > 2
     &&
     nameCad.value.length > 2
     &&
     passwordCad.value.length > 5
     &&
     passwordCad.value.length == confirmPasswordCad.value.length
     &&
     cpfCad.value.length == 11
     && 
     addressCad.value.length > 10
     ) {
    msgSuccess.innerHTML = ("Cadastrando...")
    msgError.innerHTML = ("")
    register()
  } else { 
    msgSuccess.innerHTML = ("")
    msgError.innerHTML = ("Campos incorretos ou vazios.")
  }

}


function register() {

  let user = {
    user: userCad.value,
    name: nameCad.value,
    password: passwordCad.value,
    cpf: cpfCad.value, 
    address: addressCad.value,
  }

  let userList = JSON.parse(localStorage.getItem('userList') || "[]")

  userList.push(user)

  localStorage.setItem('userList', JSON.stringify(userList))

  console.log(userList)
  msgSuccess.setAttribute("style", "color: blue")
  msgSuccess.innerHTML = ("Cadastrando usuário...")

  setTimeout(() => {
    msgSuccess.setAttribute("style", "color: rgb(18, 214, 18)")
    msgSuccess.innerHTML = ("Cadastrado com Sucesso!")
    let token = Math.random().toString(16).substring(2)
    localStorage.setItem('token', token)
    
  }, 500 )

  setTimeout(() => {
    window.location.href ='/admin/home-page'
  }, 1000 )

}





let passwordCadEye = document.querySelector('#seePasswordCad')

passwordCadEye.addEventListener('click', () => {
  let inputPasswordCad = document.querySelector("input#passwordCad")

  if (inputPasswordCad.getAttribute('type') == 'password') {
    inputPasswordCad.setAttribute('type', "text")
  } else {
    inputPasswordCad.setAttribute('type',"password")
  }
} )

let confirmPasswordCadEye = document.querySelector("#seeConfirmPasswordCad")

confirmPasswordCadEye.addEventListener("click", () => {
  let inputConfirmPasswordCad = document.querySelector('input#confirmPasswordCad')

  if ( inputConfirmPasswordCad.getAttribute('type') == 'password') {
    inputConfirmPasswordCad.setAttribute('type', 'text')
  } else {
    inputConfirmPasswordCad.setAttribute('type','password')
  }

})







/**/