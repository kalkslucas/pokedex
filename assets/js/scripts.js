/*Variáveis*/
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`//Link da API buscando pokemons até o limite definido
let pokemonsList = document.querySelector("#pokemons-list")

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

fetch(url)//Função FETCH API
  .then((res) => res.json())//Resposta do Fetch API em cima da URL do Pokeapi
  .then((jsonBody) => jsonBody.results)//Conversão do responseBody para json
  
  .then((pokemonJsonBody = []) => {//Lista de pokemon trazido pelo responseBody
    //console.log(pokemonJsonBody);
    
    pokemonsList.innerHTML += pokemonJsonBody.map(convertPokemonToLi).join('')//Para imprimir a lista de pokemom em HTML, a função map pegará o jsonBody, mapeará o valor com base na função da formatação Li e fará a junção sem nenhum separador
  
    //const listItems = [] //Array com a lista de itens "Pokemon"
    //for (let i = 0;i < pokemonJsonBody.length; i++){//Varredura do Body
    //  const pokemon = pokemonJsonBody[i]
    //  listItems.push(convertPokemonToLi(pokemon)) //Acrescenta cada pokemom retornado no array
    //}
    //pokemonsList.innerHTML += listItems//Criação dos elementos HTML sobre cada array dentro do body
  })
  .catch((err) => console.log(err))
  .finally(() => console.log("Requisição concluída!"))