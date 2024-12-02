const searchBar = document.getElementById("search-bar");
const liveOutput = document.getElementById("live-output");
const searchButton = document.getElementById("search-button");

/*searchBar.addEventListener("input", () => {
  
  liveOutput.textContent = searchBar.value || "rien encore";

})*/

document.getElementById('search-button').onclick = function () {
    // Effectuer une requête fetch
    fetch('https://tyradex.vercel.app/api/v1/pokemon')
      .then(response => response.json())
      .then(data => { 

        for (let i = 0; i < data.length; i++) {
             const balise = document.querySelector('#type-container')
             const balise2 = document.querySelector("search-bar")
             let type = document.createElement('p')
          
             let images =document.getElementById("image")
             let resultat = document.getElementById("details")
             // type.innerText = `${data[i].name.fr}`
            
             balise.appendChild(type)
              console.log(data[i].name.fr)
              // console.log(recuperation2.pokemons[i].pokedex_id)
              console.log(data[i].name.fr)

              if(searchBar.value != data[i].name.fr){
                data[i].name.fr++
                  console.log("false")
                } else {
                console.log("true") 
                resultat.innerHTML = data[i].name.fr;
                images.innerHTML = `<img src="${data[i].sprites.regular}" alt="${data[i].sprites.regular}"/>`
               
                balise.appendChild(images)
                
                
                return data[i].name.fr
  
              }
                 
                 /* if (data.data[i].images && data.data[i].images.small) {
                
              } else {
                  affichageImage.innerHTML += `<img>Image non disponible</img>`;
              }
            }*/
        
      }})}




















/*async function recupApi2() {
    const responses = await fetch ("https://api.pokemontcg.io/v2/cards")
    const recuperation2 = await responses.json()
    let affichageName = document.querySelector('p')
    let affichageImage = document.querySelector('p')
    console.log(recuperation2)
 
    for(let i=0; i < recuperation2.data.length; i++){
        console.log(recuperation2.data[i].name)
        let names = [recuperation2.data[i].name]
        let images = recuperation2.data[i].images.small
       affichageName.innerHTML += `<main>${names}</main>`
       

        if(searchBar===names[i]){
        console.log("true")
       } else {
        console.log("faux")
       }
       
    }
    }
recupApi2() */















/*document.getElementById('Name').textContent = function() {
    // Effectuer une requête fetch

    fetch("https://api.pokemontcg.io/v2/cards")
      .then(response => response.json())
      .then(data => {
        // Sélectionner un message spécifique
        const  = data[0].images; // Première citation
       console.log(quote)
        
        // Afficher le message dans l'élément avec l'ID 'message'
        document.getElementById('message').innerHTML = quote;
      })
      .catch(error => console.error('Erreur lors de la requête :', error));
  }; */ 