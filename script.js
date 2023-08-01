/*NODOS*/
/*aca se crean los nodos que se utilizaran para realizar la seccion de los comentarios*/
const input = document.querySelector("input") //---------------> Nodo del Input
const boton = document.querySelector("button") // -------------> Nodo del Boton
const containerComments = document.querySelector(".containerComments") // ----------> Nodo del contenedor de los comentarios
/*FUNCTION*/
/*aca se crea la funcion que realizara la entrada de los comentarios*/
/*creamos el  evento de click del boton con la clase */
function comment(){ 
    console.log(input.value) // -------> capturamos el valor del input
    /* le añadimos al contenedor de los comentarios el valor del input que se ingresara despues del evento click en el boton */
    containerComments.innerHTML += `<p>${input.value}</p>` 
    input.value = ""
}