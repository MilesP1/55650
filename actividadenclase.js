let nombre = "Luis"
let apellido = "Menendez"
let series = [
    "The walking dead",
    "One Piece",
    "House M.D.",
    "Breaking Bad",
    "Vikings",
    "Game of Thrones",
];

console.log(nombre + " " + apellido);

let peliculas = [
    "Avatar",
    "El Padrino",
    "Instelestelar",
    "Truman Show",
    "Juego de Gemelas",
];

let diaDeLaSemana = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
]
// console.log(series [Math.floor(Math.random() * series.length)]);
// console.log(peliculas [Math.floor(Math.random() * peliculas.length)])
// console.log(diaDeLaSemana [Math.floor(Math.random() * diaDeLaSemana.length)]);


function valorRandom(arreglo){
    return arreglo[Math.floor(Math.random() * arreglo.length)]
}

console.log(valorRandom(diaDeLaSemana));
console.log(valorRandom(series));
console.log(valorRandom(peliculas));