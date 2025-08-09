// Array para almacenar nombres de amigos
let amigos = [];

function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();

  if (!nombre) {
    alert('Por favor, inserte un nombre.');
    return;
  }

  amigos.push(nombre);
  input.value = '';
  mostrarListaAmigos();
}

function sortearAmigo() {
  const resultado = document.getElementById('resultado');

  if (!amigos.length) {
    resultado.innerHTML = '<li>No hay amigos para sortear.</li>';
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const nombreSorteado = amigos[indice];

  resultado.innerHTML = `
    <li>El amigo secreto es: <strong>${nombreSorteado}</strong></li>
  `;
  document.getElementById('listaAmigos').innerHTML = '';
}

function mostrarListaAmigos() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  amigos.forEach((amigo) => {
    const li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);
  });
}



