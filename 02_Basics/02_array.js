const marvel_heroes = ["Thor", "Ironman", "Spiderman"]
const dc_heroes = ["Superman", "Flash", "Batman"]

//marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

const allHeroes = marvel_heroes.concat(dc_heroes)
//console.log(allHeroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
//console.log(all_new_heroes);


const another_array = [1, 2, 3, [4, 5, 8, [3, 4, 6, 7]], 6, 7, ]
const real_array = another_array.flat(Infinity)
// console.log(real_array);


//console.log(Array.isArray("Vikas"));
//console.log(Array.from("Vikas"));
//console.log(Array.from({name: "Vikas"})); // interesting Array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
