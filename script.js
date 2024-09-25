


const getPoke = async() => {
const pokeAll = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151%27')
const pokeArray = pokeAll.data.results
console.log(pokeArray)
}

getPoke()


const searchBar = document.querySelector('#inputBar')
const button = document.querySelector('#searchButton')
const nameContainer = document.querySelector('#pokemonName')
const imageContainer = document.querySelector('#pokemonImage')






button.addEventListener('click', async () => {
    let name = searchBar.value
    let response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
)
console.log(response.data)
    let pokeName = response.data.name
    nameContainer.textContent =(pokeName)
    
    let pokeImage = response.data.sprites.front_default
    imageContainer.setAttribute ('src', pokeImage)
})










// let button = document.querySelector("#searchButton")

// button.addEventListener('click', async () => {

//     let pokemonName = document.querySelector("#pokemonName")
//     let pokemonImage = document.querySelector("#pokemonImage")
// css tips like the circle, hover opactiy came from w3 schools 
//     //where does this need to be scoped?