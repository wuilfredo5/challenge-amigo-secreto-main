// Array para almacenar los nombres de los amigos ingresados
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
   // Captura el valor del campo de entrada
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validación: el campo no debe estar vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }   
    
   // Agrega el nombre al array de amigos
    amigos.push(nombre);

    // Limpia el campo de entrada
    input.value = "";

    // Actualiza la lista en pantalla
    mostrarListaAmigos();
}

// Función para sortear un amigo de la lista
function sortearAmigo() {
    
  // Selecciona el elemento donde se mostrará el resultado
    const resultado = document.getElementById('resultado');

    // Valida que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        resultado.innerHTML = '<li>No hay amigos para sortear.</li>';
        return;
    }

    // Genera un índice aleatorio
    const indice = Math.floor(Math.random() * amigos.length);
    // Obtiene el nombre sorteado
    const nombreSorteado = amigos[indice];



    // Muestra el resultado en la página
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${nombreSorteado}</strong></li>`;
    // Limpia la lista de amigos en pantalla
    document.getElementById('listaAmigos').innerHTML = "";
}



// Función para mostrar la lista de amigos en la página
function mostrarListaAmigos() {
    // Selecciona el elemento de la lista en el HTML
    const lista = document.getElementById('listaAmigos');
    // Limpia la lista antes de agregar nuevos elementos
    lista.innerHTML = "";

    // Recorre el array de amigos y agrega cada uno como <li>
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}



