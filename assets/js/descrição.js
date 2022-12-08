const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const maxRecords = 15;
const limit = 1
let offset = 0;




function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
        <h1 id="titlePokemon">${pokemon.name}</h1>
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name} </span>

             <div class="detail">  
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type${type}">${type}</li>`).join('')}
                </ol> 
                        
                <img src="${pokemon.photo}"
                    alt="${pokemon.name}">
            </div> 
        </li>
    `).join('')

        pokemonList.innerHTML += newHtml
    })
}