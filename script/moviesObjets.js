class Movies {
  constructor(name, year, genre, director, actors, rating, description, link) {
    this.name = name;
    this.year = year;
    this.genre = genre;
    this.director = director;
    this.actors = actors;
    this.rating = rating;
    this.description = description;
    this.link = link;
  }
}

// array de peliculas
const Hollandia = new Movies(
  "Hollandia",
  2023,
  "Drama, Romance",
  "Joaquín Llamas",
  "Joaquín Llamas, María José López",
  8.5,
  "Una historia de amor en medio de la guerra. La historia de amor entre un joven y una mujer que se ven obligados a separarse por la guerra.Holland es una película de suspenso de 2025 sobre una profesora que sospecha que su marido la engaña. La película está protagonizada por Nicole Kidman y Hugh Jackman.",
  "../recursos/imagenes/fondos/imagen1.webp"
);
const BlindadoSinSalida = new Movies(
  "Blindado Sin Salida",
  2023,
  "Acción, Thriller",
  "Joaquín Llamas",
  "Joaquín Llamas, María José López",
  8.5,
  "Un thriller de acción en un blindado. Un grupo de ladrones intenta robar un blindado, pero las cosas no salen como esperaban.Un padre y un hijo que trabajan como guardias de seguridad en una compañía de transporte de valores, se encuentran con un equipo de ladrones mientras atraviesan un puente quedando acorralados, deben idear un plan para escapar y salir vivos.",
  "../recursos/imagenes/fondos/imagen2.webp"
);

const juegoDeTronos = new Movies(
  "Juego de Tronos",
  2011,
  "Acción, Aventura, Drama",
  "David Benioff, D.B. Weiss",
  "Emilia Clarke, Kit Harington, Peter Dinklage",
  9.3,
  "Un mundo de fantasía lleno de intrigas y batallas. La historia de varias familias nobles que luchan por el control del Trono de Hierro.Juego de Tronos es una serie de televisión que narra la lucha por el poder entre casas nobles en Poniente, un continente ficticio. La serie está basada en la saga de novelas Canción de hielo y fuego de George R.R. Martin. La serie se desarrolla en un mundo medieval ficticio y sigue las historias de varios personajes que luchan por el control del Trono de Hierro.",
  "../recursos/imagenes/fondos/imagen3.webp"
);
const estadoElectrico = new Movies(
  "Estado Eléctrico",
  2023,
  "Acción, Thriller",
  "Joaquín Llamas",
  "Joaquín Llamas, María José López",
  8.5,
  "Un thriller de acción en un blindado. Un grupo de ladrones intenta robar un blindado, pero las cosas no salen como esperaban.De la mano de un robot, un contrabandista y su ocurrente compañero, una adolescente huérfana emprende un inolvidable viaje en busca de su hermano menor. En su camino, se enfrenta a un mundo devastado por la guerra y la escasez de recursos, donde la humanidad ha sido llevada al límite.",
  "../recursos/imagenes/fondos/imagen4.webp"
);

const daredevil = new Movies(
  "Daredevil",
  2003,
  "Acción, Aventura, Fantasía",
  "Mark Steven Johnson",
  "Ben Affleck, Jennifer Garner, Colin Farrell",
  5.3,
  "Un abogado ciego que lucha contra el crimen. Matt Murdock es un abogado ciego que lucha contra el crimen como Daredevil.El abogado Matt Murdock, ciego a causa de un residuo radioactivo, se convierte por las noches en Daredevil, un héroe enmascarado que vigila las calles de la ciudad de Nueva York y lucha contra toda clase de injusticias.",
  "../recursos/imagenes/fondos/imagen5.webp"
);
const GoodMythicalMorning = new Movies(
  "Good Mythical Morning",
  2012,
  "Comedia, Talk Show",
  "Rhett McLaughlin, Link Neal",
  "Rhett McLaughlin, Link Neal",
  8.4,
  "Un programa de comedia y entretenimiento. Rhett y Link presentan un programa de comedia y entretenimiento en el que realizan retos, pruebas y entrevistas.Buenos días (1959) es una película japonesa que cuenta la historia de dos niños que se niegan a hablar tras ser reprendidos por pedir un televisor. La película fue dirigida por Yasujiro Ozu. ",
  "../recursos/imagenes/fondos/imagen6.webp"
);
const MiVillanoFavorito = new Movies(
  "Mi Villano Favorito 4",
  2010,
  "Animación, Comedia, Aventura",
  "Pierre Coffin, Chris Renaud",
  "Steve Carell, Jason Segel, Russell Brand",
  7.6,
  "Gru, Lucy y las niñas -Margo, Edith y Agnes- dan la bienvenida a un nuevo miembro en la familia: Gru Junior, que parece llegar con el propósito de ser un suplicio para su padre. Gru tendrá que enfrentarse en esta  ocasión a su nueva némesis",
  "../recursos/imagenes/fondos/imagen7.webp"
);

const codigoNegro = new Movies(
  "Codigo Negro",
  2023,
  "Acción, Thriller",
  "Joaquín Llamas",
  "Joaquín Llamas, María José López",
  8.5,
  "Un thriller de acción en un blindado. Un grupo de ladrones intenta robar un blindado, pero las cosas no salen como esperaban.Del director Steven Soderbergh, Código Negro es un emocionante drama de espionaje sobre los legendarios agentes George Woodhouse y su amada esposa Kathryn. Cuando se sospecha que ella ha traicionado a la nación, George se enfrenta a la prueba definitiva: ¿lealtad a su matrimonio o a su país?",
  "../recursos/imagenes/fondos/imagen8.webp"
);
const hidiSeason1 = new Movies(
  "Hidi Season 1",
  2023,
  "Acción, Thriller",
  "Joaquín Llamas",
  "Joaquín Llamas, María José López",
  8.5,
  "Un thriller de acción en un blindado. Un grupo de ladrones intenta robar un blindado, pero las cosas no salen como esperaban.La temporada 1 de la serie web hindi Gunaah es un drama de venganza que involucra a Surbhi Jyoti, Gashmeer Mahajani, y Zayn Ibad Khan.Los personajes principales se encuentran envueltos en un drama de venganza.  ",
  "../recursos/imagenes/fondos/imagen9.webp"
);
const culpaMia = new Movies(
  "Culpa Mía",
  2023,
  "Romance, Drama",
  "Joaquín Llamas",
  "Joaquín Llamas, María José López",
  8.5,
  "Una historia de amor en medio de la guerra. La historia de amor entre un joven y una mujer que se ven obligados a separarse por la guerra.La joven Noah deja todo para mudarse a la mansión de William Leister, el flamante y rico marido de su madre Rafaela. Allí conoce a Nick, su nuevo hermanastro. Ella no tarda en descubrir que, tras la imagen de hijo modelo, Nick oculta algo.",
  "../recursos/imagenes/fondos/imagen10.webp"
);
const reacher = new Movies(
  "Reacher",
  2022,
  "Acción, Thriller",
  "Nick Santora",
  "Alan Ritchson, Malcolm Goodwin, Willa Fitzgerald",
  8.1,
  "Un ex-militar investiga un asesinato. Jack Reacher es un ex-militar que investiga un asesinato y se ve envuelto en una conspiración.Un abogado defensor contrata a un antiguo investigador del ejército para analizar el caso de un francotirador entrenado, quien aparentemente mató al azar a cinco personas.",
  "../recursos/imagenes/fondos/imagen11.webp"
);
const theKingOfMask = new Movies(
  "El Rey de la Máscara",
  2023,
  "Acción, Thriller",
  "Joaquín Llamas",
  "Joaquín Llamas, María José López",
  8.5,
  "Un thriller de acción en un blindado. Un grupo de ladrones intenta robar un blindado, pero las cosas no salen como esperaban.A principios de siglo, un anciano actor callejero sin familia desea encontrar un heredero al que transmitir su oficio y legar sus máscaras. Por tal motivo compra un niño de una familia humilde, aunque la alegría inicial no durará demasiado ya que, cuando un día descubre que se trata de una niña, decide expulsarla.",
  "../recursos/imagenes/fondos/imagen12.webp"
);
const moana = new Movies(
  "Moana",
  2016,
  "Animación, Aventura, Fantasía",
  "Ron Clements, John Musker",
  "Auli'i Cravalho, Dwayne Johnson, Rachel House",
  7.6,
  "Una joven navega por el océano para salvar su isla. Moana es una joven que navega por el océano para salvar su isla y encontrar a su abuelo.Vaiana Waialiki es una joven entusiasta del mar y la única hija de un jefe marinero. Cuando los marineros de su aldea no pueden pescar ningún pez y todas las cosechas fallan, Vaiana descubre que el semidiós Maui causó el infortunio después de robar el corazón de la diosa Te Fiti. La única manera de salvar el destino de la isla es persuadiendo a Maui para que le devuelva el corazón a Te Fiti. Entonces, Vaiana emprende una arriesgada aventura para salvar a su aldea junto al semidiós Maui.",
  "../recursos/imagenes/fondos/imagen13.webp"
);

let movies = [
  Hollandia,
  BlindadoSinSalida,
  juegoDeTronos,
  estadoElectrico,
  daredevil,
  GoodMythicalMorning,
  MiVillanoFavorito,
  codigoNegro,
  hidiSeason1,
  culpaMia,
  reacher,
  theKingOfMask,
  moana,
];

// funcion para colorar la pelicula principal

function moviePrincipal() {
  let movie = movies[Math.floor(Math.random() * movies.length)];
  let movieContainer = document.getElementById("moviePrincipal");
  // borra el contenido anterior
  movieContainer.innerHTML = "";
  // Modificar la propiedad background-image del contenedor
  movieContainer.style.backgroundImage = `url(${movie.link})`;
  // agrega una linea de gradiente encima de la imagen con una transparencia del 50%
  movieContainer.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${movie.link})`;
  movieContainer.style.transition = "background-image 0.5s ease-in-out";
  movieContainer.style.backgroundSize = "cover";

  // agrega la nueva pelicula
  movieContainer.innerHTML = `
  <div class="conteiner" id="movie">
    <h3 class="titleMovie" id="titleMovie">${movie.name} <b>${movie.year}</b></h3>
    <p class="descriptionMovie">${movie.description}
    </p>
    <button id="btnPlay" class="btnPrincipal" role="button"><b>&#x025BA </b>Reproducir</button>
    <button id="btnPlay" class="btnPrincipal" role="button"><b class="corazon">&#x02661</b>
        Favoritos</button>
    <button id="btnInfoMovie" class="btnPrincipal" role="button"><b>&#x02139 </b>Más Información</button>
  </div>
    `;
}
// Agrega una animacion para que el contendor de la pelicula principal se vea mas atractivo

moviePrincipal();
setInterval(moviePrincipal, 6000);
