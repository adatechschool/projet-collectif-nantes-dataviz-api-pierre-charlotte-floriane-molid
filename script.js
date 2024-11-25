
async function recupApi() { 
    const reponse = await fetch("https://pokeapi.co/api/v2/pokemon/")
    const recuperation = await reponse.json();
    console.log(recuperation)
    console.log(recuperation.results)
    
    let affichageAPI = document.querySelector('h1')
      for(let i=0; i< results.lenght; i++ ){
    console.log(results[i])
    affichageAPI.innerHTML += `<h1>${results[i].name}</h1>`

      }
}
recupApi()