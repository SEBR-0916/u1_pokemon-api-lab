const button = document.querySelector("#btn")
const pokemonInput = document.querySelector('#searchBar')
const imageContainer = document.querySelector('#imgContainer')

const pokeName = document.querySelector('#name')
const pokeHeight = document.querySelector('#height')
const pokeWeight = document.querySelector('#weight')
const pokeTypes = document.querySelector('#type')
const flavorText = document.querySelector('#description')



// const getPokemon = async () => {
//     const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
//     console.log(pokemon.data)
// }
// getPokemon()

button.addEventListener('click', async () => {
    let pokemon = pokemonInput.value
    let response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    )
        let pokeImg = response.data.sprites.front_default

        imageContainer.setAttribute ('src', pokeImg)

        
        
        pokeName.textContent = `Name: ${response.data.name}`
        pokeHeight.textContent = `Height: ${response.data.height}`
        pokeWeight.textContent = `Weight: ${response.data.weight}`
        
        let typesArray = response.data.types
    pokeTypes.textContent = 'Type(s): '
    for(type of typesArray)
        pokeTypes.append(`${type.type.name} `)

    let speciesResponse = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemon}/`
    )
    console.log(speciesResponse)
    
    let flavorTextArray = speciesResponse.data.flavor_text_entries
    let flavorTextDescription = ""
    for (i=0; i<flavorTextArray.length; i++) {
        if (i === 1) {
            flavorTextDescription = flavorTextArray[i].flavor_text
        }
    }
    flavorText.innerText = flavorTextDescription
})


// let typesArray = response.data.types
//     pokeTypes.textContent = 'Type(s): '
//     for(type of typesArray)
//         pokeTypes.append(`${type.type.name} `)

//let pokeName = speciesResponse.data.namefinalName.innerText = `Type: ${name}`



// button.addEventListener('click', async () => {

//     let pokemonName = document.querySelector("#pokemonName")
//     let pokemonImage = document.querySelector("#pokemonImage")
//     //where does this need to be scoped?
//     let textInput = document.querySelector("#inputBar").value
        
// console.log('working')
//     //Axios call goes here
//     //remember to use Async and Await!
//     //DOM Setters go here

// }
// )
