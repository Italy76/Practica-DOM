
function cambiarTitulo(){
    console.log("aqui estoy dentro de la funcion cambiarTitulo");
    // traer el título o h1
   // let titulo = document.querySelector("#Titulo");
   // otra forma de traer h1
   let TituloH1 = document.getElementById("Titulo")   // no hace falta el simbolo del id
    console.log(TituloH1);
    TituloH1.innerHTML = "Título modificado";
    TituloH1.className = "display-4 text-warning";
}

// creo función evento que agrego mediante onclick al botón ver más en html.
function VerMas(){
    console.log("desde la funcion VerMas");
    // buscar el elemento padre
    let contenedorPadre = document.getElementById("artículo");
    console.log(contenedorPadre); // el console.log permite ver si hay errores. En console debe aparecer el div
    let btnVerMas = document.getElementById("btnVerMas"); // corri arriba la linea que trae al boton aca en js.

    if(btnVerMas.innerHTML == "Ver más"){
         // opcion 1 - camino corto
  // contenedorPadre.innerHTML += ` <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum odit, temporibus culpa, enim natus soluta ex iusto voluptate ipsa blanditiis ipsum, accusamus ad quos. Eveniet ea tempore culpa sit, rem eius eos commodi sapiente quae illo dolores suscipit itaque! Id velit architecto harum soluta nostrum facere deserunt officiis aut dolore repellat optio, sed quaerat cumque, minima placeat quos adipisci qui?
  //  </p>` // innerHtml permite agregar no solo texto sino tambien codigo html, pero SIEMPRE como cadena de texto.
    // el += que puse en el inner.HTML es el acumulador: agrega este nuevo párrafo sin borrar el anterior.
    
    // opción 2 - camino largo
    // 1 - crear el elemento
    let parrafo = document.createElement("p")  // se crea un objeto que es una etiqueta de html.
    console.log(parrafo);

    // 2 - trabajar el elemento agregado
    parrafo.innerHTML = "Aqui agrego el parrafo de prueba";
    parrafo.className = "lead";

    // 3 - insertar el elemento en el maquetado
    contenedorPadre.appendChild(parrafo)  // appendChild agrega un nodo
    console.log(btnVerMas);
    btnVerMas.innerHTML = "Ver menos"
    btnVerMas.className = "btn btn-danger"
    } else{
        console.log("quiero borrar el parrafo")
        // borrar  o eliminar el parrafo del DOM
        console.log(contenedorPadre.hasChildNodes()) // pregunta al padre si tiene nodos hijos
        console.log(contenedorPadre.children);  // me devuelve un arreglo con los nodos hijos indicados
        if(contenedorPadre.hasChildNodes() && contenedorPadre.children.length == 2){
            // aqui digo que quiero remover un nodo
            contenedorPadre.removeChild(contenedorPadre.children[1])  // asi se borra un nodo del DOM
              // cambiar el texto del boton de nuevo al Ver mas
        btnVerMas.innerHTML = "Ver más";
        btnVerMas.className = "btn btn-primary";
        }
      
    }

}

// La propiedad para acceder a un input en un formulario es value, no innerHTML.