const pokeApi = {};

function convertPokeApiDetailToPokemon(pokeDetail) {
  const pokemon = new Pokemon();
  pokemon.name = pokeDetail.name;
  pokemon.order = pokeDetail.order;

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
  const type = types[0];

  pokemon.types = types;
  pokemon.mainType = type;

  pokemon.sprite = pokeDetail.sprites.other.dream_world.front_default;

  return pokemon;
}

pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
    .then((response) => response.json()) //Transformando a lista recebida para novas requisições para os detalhes de cada pokemon em JSON
    .then(convertPokeApiDetailToPokemon);
};

pokeApi.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`; //Link da API buscando pokemons até o limite definido

  return fetch(url) //Função FETCH API
    .then((res) => res.json()) //Resposta do Fetch API em cima da URL do Pokeapi em Json
    .then((jsonBody) => jsonBody.results) //Resultado da lista de pokemons em JSON
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) //Mapeamento da lista de pokemons por requisição, buscando detalhes dos pokemons
    .then((detailRequests) => Promise.all(detailRequests)) //Requisitando todas as URLs dos pokemons da lista
    .then((pokemonsDetails) => pokemonsDetails); //Retorno de todos os detalhes dos pokemons via requisição
};
