import {dirname} from 'path';
import {fileURLToPath} from 'url';
import {ProductManager} from "./ProductManager.js";
import { CartManager } from './cartManager.js';
import { mesageManager } from './mesageManager.js';


export const __dirname= dirname(fileURLToPath(import.meta.url));


export function prodManager (){
    const manager = new ProductManager("./productos.json")
    return manager
}

export function cManager(){
    const manager =new CartManager("./carrito.json")
    return manager
}

export function msjManager(){
    const manager =new mesageManager("./mesage.json")
    return manager
}