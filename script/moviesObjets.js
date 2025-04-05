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

const Hollandia = new Movies(
  "Hollandia",
  2023,
  "Drama, Romance",
  "Joaquín Llamas",
  "Joaquín Llamas, María José López",
  8.5,
  "Una historia de amor en medio de la guerra.",
  "../recursos/imagenes/fondos/imagen1.webp"
);
const BlindadoSinSalida = new Movies(
  "Blindado Sin Salida",
  2023,
  "Acción, Thriller",
  "Joaquín Llamas",
  "Joaquín Llamas, María José López",
  8.5,
  "Un thriller de acción en un blindado.",
  "../recursos/imagenes/fondos/imagen2.webp"
);

const juegoDeTronos = new Movies(
  "Juego de Tronos",
  2011,
  "Acción, Aventura, Drama",
  "David Benioff, D.B. Weiss",
  "Emilia Clarke, Kit Harington, Peter Dinklage",
  9.3,
  "Un mundo de fantasía lleno de intrigas y batallas.",
  "../recursos/imagenes/fondos/imagen3.webp"
);
const estadoElectrico = new Movies(
  "Estado Eléctrico",
  2023,
  "Acción, Thriller",
  "Joaquín Llamas",
  "Joaquín Llamas, María José López",
  8.5,
  "Un thriller de acción en un blindado.",
  "../recursos/imagenes/fondos/imagen4.webp"
);

const daredevil = new Movies(
  "Daredevil",
  2003,
  "Acción, Aventura, Fantasía",
  "Mark Steven Johnson",
  "Ben Affleck, Jennifer Garner, Colin Farrell",
  5.3,
  "Un abogado ciego que lucha contra el crimen.",
  "../recursos/imagenes/fondos/imagen5.webp"
);
const GoodMythicalMorning = new Movies(
  "Good Mythical Morning",
  2012,
  "Comedia, Talk Show",
  "Rhett McLaughlin, Link Neal",
  "Rhett McLaughlin, Link Neal",
  8.4,
  "Un programa de comedia y entretenimiento.",
  "../recursos/imagenes/fondos/imagen6.webp"
);
const MiVillanoFavorito = new Movies(
  "Mi Villano Favorito",
  2010,
  "Animación, Comedia, Aventura",
  "Pierre Coffin, Chris Renaud",
  "Steve Carell, Jason Segel, Russell Brand",
  7.6,
  "Un villano que roba la luna y tiene un ejército de minions.",
  "../recursos/imagenes/fondos/imagen7.webp"
);

const codigoNegro = new Movies(
  "Codigo Negro",
  2023,
  "Acción, Thriller",
  "Joaquín Llamas",
  "Joaquín Llamas, María José López",
  8.5,
  "Un thriller de acción en un blindado.",
  "../recursos/imagenes/fondos/imagen8.webp"
);
const hidiSeason1 = new Movies(
  "Hidi Season 1",
  2023,
  "Acción, Thriller",
  "Joaquín Llamas",
  "Joaquín Llamas, María José López",
  8.5,
  "Un thriller de acción en un blindado.",
  "../recursos/imagenes/fondos/imagen9.webp"
);
const culpaMia = new Movies(
  "Culpa Mía",
  2023,
  "Romance, Drama",
  "Joaquín Llamas",
  "Joaquín Llamas, María José López",
  8.5,
  "Una historia de amor en medio de la guerra.",
  "../recursos/imagenes/fondos/imagen10.webp"
);
const reacher = new Movies(
  "Reacher",
  2022,
  "Acción, Thriller",
  "Nick Santora",
  "Alan Ritchson, Malcolm Goodwin, Willa Fitzgerald",
  8.1,
  "Un ex-militar investiga un asesinato.",
  "../recursos/imagenes/fondos/imagen11.webp"
);
const theKingOfMask = new Movies(
  "El Rey de la Máscara",
  2023,
  "Acción, Thriller",
  "Joaquín Llamas",
  "Joaquín Llamas, María José López",
  8.5,
  "Un thriller de acción en un blindado.",
  "../recursos/imagenes/fondos/imagen12.webp"
);
const moana = new Movies(
  "Moana",
  2016,
  "Animación, Aventura, Fantasía",
  "Ron Clements, John Musker",
  "Auli'i Cravalho, Dwayne Johnson, Rachel House",
  7.6,
  "Una joven navega por el océano para salvar su isla.",
  "../recursos/imagenes/fondos/imagen13.webp"
);
