// GO!

// TASK 1 -- Show/Hide Nav
var i = 0
document.querySelector(".answer-box button").addEventListener('click',function(){
    i ++
    var navMenu = document.querySelector(".nav-menu");
    // console.log(navMenu);
    var button = document.querySelector(".answer-box button");
    // console.log(button.textContent);
    if (i%2 !== 0) {
    // navMenu.style.visibility ='hidden'
    button.textContent = "Hide nav"
    }
    else {
    // navMenu.style.visibility ='visible'
    button.textContent = "Show nav"
    }
    // cambiar clases
    navMenu.classList.toggle("nav-menu-hidden")
})

// TASK 2 -- Select an Icon
// document.querySelector(".wish-list").addEventListener('click',function(){
//     var padre = document.querySelectorAll(".wish-list div")
//     console.log(padre);
//     for (var i = 0; i < padre.length; i++) {
//       console.log(padre[i]);
//       padre[i].classList.toggle("selected")
//     }
// })
var divTag = document.querySelectorAll(".wish-list div")
function changeClass (){
  var currenElement = this
  console.log(currenElement);
  currenElement.classList.toggle("selected")
}
var divCollection = [...divTag] //convierte en array
  for (var i = 0; i < divCollection.length; i++) {
    var button = divCollection[i]
    button.addEventListener('click', changeClass)
  }

// TASK 3 -- Move Item From List to List
var contenedorBotones= document.querySelectorAll(".add-points button")
var buttonCollection = [...contenedorBotones]
var cajaMorada = document.querySelector(".total-points")

// console.log(buttonCollection);
function suma (){

  numeroBoton = parseInt(this.textContent)
  resultante = resultante + numeroBoton
  cajaMorada.textContent = resultante

  // console.log(resultante);
}
for (var i = 0; i < buttonCollection.length; i++) {
  var resultante = parseInt(document.querySelector(".total-points").textContent)

  var button = buttonCollection[i]
  // console.log(buttonCollection[i].textContent);

  button.addEventListener('click',suma)
}

// TASK 4 -- Add Guest to List
  var contenedorList =document.querySelectorAll("#list-2-list li")
  // console.log(contenedorList);
  function changePlace() {
    var elementoLista = this
    var padre1 = document.querySelector('.good-standing-list')
    var padre2 = document.querySelector('.probation-list')
    // console.log(padre1);
    if (elementoLista.className === "orange") {
      elementoLista.className = "green"
      padre1.appendChild(elementoLista)

    }else if(elementoLista.className === "green"){
      elementoLista.className = "orange"
      padre2.appendChild(elementoLista)
    }
  }
  for (var i = 0; i < contenedorList.length; i++) {
    var  buttonList = contenedorList[i]
    buttonList.addEventListener('click', changePlace)
  }


// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
var palete = document.querySelectorAll(".palette span")
// console.log(fondoTexto);
function changeBackground() {
  var color = this.className
  console.log(color);
  document.querySelector(".msg").className = "msg "+ color


}
for (var i = 0; i < palete.length; i++) {

  var buttonPalete = palete[i]

  buttonPalete.addEventListener('click', changeBackground)
}
