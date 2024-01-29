function convertPokemonTypesToLi(pokemonTypes) {
  return pokemonTypes.map((typeSlot) => {`<li class="type-item">${typeSlot.type.name}</li>`})
}

function convertPokemonToLi(pokemon) {
  return `
  <li class="pokemon-item">
    <span class="number">#${pokemon.order}</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
      <ul class="types">
        ${convertPokemonTypesToLi(pokemon.type.name)}
      </ul>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
    </div>
  </li>
  `
}

const pokemonsList = document.querySelector("#pokemons-list")

pokeApi.getPokemons().then((pokemonJsonBody = []) => {//Lista de pokemon trazido pelo responseBody
    console.log(pokemonJsonBody);
    pokemonsList.innerHTML += pokemonJsonBody.map(convertPokemonToLi).join('')//Para imprimir a lista de pokemom em HTML, a função map pegará o jsonBody, mapeará o valor com base na função da formatação Li e fará a junção sem nenhum separador
  })
  .catch((err) => console.log(err))
  .finally(() => console.log("Requisição concluída!"))
