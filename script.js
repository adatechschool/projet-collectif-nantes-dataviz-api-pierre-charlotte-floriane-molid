async function recupApi() {
  const reponse = await fetch("https://tyradex.vercel.app/api/v1/types");
  const recuperation = await reponse.json();

  const animations=document.querySelector(".pokeball-animated")

  for (let i = 0; i < recuperation.length; i++) {
    const balise = document.querySelector('#type-container')
    let type = document.createElement('button')
    type.setAttribute('id', `${recuperation[i].name.fr}`)
    type.classList.add('type-button')

    type.innerText = `${recuperation[i].name.fr}`
    balise.appendChild(type)

    type.addEventListener("click", async () => {
      const reponse2 = await fetch(`https://tyradex.vercel.app/api/v1/types/${recuperation[i].name.en}`)
      const recuperation2 = await reponse2.json() 
      animations.style.display='none'
      
      const balise2 = document.getElementById('type-liste-container')
      balise2.innerHTML = "" // on vide

      // Créer un conteneur grid pour les Pokémon
      const pokemonGrid = document.createElement('div');
      pokemonGrid.classList.add('pokemon-grid');

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

        // Ajouter un attribut data avec l'ID du Pokémon
        pokemonGridItem.dataset.pokemonId = recuperation2.pokemons[i].pokedex_id;
        // Ajouter un événement de clic pour afficher les détails
        pokemonGridItem.addEventListener('click', () => {
          afficherDetailsPokemon(recuperation2.pokemons[i].pokedex_id);
        });

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

async function afficherDetailsPokemon(pokemonId) {
  try{
      const reponse = await fetch(`https://tyradex.vercel.app/api/v1/pokemon/${pokemonId}`);
      const pokemon = await reponse.json();
      const balise2 = document.getElementById('type-liste-container');
      balise2.innerHTML = '';

      const placement = document.createElement('div')
      placement.classList.add('placement')

      const detailsPokemon = document.createElement('h2')
      detailsPokemon.classList.add('nomPokemon')
      detailsPokemon.innerHTML = pokemon.name.fr
      
placement.appendChild(detailsPokemon);

      const imagesContainer = document.createElement('div');
      imagesContainer.style.display = 'flex'; // Affiche les images en ligne
      imagesContainer.style.gap = '20px'; // Espace entre les images
      placement.appendChild(imagesContainer)

      const imagesContainerGmax = document.createElement('div');
      imagesContainerGmax.style.display = 'flex'; // Affiche les images en ligne
      imagesContainerGmax.style.gap = '20px'; // Espace entre les images
      placement.appendChild(imagesContainerGmax)

      const imgRegular = document.createElement('img')
      imgRegular.classList.add('sprites')
      imgRegular.src = pokemon.sprites.regular
      imagesContainer.appendChild(imgRegular)
      
      const imgShiny = document.createElement('img')
      imgShiny.classList.add('sprites')
      imgShiny.src = pokemon.sprites.shiny
      imagesContainer.appendChild(imgShiny)

      if(pokemon.sprites.gmax){
          const imgGmax= document.createElement('img')
          imgGmax.classList.add('sprites')
          imgGmax.src = pokemon.sprites.gmax.regular
          imagesContainerGmax.appendChild(imgGmax)
      }
      if(pokemon.sprites.gmax){
          const imgGmax= document.createElement('img')
          imgGmax.classList.add('sprites')
          imgGmax.src = pokemon.sprites.gmax.shiny
          imagesContainerGmax.appendChild(imgGmax)
      }
      // Créer un conteneur flex pour les types
      const typesContainer = document.createElement('div');
      typesContainer.style.display = 'flex';
      typesContainer.style.gap = '10px'; // Ajoute un espace entre les types
      pokemon.types.forEach(typeInfo => {
          const type = document.createElement('p');
          type.classList.add('types')
          type.setAttribute('id', `${typeInfo.name}`);
          type.innerText = typeInfo.name;
          typesContainer.appendChild(type);
      });
      placement.appendChild(typesContainer);
      
      // Ajouter un titre pour les talents
       const talentsTitle = document.createElement('h3');
       talentsTitle.innerText = 'Talents'; // Titre pour la section des talents
       placement.appendChild(talentsTitle);

      // Créer un conteneur flex pour les talents
      const talentsContainer = document.createElement('div');
      talentsContainer.style.display = 'flex';
      talentsContainer.style.gap = '20px'; // Ajoute un espace entre les talents
      pokemon.talents.forEach(talentInfo => {
          const talent = document.createElement('p');
          talent.classList.add('talents')
          talent.innerText = talentInfo.name;
          talentsContainer.appendChild(talent);
      });
      placement.appendChild(talentsContainer);
      balise2.appendChild(placement)
      }catch (erreur) {
      console.error('Erreur lors de la récupération des détails du Pokémon:', erreur);
      }
  
}
recupApi()