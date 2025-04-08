// ya que se termine de cargar el DOM ejecuta este script
document.addEventListener("DOMContentLoaded", () => {
  // ? ----- ----- Variables ----- -----

  const fila = document.querySelector(".conteinerCorrusel2");
  const peliculas = document.querySelectorAll(".movie2");

  const flechaIzquierda = document.getElementById("arrowLeft2");
  const flechaDerecha = document.getElementById("arrowRigth2");

  // ? ----- ----- Event Listener para la flecha derecha. ----- -----
  flechaDerecha.addEventListener("click", () => {
    fila.scrollLeft += fila.offsetWidth;

    const indicadorActivo = document.querySelector(".indicadores2 .activo");
    if (indicadorActivo.nextSibling) {
      indicadorActivo.nextSibling.classList.add("activo");
      indicadorActivo.classList.remove("activo");
    }
  });

  // ? ----- ----- Event Listener para la flecha izquierda. ----- -----
  flechaIzquierda.addEventListener("click", () => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector(".indicadores2 .activo");
    if (indicadorActivo.previousSibling) {
      indicadorActivo.previousSibling.classList.add("activo");
      indicadorActivo.classList.remove("activo");
    }
  });

  // ? ----- ----- Paginacion ----- -----
  const numeroPaginas = Math.ceil(peliculas.length / 5);
  console.log(numeroPaginas);
  for (let i = 0; i < numeroPaginas; i++) {
    const indicador = document.createElement("button");

    if (i === 0) {
      indicador.classList.add("activo");
    }

    document.querySelector(".indicadores2").appendChild(indicador);
    indicador.addEventListener("click", (e) => {
      fila.scrollLeft = i * fila.offsetWidth;

      document
        .querySelector(".indicadores2 .activo")
        .classList.remove("activo");
      e.target.classList.add("activo");
    });
  }

  // ? ----- ----- Hover ----- -----
  peliculas.forEach((pelicula) => {
    pelicula.addEventListener("mouseenter", (e) => {
      const elemento = e.currentTarget;
      setTimeout(() => {
        peliculas.forEach((pelicula) => pelicula.classList.remove("hover"));
        elemento.classList.add("hover");
      }, 300);
    });
  });

  fila.addEventListener("mouseleave", () => {
    peliculas.forEach((pelicula) => pelicula.classList.remove("hover"));
  });
});
