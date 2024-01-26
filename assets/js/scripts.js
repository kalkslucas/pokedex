/*Variáveis*/
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`//Link da API buscando pokemons até o limite definido
let pokemonsList = document.querySelector(".pokemons-list")

/*Função que cria o elemento LI dos pokemóns*/
function convertPokemonToLi(pokemon) {
  return `
  <li class="pokemon-item">
    <span class="number">#001</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
      <ul class="types">
        <li class="type-item">grass</li>
        <li class="type-item">poison</li>
      </ul>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
    </div>
  </li>
  `
}

fetch(url)
  .then((res) => res.json())//Resposta do Fetch API em cima da URL do Pokeapi
  .then((jsonBody) => jsonBody.results)//Conversão do responseBody para json
  .then((pokemonList) => {//Lista de pokemon trazido pelo responseBody
    console.log(pokemonList);
    for (let i = 0;i < pokemonList.length; i++){//Varredura do Body
      const pokemon = pokemonList[i]
      pokemonsList.innerHTML += convertPokemonToLi(pokemon)//Criação dos elementos HTML sobre cada array dentro do body
    }
  })
  .catch((err) => console.log(err))
  .finally(() => console.log("Requisição concluída!"))