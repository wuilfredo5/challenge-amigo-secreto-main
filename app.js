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
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
