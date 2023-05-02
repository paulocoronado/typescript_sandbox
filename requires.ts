//Importar modulos usando require


const { PI, usuario } = require("./exports");
const exportaciones = require("./exports");
const {saludar} = require("./exports");


console.log(PI);
console.log(usuario);
console.log(exportaciones.sumar(1, 2));
console.log(exportaciones.restar(1, 2));
console.log(saludar());
