async function recupApi() {
    const reponse = await fetch("https://tyradex.vercel.app/api/v1/types");
    const recuperation = await reponse.json();
  
    //console.log(recuperation[0].name.fr)
  
    for (let i = 0; i < recuperation.length; i++) {
      const balise = document.querySelector('#type-container')
      let type = document.createElement('button')
      type.setAttribute('id', `${recuperation[i].name.fr}`)
      type.classList.add('type-button')
  
      type.innerText = `${recuperation[i].name.fr}`
      balise.appendChild(type)
  
      type.addEventListener("click", async () => {
          const reponse2 = await fetch(`https://tyradex.vercel.app/api/v1/types/${recuperation[i].name.fr}`)
          const recuperation2 = await reponse2.json() 
          // console.log(recuperation2)
          console.log(recuperation2.pokemons[i].pokedex_id)
          const balise2 = document.getElementById('type-liste-container')
          balise2.innerHTML = "" // on vide
    
          // Créer un conteneur grid pour les Pokémon
          const pokemonGrid = document.createElement('div');
          pokemonGrid.classList.add('pokemon-grid');
    
          for (let i = 0; i < recuperation2.pokemons.length; i++) {
            // Créer un élément de grille pour chaque Pokémon
            const pokemonGridItem = document.createElement('div');
            pokemonGridItem.classList.add('pokemon-grid-item');
           // Id du Pokemon 
           let identifiant = document.createElement('button')

            // Nom du Pokémon
            let nomPokemon = document.createElement('div');
            nomPokemon.textContent = recuperation2.pokemons[i].name.fr;
    
            // Image du Pokémon
            const img = document.createElement('img');
            img.src = recuperation2.pokemons[i].sprites.regular;
            img.alt = recuperation2.pokemons[i].name.fr;
    
            // Ajouter le nom et l'image à l'élément de grille
            pokemonGridItem.appendChild(nomPokemon);
            pokemonGridItem.appendChild(img);
            pokemonGridItem.appendChild(identifiant)
    
            // Ajouter l'élément à la grille
            pokemonGrid.appendChild(pokemonGridItem);

             balise2.appendChild(pokemonGrid);  // Ajouter la grille à la balise2
            

        
          identifiant.addEventListener("click", async () => {
            let reponse3 = await fetch(`https://tyradex.vercel.app/api/v1/pokemon/${recuperation2.pokemons[i].pokedex_id}`)
            const recuperation3 = await reponse3.json() 
            console.log(recuperation3.name.fr)
         balise2.textContent=""
         // const balise3 = document.getElementById('DetailsConteneur')
         // details.textContent += `${recuperation3.name.fr}`
        // details.textContent += `${recuperation3.pokemons[i].sprites.regular}`
        
        let details = document.getElementById("details")
        details.innerHTML += `  
        <section  >
            <p class="Nom">${recuperation3.name.fr}</p>
            <img class="image" src ="${recuperation3.sprites.regular}"/>
            </section>` 

            balise2.appendChild(details)
            for(let i = 0; i<recuperation3.length; i++){
                let details2 = document.getElementById("details2")
                
            }
      })
          }

        }) 
       
    }
}
    recupApi()

   /* document.getElementById('getMessage').onclick = function() {
        // Effectuer une requête fetch
    
        fetch("https://tyradex.vercel.app/api/v1/pokemon")
          .then(responseX => responseX.json())
          .then(dataX => {
            // Sélectionner un message spécifique
            // const donnee = dataX[0].text; // Première citation
           console.log(dataX[0].pokedex_id)
            
            // Afficher le message dans l'élément avec l'ID 'message'
           //  document.getElementById('type-container').innerHTML = donnee;
          })
          .catch(error => console.error('Erreur lors de la requête :', error));
      };*/
    
