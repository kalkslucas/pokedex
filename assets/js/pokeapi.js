const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`//Link da API buscando pokemons até o limite definido

  return fetch(url)//Função FETCH API
  .then((res) => res.json())//Resposta do Fetch API em cima da URL do Pokeapi
  .then((jsonBody) => jsonBody.results)//Conversão do responseBody para json
  .then((pokemons) => pokemons.map((pokemon) => fetch(pokemon.url)
                                                .then((response) => response.json())))//Transformando a lista recebida para novas requisições para os detalhes de cada pokemon
  .then((detailRequests) => Promise.all(detailRequests))//Retorno dos detalhes dos pokemons via requisição
  .then((pokemonsDetails) => {console.log(pokemonsDetails)})
}