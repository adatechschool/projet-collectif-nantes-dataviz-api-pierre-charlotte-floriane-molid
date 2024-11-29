const searchBar = document.querySelector(".search-bar"); // Sélectionner un élément unique

const liveOutput = document.getElementById("live-output");
let affichageValeur = document.querySelector("live-output");
let score;
// Ajouter un écouteur d'événement "input"
searchBar.addEventListener("input", () => {
liveOutput.innerHTML = `Vous avez tapé : ${searchBar.value}`;
console.log(searchBar.value)
});

document.getElementById('import').onclick = function () {
    // Effectuer une requête fetch
    fetch('https://api.pokemontcg.io/v2/cards')
      .then(response => response.json())
      .then(data => {
        // Recuperer les noms de Pokemon 
        for(let i=0; i < data.data.length; i++){
            let affichageImage = document.getElementsByClassName('Affichage-Image')
            let names = [data.data[i].name]
            let images = data.data[i].images.small
           console.log(names[0])
            // console.log("Voila" + searchBar.value)
              // Afficher les dans l'élément avec le main
              
            if((searchBar.value === names[0]) === false){
                names[0]++
                console.log("false")
              } else {
              console.log("true") 
              document.querySelector('main').innerHTML += names[0];
              affichageImage.innerHTML += `<img src="${images}" alt="${images}">`
              return names[0]

            }
               
               /*if (data.data[i].images && data.data[i].images.small) {
              
            } else {
                affichageImage.innerHTML += `<img>Image non disponible</img>`;
            }*/ 
              
            }
            
      })
      .catch(error => console.error('Erreur lors de la requête :', error));
  }; 

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