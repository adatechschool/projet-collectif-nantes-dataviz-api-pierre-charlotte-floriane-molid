
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

    const animation = document.querySelector(".pokeball-animated")

    type.addEventListener("click", async () => {
      
        const reponse2 = await fetch(`https://tyradex.vercel.app/api/v1/types/${recuperation[i].name.en}`)
        const recuperation2 = await reponse2.json() 
        console.log(recuperation2)

        animation.style.display ="none"
        
        const balise2 = document.getElementById('type-liste-container')
        balise2.innerHTML = "" // on vide
  
        // Créer un conteneur grid pour les Pokémon
        const pokemonGrid = document.createElement('div');
        pokemonGrid.classList.add('pokemon-grid');

        animation.style.display = "none"
  
        for (let i = 0; i < recuperation2.pokemons.length; i++) {
          // Créer un élément de grille pour chaque Pokémon
          const pokemonGridItem = document.createElement('div');
          pokemonGridItem.classList.add('pokemon-grid-item');
  
          // Nom du Pokémon
          const nomPokemon = document.createElement('h3');
          nomPokemon.textContent = recuperation2.pokemons[i].name.fr;
  
          // Image du Pokémon
          const img = document.createElement('img');
          img.src = recuperation2.pokemons[i].sprites.regular;
          img.alt = recuperation2.pokemons[i].name.fr;
  
          // Ajouter le nom et l'image à l'élément de grille
          pokemonGridItem.appendChild(nomPokemon);
          pokemonGridItem.appendChild(img);
  
          // Ajouter l'élément à la grille
          pokemonGrid.appendChild(pokemonGridItem);
        }
  
        // Ajouter la grille à la balise2
        balise2.appendChild(pokemonGrid);
      })
    }
  }
  recupApi()

  