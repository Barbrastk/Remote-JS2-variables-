


//variables géneros con emoticonos

const popRock = "🎵 Pop Rock";
const rock = "🎸 Rock";
const hardRock = "🤘 Hard Rock";
const clasica = "🎼 Clásica";

//interfaces grupo

interface Grupo {
	nombre: string;
	año: number;
	activo: boolean;
	género: string;
};

//estilo nombre grupos. Esto no me sale. No se hacerlo
const estiloNombre = "color: red; font-size: 18px; font-weight: bold; background-color: green";

//variables con objetos para cada grupo
const grupoA: Grupo = {
    nombre: "The Beatles", 
	año: 1960,
	activo: true,
	género: popRock,
};

const grupoB: Grupo = {
    nombre: "Queen",
	año: 1970,
	activo: false,
	género: rock,
};

const grupoC: Grupo = {
    nombre: "AC DC",
	año: 1973,
	activo: true,
	género: hardRock,
};

const grupoD: Grupo = {
    nombre: "Ludwig van Beethoven",
	año: 1770,
	activo: false,
	género: clasica,
};

const grupoE: Grupo = {
    nombre: "The Rolling Stones",
	año: 1962,
	activo: true,
	género: rock,
};

//mostrado por consola los grupos. Si hubiera podido definir bien los estilos css para los nombres, No hubiera sabido mostrarlos
console.log(grupoA);
console.log(grupoB);
console.log(grupoC);
console.log(grupoD);
console.log(grupoE);