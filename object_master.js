const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);


// pokemon where id is divisible by 3
const idDivBy3 = pokémon.filter ( p => p.id % 3 === 0);
console.log('id divisible by 3:');
console.log(idDivBy3);
console.log("-------------------");

// pokemon that are fire type
const fireTypes = pokémon.filter( p => p.types.includes('fire'));
console.log('fire types:');
console.log(fireTypes);
console.log("-------------------");

// pokemon that have more than one type
const multiType = pokémon.filter( p => p.types.length > 1);
console.log('pokemon with more than one type:');
console.log(multiType);
console.log("-------------------");

// pokemon names only
const pokeNames = pokémon.map( p => p.name);
console.log('pokemon names only:');
console.log(pokeNames);
console.log("-------------------");

// pokemon names with id > 99
const pokeNames99 = pokémon.filter( p => p.id > 99).map( p => p.name);
console.log('names of pokemon with ids greater than 99:')
console.log(pokeNames99);
console.log("-------------------");

// pokemon whose only type is poison
const poisonPoke = pokémon.filter( p => p.types.length == 1).filter( p => p.types == 'poison').map( p => p.name);
console.log('pokemon whos only type is poison:');
console.log(poisonPoke);
console.log("-------------------");

// pokemon type for all pokemon whos second type is flying
const secondFlying = pokémon.filter( p => p.types[1] == 'flying').map(p => p.types[0]);
console.log('first type for all pokemon whos second type is flying:');
console.log(secondFlying);
console.log("-------------------");

// count of all pokemon that are normal type
const normies = pokémon.filter( p => p.types.includes('normal') ).length;
console.log('count of all normal type pokemon:');
console.log(normies);
console.log("-------------------");