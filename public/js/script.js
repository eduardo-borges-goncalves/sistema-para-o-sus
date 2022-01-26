let userLogin = document.getElementById('user')
let passwordLogin = document.getElementById('password')

let msgError = document.getElementById('msgError')

let userList = []

let userValid = {
  user: '',
  name: '',
  password: '',
  cpf: '', 
  address:'',
}

userList = JSON.parse(localStorage.getItem("userList")) // isso aqui pega a lista salva com o outro arquivo do JS no navegador. 



function login(){
  
  if (userLogin.value.length == 0)  {
    msgError.innerHTML = `Campo usuário vazio.`
    userLogin.focus()
  }
  
  else
   {
      userList.forEach((item) => {
        if (userLogin.value == item.user && passwordLogin.value == item.password){ 
          userValid = {
            user: item.user,
            name: item.name,
            password: item.password,
          }
        }
      })

      userList.forEach((item) => {
        if (userLogin.value == item.user ){ 
          userValid = {
            user: item.user,
            name: item.name,
            password: item.password,
          }
        }
      })
      
      if(userLogin.value == userValid.user 
        && passwordLogin.value == userValid.password 
        && userLogin.value.length != 0 
        && passwordLogin.value.length != 0) 
        
      {
          window.location.href = "home-page" 

          let token = Math.random().toString(16).substring(2)
          localStorage.setItem('token', token)

          localStorage.setItem('logUser', JSON.stringify(userValid))
      } 
      
      else if (userLogin.value == userValid.user 
        && passwordLogin.value != userValid.password)
        
      { 
          msgError.innerHTML = `Senha incorreta.`
          passwordLogin.setAttribute("style","color:red")
          passwordLogin.focus()
      } 
      
      else if (userLogin.value != userValid) 
      
      {
        msgError.innerHTML = `Usuário não cadastrado.`
        userLogin.setAttribute("style","color:red")
        userLogin.focus()
      }

        else {
        msgError.innerHTML = `Senha ou usuário incorretos.`
      }
  }
}

userLogin.addEventListener("keyup", () => {
  userLogin.setAttribute("style","color:black")
})

passwordLogin.addEventListener("keyup", () => {
  passwordLogin.setAttribute("style","color:black")
})



let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=> {
  let inputPassword = document.querySelector("input#password")

  if (inputPassword.getAttribute('type') == 'password') {
    inputPassword.setAttribute('type', 'text')
  } else { 
    inputPassword.setAttribute('type', 'password')
  }

})



/**/
