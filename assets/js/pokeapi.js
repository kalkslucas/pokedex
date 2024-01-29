const pokeApi = {}

pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
          .then((response) => response.json())//Transformando a lista recebida para novas requisições para os detalhes de cada pokemon em JSON
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`//Link da API buscando pokemons até o limite definido

  return fetch(url)//Função FETCH API
  .then((res) => res.json())//Resposta do Fetch API em cima da URL do Pokeapi em Json
  .then((jsonBody) => jsonBody.results)//Resultado da lista JSON
  .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))//Mapeamento da lista de pokemons por requisição, buscando detalhes dos pokemons 
  .then((detailRequests) => Promise.all(detailRequests))//Retorno de todos os detalhes dos pokemons via requisição
  .then((pokemonsDetails) => (pokemonsDetails))
}