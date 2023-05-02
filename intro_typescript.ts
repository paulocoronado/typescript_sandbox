/**
 *  Undefined
 */

let foo:any;              
console.log(foo); 

let objeto:{
  a:number,
  b?:number
}

objeto={
  a:1
}

console.log(objeto.b);


function suma(a:number,b:number, c?:number):number{

  console.log(c)
  return a+b;
}

suma(3,4);

/**
 * Null
 */

let otherVariable:number|null|undefined;
otherVariable = 45;
otherVariable = null;
otherVariable = undefined;
console.log(otherVariable);

/**
 * never
 */

function error(mensaje:string):never{
  throw new Error(mensaje);
}

function fallo():never{
  return error("Reportar fallo");
}

function loopInfinito():never{
  while(true){

  }
}

/**
 * void
 */

function mostrarContenido(curso:string):void{
  const mensaje = curso ? `Bienvenido al curso ${curso}` : "Suscribete al curso";
  console.log(mensaje);
}

mostrarContenido("Typescript");

/**
 * Object
  */
 
let obj:object;
obj = {};
obj = [];
obj = function(){};

let obj2:{nombre:string,edad:number};
obj2 = {nombre:"Luis",edad:23};

/**
 * Array
 * 
 * Array<tipo>
 * tipo[]
 *  
 * */

let cursos:string[];
cursos = ["Javascript","Typescript"];
//cursos = [1,"Typescript"];

let nombres:Array<string>;
nombres = ["Luis","Maria"];

let arreglo:any[] = [2,"cadena",true];

/**
 * Tuplas
 * 
 *  Permite definir un arreglo con un numero fijo de elementos y tipos de datos
 *  
 * */

let info:[string,number,boolean];
info = ["Luis",23,true];


let curso:[string,number];
curso = ["Typescript",63];

let nuevosInscritos:[string,number][] = [["Luis",23],["Maria",25]];

/**
 * Enumerados
 *  
 * Permiten definir un conjunto de constantes con nombre
 *  
 * */

enum Dias{
  Lunes,
  Martes,
  Miercoles,
  Jueves,
  Viernes
}

console.log(Dias);

enum FinSemana{
  Sabado = "Sabado",
  Domingo = "Domingo"
}

console.log(FinSemana);

// Imprimir todos los valores del enumerado Días usando un ciclo

for (let key in Dias) {
  console.log(key);
}

for (let key in FinSemana) {
  console.log(key);
}



/**
 * Unión de tipos, alias y tipos literales
 * 
 * Unión de tipos
 */

let cursoNuevo:string | number;
cursoNuevo = "Javascript";
cursoNuevo = 2;

function getCurso():string | number{
  return "Javascript";
}

/**
 * Alias
 *  
 * Permite crear un alias como nuevo nombre para un tipo
 *  
 * */

type Curso = string | number;

let cursoNuevo2:Curso;
cursoNuevo2 = "Javascript";
cursoNuevo2 = 2;

/**
 * Tipos literales
 * 
 * Permite definir un conjunto de valores como tipo
 * 
 * */

type DiasSemana = "Lunes" | "Martes" | "Miercoles" | "Jueves" | "Viernes";

let primerDia:DiasSemana;
primerDia = "Lunes";
//primerDia = "Martes";

/**
 * Aserciones de tipo
 * 
 * Permite al compilador de typescript que una variable sea de un tipo especifico
 *  
 * */

let codigoCurso:any;
codigoCurso = 100;

let numeroCurso:number = <number>codigoCurso;
console.log(numeroCurso);

let estudiante:any = {};
estudiante.nombre = "Luis";

type Estudiante = {nombre:string,edad:number};

let estudiante2 = <Estudiante>{};
estudiante2.nombre = "Maria";
estudiante2.edad = 23;

console.log(estudiante2);

/**
 * Funciones en Typescript
 * 
 * Parámetros opcionales
 *  
 * */

function nombreCompleto(nombre:string,apellido:string,edad?:number):string{
  if(edad){
    return `${nombre} ${apellido} ${edad}`;
  }else{
    return `${nombre} ${apellido}`;
  }
}

let nombre = nombreCompleto("Luis","Aviles");

console.log(nombre);

/**
 * Parámetros Restantes
 * 
 *  Permite pasar un numero indefinido de parámetros a una función y ser tratados como un arreglo
 *  
 * */
 
function nombreCompleto2(nombre:string,apellido:string,...restParametros:string[]):string{
  return `${nombre} ${apellido} ${restParametros.join(" ")}`;
}

let superman = nombreCompleto2("Clark","Joseph","Kent","USA");

console.log(superman);

/**
 * Tipo función
 * 
 * Permite definir la estructura de una función
 * 
 * */

type sumaParameter = (a:number,b:number) => number;

let suma2:sumaParameter;

function sumar(a:number,b:number):number{
  return a+b;
}

suma2 = sumar;

console.log(suma2(2,3));


/**
 * Tipo función
 * 
 * Permite definir la estructura de una función
 * 
 *  */

type StringOrNumber = string | number;
type conversion = (x: StringOrNumber) => number;

function procesarDatos(data: StringOrNumber, funcion: conversion): void {
  console.log(funcion(data));
}

// Call procesarDatos with a string and a function to get its length
procesarDatos("Luis", (x) => typeof x === 'string' ? x.length : 0); // Output: 4

// Call procesarDatos with a number and a function to add 100
procesarDatos(100, (x) => typeof x === 'number' ? x + 100 : 0);



/**
 * Desestructuración de objetos y arreglos
 */

let curso3 = {
  nombreCurso:"Typescript",
  identificador:200
}

let {nombreCurso,identificador} = curso3;

console.log(nombreCurso,identificador);

let cursos3:string[] = ["Javascript","Typescript"];

let [curso1,curso2] = cursos3;

console.log(curso1,curso2);

/**
 * Funciones flecha
 * 
 *  
 */

let miFuncion = function(a:string){
  return a.toUpperCase();
}

const miFuncionF = (a:string) => a.toUpperCase();

console.log(miFuncion("Normal"));
console.log(miFuncionF("Flecha"));


let sumar3 = function(a:number,b:number){
  return a+b;
}

const sumarF = (a:number,b:number) => a+b;

console.log(sumar3(2,3));

console.log(sumarF(2,3));

/**
 * 
 * Interfaces
 * 
 * Una interfaz es un conjunto de propiedades y métodos que describen un objeto
 * se usa para definir la forma exacta de un objeto
 * y es una forma poderosa de definir contratos tanto para tu proyecto, como para el código externo
 * 
 */

interface Curso2{
  nombre:string;
  identificador:number;
}

let cursoTypeScript:Curso2 = {
  nombre:"Typescript",
  identificador:200
}

console.log(cursoTypeScript);

interface Curso3{
  readonly nombre:string;
  identificador:number;
}

let cursoTypeScript2:Curso3 = {
  nombre:"Typescript",
  identificador:200
}

//cursoTypeScript2.nombre = "Javascript";

console.log(cursoTypeScript2);

interface Curso4{
  nombre:string;
  identificador:number;
  costo?:number;
}

let cursoTypeScript3:Curso4 = {
  nombre:"Typescript",
  identificador:200,
  costo:100
}

console.log(cursoTypeScript3);

interface Curso5{
  nombre:string;
  identificador:number;
  costo?:number;
  [propiedad:string]:any;
}

let cursoTypeScript4:Curso5 = {
  nombre:"Typescript",
  identificador:200,
  costo:100,
  descripcion:"Curso de Typescript",
  nuevo:true,
  otro:"valor"
}

console.log(cursoTypeScript4);

interface Curso6{
  nombre:string;
  identificador:number;
  costo?:number;
  [propiedad:string]:any;
  getNombre?():string;
}

let cursoTypeScript5:Curso6 = {
  nombre:"Typescript",
  identificador:200,
  costo:100,
  descripcion:"Curso de Typescript",
  nuevo:true,
  otro:"valor",
  getNombre(){
    return this.nombre;
  }
}

console.log(cursoTypeScript5.getNombre?.());

/**
 * Programación funcional
 * 
 * Es un paradigma de programación que trata a la computación como una evaluación de funciones matemáticas
 * se basa en el uso de funciones puras, evitando el uso de estados o datos mutables
 * tiene la ventaja de que es más declarativo, conciso y fácil de leer
 * 
 * Se prefiere el uso de funciones puras, funciones que no modifican el estado de las variables
 * 
 */

/**
 * Funciones puras
 * 
 */

let numero = 10;
let numero2 = 5;

function multiplicar(a:number,b:number):number{
  return a*b;
}

console.log(multiplicar(numero,numero2));

/**
 * Funciones impuras
 * 
 *  Modifican el estado de las variables
 *   
 * */

let resultado:number = 0;

function multiplicar2(a:number,b:number):number{
  resultado = a*b;
  return resultado;
}

console.log(multiplicar2(2,3));
console.log(resultado);

/**
 * Inmutabilidad
 * 
 * Es la incapacidad de cambiar el valor de una variable
 *  
 * */

//Ejemplo de inmutabilidad

let curso6 = {
  nombre:"Typescript",
  identificador:200
}

let nuevoCurso = Object.freeze(curso6);

//nuevoCurso.nombre = "Javascript";

console.log(nuevoCurso);

/**
 * Funciones de primera clase
 * 
 * Las funciones son tratadas como cualquier otra variable
 *  
 * */

function restar(a:number,b:number):number{
  return a-b;
}

let restar2 = restar;

console.log(restar2(2,3));

/**
 * Funciones de orden superior
 * 
 * Son funciones que reciben como parámetro otra función
 * 
 * */

function calculadora(a:number,b:number,operacion:(x:number,y:number)=>number):number{
  return operacion(a,b);
}

console.log(calculadora(2,3,restar));

//Using an arrow function

console.log(calculadora(2,3,(x,y)=>x+y));


/**
 * Generics
 * 
 * Son plantillas de código que permiten la reutilización de código
 * se utilizan para crear componentes que trabajan con una variedad de tipos de datos
 * 
 */

// Sin generics

function identity(arg: number): number {
  return arg;
}

// Con generics

function identity2<Type>(arg: Type): Type {

  console.log(arg);
  return arg;
}

// los <> indican que es un generic y Type es el nombre del generic
// cuando se llama a la función se debe especificar el tipo de dato que se va a usar
// el generic se puede llamar como sea, pero es recomendable usar Type
// el generic se puede usar en los parámetros y en el tipo de retorno
// el generic se puede usar en el cuerpo de la función
// el generic se puede usar en interfaces, clases, etc

let salida= identity2<string>("Hola mundo");
let salida2= identity2<number>(100);
let salida3= identity2<boolean>(true);
let salida4= identity2<number[]>([1,2,3,4,5]);
let salida5= identity2<string[]>(["a","b","c","d","e"]);
let salida6= identity2<number|string>(100);
let salida7= identity2<number|string>("Hola mundo");
let salida8= identity2<{nombre:string, apellido:string}>({nombre:"Juan", apellido:"Perez"});

// Usando type inference

let salida9= identity2("Hola mundo");
let salida10= identity2(100);

// Restricciones en los generics

interface Lengthwise {
  length: number;
}
 
function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}

//loggingIdentity(3);  // Error, number doesn't have a .length property
loggingIdentity({length: 10, value: 3});
loggingIdentity("Hola mundo");

// Varios tipos de generics

function identity3<T,S>(arg: T,arg2:S): T {
  console.log(arg);
  console.log(arg2);
  return arg;
} 

let salida11= identity3<string,number>("Hola mundo",100);


/**
 * Promesas
 * 
 * Es un objeto que representa la terminación o el fracaso de una operación asíncrona
 *  
 */

// Ejemplo de promesa

let promesa = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("Se terminó el timeout");
  },1000);
}
);

promesa.then((mensaje)=>{
  console.log(mensaje);
}

);

// async await

//Conectarse a una API

function conectarAPI(){
  //Retornar una promesa
  return fetch("https://jsonplaceholder.typicode.com/todos/1");
}

async function obtenerDatos(){

  //Esperar a que la promesa se resuelva
  let respuesta = await conectarAPI();
  let datos = await respuesta.json();
  console.log(datos);
}

obtenerDatos();