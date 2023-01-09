import dataManagement from './data.js';
import data from './data/lol/lol.js';
const firstDataSet = JSON.parse(JSON.stringify(data.data));  /// creamos una primer copia profunda con un metodo de serialización, convertimos a array convertimos a objeto de vuelta pra romper la referencia
//const inputUser = prompt("Ingresa el nombre del campeon").toUpperCase(); //convertimos a mayusculas para no tener problemas

////////////////////////////////////////
/**********ESTUDIANDO OBJETOS*********/
////////////////////////////////////////
// /*****Object.keys******/
// console.log(Object.keys(data.data)); // Obtenemos en un array todos las propiedades que contiene el objeto (si  alguna de las propiedades es un valor distinto a string tener cuidado ya que el array se desordena)
// console.log(Object.keys(data.data).length); // Al array obtenido le podemos aplicar el metodo .length y asi podemos saber cuantas propiedades tiene el objeto, incluso podemos iterar con for o mas metodos para arrays
// /*****Object.keys******/
// console.log(Object.values(data.data)); // Devuelve un array con los valores de cada propiedad del objeto, no devuelve los nombres de las propiedades. Una ventaja es que no hay parseo de datos a string, concatena en el array sin modificar el valor de cada elemento


/*Pasamos parametro para search data y almacenamos los valores encontrado en una constante */
const  searchedName = dataManagement.searchData(firstDataSet, "");
console.log(searchedName);
//pasamos parametros para filterData y almacenamos en variable
const filteredOut = dataManagement.filterData(searchedName, "Fighter");
console.log(filteredOut);