function convertPokemonTypesToLi(pokemonTypes) {
  return pokemonTypes.map((typeSlot) => `<li class="type-item">${typeSlot.type.name}</li>`)
}

function convertPokemonToLi(pokemon) {
  return `
  <li class="pokemon-item">
    <span class="number">#${pokemon.order}</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
      <ol class="types">
        ${convertPokemonTypesToLi(pokemon.types).join('')}
      </ol>
      <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
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
