// Path: export.ts
//Manejo de exportaciones

//Exportar variables
export const PI = Math.PI;
export let usuario = "Juan";

//Exportar funciones
export function sumar(a: number, b: number): number {
    return a + b;
    }

export function restar(a: number, b: number): number {
    return a - b;
    }


export let saludar = (): string => "Hola";

export default saludar;

