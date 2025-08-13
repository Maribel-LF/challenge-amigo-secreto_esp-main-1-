// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];

//Permite sustituir texto del html
function asignarTextoElemeno (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


//Agrega nombres desde el boton añadir se vincula el html
function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value;
  
  if (nombreAmigo === ""){
    alert("Ingresa un nombre valido");
  } else {
    nombres.push(nombreAmigo);
    console.log(nombres);
  }

    const lista = document.getElementById("listaAmigos");
    const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = nombreAmigo;
        lista.appendChild(nuevoElemento);
    limpiarCaja();

}

//Para limpiar el campo despues de añadir cada nombre
function limpiarCaja(){
    document.querySelector("#amigo").value = "";
}


function sortearAmigo(){

    if (nombres.length === 0) {
        alert("No hay nombres para sortear");
        return;
      }

   let sortear = Math.floor(Math.random() * nombres.length);
   let nombreSeleccionado = nombres[sortear];
   console.log(nombreSeleccionado);
   //document.getElementById("nombres").textContent = nombreSeleccionado;
   asignarTextoElemeno("h2", `Tu amigo secreto es: ${nombreSeleccionado}`);
} 


