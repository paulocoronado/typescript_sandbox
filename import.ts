//Manejo de importaciones

//Importar modulos
import { PI, usuario } from "./exports";

//Importar todo
import * as exportaciones from "./exports";

//Importar default
import saludar from "./exports";

console.log(PI);
console.log(usuario);
console.log(exportaciones.sumar(1, 2));
console.log(exportaciones.restar(1, 2));
console.log(saludar());

