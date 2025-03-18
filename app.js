let amigos = [];

function asignarTextoElemento(elemento, texto, clase = "") {
  let elementoHTML = document.querySelector(elemento);
  if (elementoHTML) {
    elementoHTML.innerHTML = texto;
    elementoHTML.className = clase;
  }
}

function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();

  if (nombre === "") {
    asignarTextoElemento(
      "#resultado",
      "⚠️ Por favor, ingresa un nombre válido.",
      "mensaje-error"
    );
    return;
  }

  amigos.push(nombre);
  actualizarLista();
  input.value = "";
}

function actualizarLista() {
  let listaHTML = document.getElementById("listaAmigos");
  listaHTML.innerHTML = ""; // Limpiar antes de actualizar

  amigos.forEach((nombre, index) => {
    let li = document.createElement("li");
    li.textContent = nombre;

    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "❌";
    btnEliminar.style.marginLeft = "10px";
    btnEliminar.onclick = function () {
      eliminarAmigo(index);
    };

    li.appendChild(btnEliminar);
    listaHTML.appendChild(li);
  });
}

function eliminarAmigo(index) {
  amigos.splice(index, 1);
  actualizarLista();
}

function sortearAmigo() {
  if (amigos.length === 0) {
    asignarTextoElemento(
      "#resultado",
      "⚠️ No hay suficientes amigos para sortear.",
      "mensaje-error"
    );
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSecreto = amigos[indiceAleatorio];

  asignarTextoElemento(
    "#resultado",
    `🎉 El amigo secreto es: ${amigoSecreto} 🎉`,
    "mensaje-exito"
  );
}

asignarTextoElemento(".main-title", "Amigo Secreto");
asignarTextoElemento(".section-title", "Ingrese los nombres de sus amigos");
