async function recupApi() { 
    const reponse = await fetch("https://pokeapi.co/api/v2/pokemon")
    const recuperation = await reponse.json();
    console.log(recuperation)
    const affichage = document.querySelector('h1')
    for(let i=0; i< recuperation.results.length; i++ ) {
    affichage.innerHTML += `<h1>${recuperation.results[i].name}</h1>`
    console.log(recuperation.results[i].name)
    }
}

recupApi()