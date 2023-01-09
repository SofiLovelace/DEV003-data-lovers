const dataManagement = {
  
  /************ Comenzamos con una funcion de busqueda por nombre, si el usuario no ha ingresado nombre se muestran todos */
  searchData:function(data, searchedName){
    const dataSought = [];
    //let dataImgUrl
    Object.entries(data).forEach (function (cadaArray) {  //usamos forEach para iterar cada arreglo, buscamos en cada arreglo los datos que coincidan con la busqueda
      const clave = cadaArray[0].toUpperCase(); //convertimos a mayusculas para no tener problema
      const valor = cadaArray[1];
      if (clave.indexOf(searchedName, 0) === 0){ // si el indece es diferente a -1, ese es nuestra data buscada
      //if (clave.includes(inputUser, )) {  // si dentro del string esta lo buscado devuelve true
        dataSought.push(valor);  // concatenamos dentro del array todos los valores que puedan coincidir 
      }
    } ) 
    return dataSought ; //devolvemos la data con los nombres encontrados
    /*****Object.entries*****//****con filter****/
    /*************Averuguar por que filer no funciona con indexOf********
    const dataEntries = Object.entries(data).filter(function searchUser (cadaArray) {
      return cadaArray 
    })
    console.log(dataEntries); */
  },
  filterData:function(data, type) {
    const arrayFiltredOut = data.filter(function(element){
      return element.tags[0] === type || element.tags[1] === type;
    })
    return arrayFiltredOut;
  }
}
export default dataManagement;

/*****Object.entries*****//****con forEach****/
//console.log(Object.entries(data.data)); // Devuelve un array de arrays, con propiedad y valor en cada array