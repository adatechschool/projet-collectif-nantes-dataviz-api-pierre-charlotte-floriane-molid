async function recupApi() { 
    const reponse = await fetch("https://pokeapi.co/api/v2/evolution-chain/")

    const recuperation = await reponse.json()
    console.log(recuperation)

    const divEvolution = document.querySelector("#evolution")
}
recupApi()
