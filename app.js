// Array global para almacenar la lista de amigos
let amigos = [];

/**
 * Agrega un nuevo amigo a la lista desde el input.
 * Valida que el nombre no esté vacío antes de agregar.
 */
function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();

  // Validación básica: evita entradas vacías
  if (!nombre) {
    alert('Por favor, inserte un nombre válido.');
    return;
  }

  amigos.push(nombre);
  input.value = ''; // Limpia el campo después de agregar
  mostrarListaAmigos(); // Actualiza
}

/**
 * Selecciona un amigo aleatorio de la lista.
 * Muestra el resultado en el DOM y limpia la lista visual.
 */
function sortearAmigo() {
  const resultado = document.getElementById('resultado');

  // Valida que existan amigos para sortear
  if (!amigos.length) {
    resultado.innerHTML = '<li>No hay amigos registrados.</li>';
    return;
  }

  // Lógica del sorteo
  const indice = Math.floor(Math.random() * amigos.length);
  const nombreSorteado = amigos[indice];

  // Muestra el resultado con formato
  resultado.innerHTML = `
    <li>¡El amigo secreto es: <strong>${nombreSorteado}</strong>!</li>
  `;
  
  // Limpia la lista visual (pero conserva los datos en el array)
  document.getElementById('listaAmigos').innerHTML = '';
}

/**
 * Renderiza la lista actual de amigos en el DOM.
 * Usa forEach para mejor legibilidad.
 */
function mostrarListaAmigos() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = ''; // Limpieza inicial

  // Genera un <li> por cada amigo
  amigos.forEach((amigo) => {
    const li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);
  });
}


