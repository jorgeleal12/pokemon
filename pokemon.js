

function pokemon() {
  cargarPokemons();
}


document.addEventListener("DOMContentLoaded", pokemon);// carga el doumento

const cargarPokemons = async () => {
  const pokemonInfoContainer = document.getElementById("card-container");

  const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon");

  if (respuesta.status == 200) {
    const datos = await respuesta.json();

    console.log(datos)
    datos.results.forEach((pokemon) => {

      const pokemonIndex = pokemon.url.split('/')[pokemon.url.split('/').length - 2]
   
      const pokemonCard = document.createElement("div");
      pokemonCard.className = "card";
      
      const image=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`

      const pokemonImage = document.createElement("img");
      pokemonImage.src = image;

      const pokemonName = document.createElement("h2");
      pokemonName.textContent = pokemon.name;
      
      
      pokemonCard.appendChild(pokemonImage);
      pokemonCard.appendChild(pokemonName);
      pokemonInfoContainer.appendChild(pokemonCard);
    });
  }
  if(respuesta.status == 500){
    console.log("error")
  }
};


// function typePokemon(pokemonTypeHtml, type) {
//   if (type[0] == "grass") {
//     pokemonTypeHtml.className = "grass";
//   }

//   if (type[0] == "poison") {
//     pokemonTypeHtml.className = "poison";
//   }
// }

// const pokemonIndex = datos.url.split('/')[datos.url.split('/').length - 2]

  
      // const pokemonImage = document.createElement("img");
      // pokemonImage.src = pokemon.image;
  
      // const pokemonName = document.createElement("h2");
      // pokemonName.textContent = pokemon.name;
  
      // const Type = document.createElement("span");
      // Type.textContent = `type:`;
      // const pokemonType1 = document.createElement("span");
      // const pokemonType2 = document.createElement("span");
  
      // const type = pokemon.type.split(",");
      // pokemonType1.textContent = ` ${type[0]}`;
  
      // if (type.length == 1) {
      //   pokemonType1.textContent = ` ${type[0]}`;
      //   pokemonType1.className = type[0];
      // } else {
      //   pokemonType1.textContent = ` ${type[0]}`;
      //   pokemonType1.className = type[0];
      //   pokemonType2.textContent = ` ${type[1]}`;
      //   pokemonType2.className = type[1];
      // }
  
      // pokemonCard.appendChild(pokemonImage);
      // pokemonCard.appendChild(pokemonName);
      // pokemonCard.appendChild(Type);
      // pokemonCard.appendChild(pokemonType1);
      // pokemonCard.appendChild(pokemonType2);