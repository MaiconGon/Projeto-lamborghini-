const img = document.querySelector("#profile img");

function carro() {
  img.setAttribute("src", "./assets/avatar.png");
  img.setAttribute("alt", "carro lamborghini na frente da parede cinza");
}

carro();

function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  //pegar a tag da imagem

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute("alt", "carro lamborghini na frente da parede cinza");
  } else {
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute("alt", "carro lamborghini com paisagem azul de fundo");
  }
}
