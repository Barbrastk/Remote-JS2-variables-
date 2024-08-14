


//variables generos con emoticonos

const popRock = "🎵 Pop Rock";
const rock = "🎸 Rock";
const hardRock = "🤘 Hard Rock";
const clasica = "🎼 Clásica";

//interfaces grupo

interface Grupo {
	name: string;
	year: number;
	active: boolean;
	gender: string;
};

//estilo nombre grupos
const estiloNombre = "font-size: 18px; font-weight: bold; background-color: green";

//variables con objetos para cada grupo
const grupoA: Grupo = {
    name: "The Beatles", 
	year: 1960,
	active: true,
	gender: popRock,
};

const grupoB: Grupo = {
    name: "Queen",
	year: 1970,
	active: false,
	gender: rock,
};

const grupoC: Grupo = {
    name: "AC DC",
	year: 1973,
	active: true,
	gender: hardRock,
};

const grupoD: Grupo = {
    name: "Ludwig van Beethoven",
	year: 1770,
	active: false,
	gender: clasica,
};

const grupoE: Grupo = {
    name: "The Rolling Stones",
	year: 1962,
	active: true,
	gender: rock,
};

//mostrado por consola los grupos y estilo en el nombre
console.log(`%c${grupoA.name}`,estiloNombre);
console.log(grupoA.year, grupoA.active, grupoA.gender);
console.log(`%c${grupoB.name}`,estiloNombre);
console.log(grupoB.year, grupoB.active, grupoB.gender);
console.log(`%c${grupoC.name}`,estiloNombre);
console.log(grupoC.year, grupoC.active, grupoC.gender);
console.log(`%c${grupoD.name}`,estiloNombre);
console.log(grupoD.year, grupoD.active, grupoD.gender);
console.log(`%c${grupoE.name}`, estiloNombre)
console.log(grupoE.year, grupoE.active, grupoE.gender)