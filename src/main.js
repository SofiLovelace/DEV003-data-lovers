import dataManagement from './data.js';
import data from './data/lol/lol.js';
const firstDataSet = JSON.parse(JSON.stringify(data.data));  /// creamos una primer copia profunda con un metodo de serialización, convertimos a array convertimos a objeto de vuelta pra romper la referencia
//Almaceno en constante el main//contenedor principal
//const containerMainCards = document.querySelector("#champions-list1");
const containerMainGlobal = document.querySelector("main");

/********************* *****************/
/*****Volver a la pagina principal******/
function createIndex() { //creamos la funcion para volver a la pagina principal
  containerMainGlobal.innerHTML = "" //para que cada que la llamemos el contenedor este vacio
  containerMainGlobal.setAttribute("id", "champions-list");

  const divVideo1 = document.createElement("div");
  divVideo1.setAttribute("id", "video-1");
  divVideo1.innerHTML = `
  <video width="100%" height="100%" loop="true" muted autoplay> 
      <source src="./videos/Fondo-lol.webm" type="video/webm">
  </video>
  `

  const divVideo2 = document.createElement("div");
  divVideo2.setAttribute("id", "video-2")
  divVideo2.innerHTML =`
  <video width="100%" height="100%" loop="true" muted autoplay> 
      <source src="./videos/frontal-lol.webm" type="video/webm">
      </video>
  `

  containerMainGlobal.appendChild(divVideo1); // agregamos los elementos al main
  containerMainGlobal.appendChild(divVideo2); // agregamos los elementos al main
}

const lolImg = document.querySelector("#LOLimg");
lolImg.addEventListener("click", function(){
  createIndex()
})


/******funcion para crear tarjetas******/
function createCards (data){
  containerMainGlobal.innerHTML = "" //para que cada que la llamemos el contenedor este vacio
  containerMainGlobal.setAttribute("id", "champions-list1")
  containerMainGlobal.innerHTML = `
  <div id="sort-calcule">
    <div id="containerSort"">
      <div id="attack">
        <select name="orderBy" id="orderBy">
          <option value ="attack" id="attack" selected>Ataque</option>
          <option value ="defense" id="defense">Defensa</option>
          <option value ="difficulty" id="difficulty">Dificultad</option>
          <option value ="magic" id="magic">Magia</option>
        </select>
        <div id="more-less">
          <div id="more" class="orderAsDs">
            Mayor
          </div>
          <div id="less" class="orderAsDs">
            Menor
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="containerCards">
  
  </div>
  `
  const containerCards = document.querySelector("#containerCards");
  data.forEach(function(eachObject){
    const card = document.createElement("div"); //creamos un div por cada objeto
    card.className = "card"; //asignamos clase a cada div que creemos
    card.setAttribute("id", eachObject.name);
    /*introducimos la data y elementos que tendra cada div*/
    card.innerHTML = `
    <div id="image-card">
        <img src="${eachObject.splash}" alt="Imagen ${eachObject.id}" width="100%" height="100%">
    </div>
    <div id="name-card" class="data-card">
        ${eachObject.name}
    </div>
    <div id="attack-card"  class="data-card">
        Ataque:   ${eachObject.info.attack}
    </div>
    <div id="defense-card"  class="data-card">
        Defensa:   ${eachObject.info.defense}
    </div>
    <div id="magic-card" class="data-card">
        Magia:   ${eachObject.info.magic}
    </div>
    <div id="difficulty-card" class="data-card">
        Difficultad:   ${eachObject.info.difficulty}
    </div>
  `
    containerCards.appendChild(card); // agregamos cada elemento creado al contenedor de las tarjetas
  })
  activeSort(data);
}

/*creamos la funcion que paso los parametro para sort*/
function activeSort(data){
  const inputSort = document.querySelectorAll(".orderAsDs");
  inputSort.forEach(function(element){
    element.addEventListener("click", function(){      //dataManagement.sortData(data, element.getAttribute("ïd"));
      const valueSelect = document.querySelector("#orderBy")
      dataManagement.sortData(data, element.getAttribute("id"), valueSelect.value);
      createCards(data);
    })
  })
}

//Llamo a searchData y la almaceno en constante dentro de función
function searchSelected(inputName, inputType){
  const  searchedName = dataManagement.searchData(firstDataSet, inputName);
  //Llamo a filterData y la almaceno en constante
  const filteredOut = dataManagement.filterData(searchedName, inputType);  //dataManagement.sortData(filteredOut, "name");
  createCards(filteredOut);
}

//Agrego un addEventListener a botonoes de filtrado
const buttonsNav = document.querySelectorAll(".nav");
console.log(buttonsNav);
buttonsNav.forEach(function(element){
  element.addEventListener("click", function(){
    const inputValue = document.querySelector("#input").value; //Almaceno en constante el valor de input
    searchSelected(inputValue, element.getAttribute("id"));
  })
})

