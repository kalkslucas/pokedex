const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

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
  .then((res) => res.json())
  .then((jsonBody) => jsonBody.results)
  .then((pokemonList) => {
    console.log(pokemonList);
    for (let i = 0;i < pokemonList.length; i++){
      const pokemon = pokemonList[i]
      convertPokemonToLi(pokemon)
    }
  })
  .catch((err) => console.log(err))
  .finally(() => console.log("Requisição concluída!"))