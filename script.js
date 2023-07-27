/*NODOS*/
const input = document.querySelector("input")
const boton = document.querySelector("button")
const containerComments = document.querySelector(".containerComments")
/*FUNCTION*/
function comment(){
    console.log(input.value)
    containerComments.innerHTML += `<p>${input.value}</p>`
    input.value = ""
}