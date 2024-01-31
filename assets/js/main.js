const pokemonsList = document.querySelector("#pokemons-list");
const loadMoreButton = document.querySelector("#loadMoreButton");
const limit = 10;
let offset = 0;

function loadPokemonItens(offset, limit) {
  pokeApi
    .getPokemons(offset, limit)
    .then((pokemonJsonBody = []) => {
      //Lista de pokemon trazido pelo responseBody
      const newHtml = pokemonJsonBody
        .map(
          (pokemon) => `
      <li class="pokemon-item ${pokemon.mainType}">
        <span class="number">#${pokemon.order}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
          <ol class="types">
            ${pokemon.types
              .map((type) => `<li class="type-item">${type}</li>`)
              .join("")}
          </ol>
          <img src="${pokemon.sprite}" alt="${pokemon.name}">
        </div>
      </li>
      `
        )
        .join("");

      pokemonsList.innerHTML += newHtml; //Para imprimir a lista de pokemom em HTML, a função map pegará o jsonBody, mapeará o valor com base na função da formatação Li e fará a junção sem nenhum separador
    })
    .catch((err) => console.log(err))
    .finally(() => console.log("Requisição concluída!"));
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener("click", () => {
  offset += limit;
  loadPokemonItens(offset, limit);
});
