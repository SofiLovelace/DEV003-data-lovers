const dataManagement = {
  
  /************ Comenzamos con una funcion de busqueda por nombre, si el usuario no ha ingresado nombre se muestran todos */
  searchData:function(data, searchedName){
    const dataSought = [];
    //let dataImgUrl
    Object.entries(data).forEach (function (cadaArray) {  //usamos forEach para iterar cada arreglo, buscamos en cada arreglo los datos que coincidan con la busqueda
      const clave = cadaArray[0].toUpperCase(); //convertimos a mayusculas para no tener problema
      const valor = cadaArray[1];
      if (clave.indexOf(searchedName.toUpperCase(), 0) === 0){ // si el indece es diferente a -1, ese es nuestra data buscada
      //if (clave.includes(inputUser, )) {  // si dentro del string esta lo buscado devuelve true
        dataSought.push(valor);  // concatenamos dentro del array todos los valores que puedan coincidir 
      }
    } ) 
    return dataSought ; //devolvemos la data con los nombres encontrados
  },
  /***********funcion de filtrado******/
  filterData:function(data, type) {
    if (type === ""){
      return data
    } else {
      const arrayFiltredOut = data.filter(function(element){
        element.tags.forEach(function(elementTags, index){//iteramos en cada elemento de tags para convertirlo a mayusculas
          element.tags.splice(index, 1, elementTags.toUpperCase());
        })
        return element.tags[0] === type.toUpperCase() || element.tags[1] === type.toUpperCase() || element.tags[2] === type.toUpperCase();
      })
      return arrayFiltredOut;
    }
    
  }
}
export default dataManagement;

/*****Object.entries*****//****con forEach****/
//console.log(Object.entries(data.data)); // Devuelve un array de arrays, con propiedad y valor en cada array