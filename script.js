let currentPokemonList = [];


async function recupApi() {
  const reponse = await fetch("https://tyradex.vercel.app/api/v1/types");
  const recuperation = await reponse.json();

  const animations = document.querySelector(".pokeball-animated")

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
      animations.style.display = 'none'
      
      // Met à jour la liste globale avec les Pokémon du type sélectionné
      currentPokemonList = recuperation2.pokemons; 
      
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
  try {
    //Appel l'API et vide la balise 2 pour pouvoir afficher de nouveaux éléments.
    const reponse = await fetch(`https://tyradex.vercel.app/api/v1/pokemon/${pokemonId}`);
    const pokemon = await reponse.json();
    const balise2 = document.getElementById('type-liste-container');
    balise2.innerHTML = '';

    //Création d'une balise div avec un ID 'placement'
    const placement = document.createElement('div')
    placement.classList.add('placement')

    //Création d'une balise h2 avec un ID 'nomPokemon' qui affiche le nom des pokémons en français.
    const detailsPokemon = document.createElement('h2')
    detailsPokemon.classList.add('nomPokemon')
    detailsPokemon.innerHTML = pokemon.name.fr
    //Ajout de la balise detailsPokemon(h2) en tant d'enfant de la balise placement(div).
    placement.appendChild(detailsPokemon);

    //Création d'un container pour récupérer les balises images créer ci-dessous pour afficher les images des pokémons.
    const imagesContainer = document.createElement('div');
    imagesContainer.style.display = 'flex'; // Affiche les images en ligne
    imagesContainer.style.gap = '20px'; // Espace entre les images
    placement.appendChild(imagesContainer)

    //Création d'un container (Gmax) pour récupérer les balises imagesGmax créer ci-dessous pour afficher les images des pokémons.
    const imagesContainerGmax = document.createElement('div');
    imagesContainerGmax.style.display = 'flex'; // Affiche les images en ligne
    imagesContainerGmax.style.gap = '20px'; // Espace entre les images
    placement.appendChild(imagesContainerGmax)

    //Création d'une balise pour afficher les images normal des pokémons.
    const imgRegular = document.createElement('img')
    imgRegular.classList.add('sprites')
    imgRegular.src = pokemon.sprites.regular
    imagesContainer.appendChild(imgRegular)

    //Création d'une balise pour afficher les images shiny des pokémons.
    const imgShiny = document.createElement('img')
    imgShiny.classList.add('sprites')
    imgShiny.src = pokemon.sprites.shiny
    imagesContainer.appendChild(imgShiny)

    //Création d'une balise pour afficher les images normal Gmax des pokémons.
    if (pokemon.sprites.gmax) {
      const imgGmax = document.createElement('img')
      imgGmax.classList.add('sprites')
      imgGmax.src = pokemon.sprites.gmax.regular
      imagesContainerGmax.appendChild(imgGmax)
    }

    //Création d'une balise pour afficher les images shiny Gmax des pokémons.
    if (pokemon.sprites.gmax) {
      const imgGmax = document.createElement('img')
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

    const navContainer = document.createElement('div');
    navContainer.style.position = 'relative';
    navContainer.style.display = 'flex';
    navContainer.style.justifyContent = 'space-between'; // Place les boutons aux extrémités
    navContainer.style.marginBottom = '10px'; // Espace sous les boutons

    
    const Suivant = document.createElement('button')
    Suivant.classList.add('Next-Button')
    Suivant.innerText = "Suivant"
    navContainer.appendChild(Suivant)
    Suivant.addEventListener('click', () => {
      //permet de vérifier si dans l'id du pokedex_id est égale a celui de pokemponId
      const currentIndex = currentPokemonList.findIndex(p => p.pokedex_id === pokemonId);
      console.log(currentIndex)
      console.log(currentPokemonList.findIndex(p => p.pokedex_id === pokemonId))
      //Vérifie que le pokémon existe dans la liste et que ce n'est pas le dernier élément du tableau.
      if (currentIndex !== -1 && currentIndex < currentPokemonList.length - 1) {
        const nextPokemonId = currentPokemonList[currentIndex + 1].pokedex_id;
        afficherDetailsPokemon(nextPokemonId); // Passe au Pokémon suivant
        console.log(nextPokemonId)
      } else {
        alert("Il n'y a pas de Pokémon suivant.");
      }
    });

    const Precedent = document.createElement('button')
    Precedent.classList.add('Prev-Button')
    Precedent.innerText = "Précédent"
    navContainer.appendChild(Precedent)
    Precedent.addEventListener('click', () => {
      const currentIndex = currentPokemonList.findIndex(p => p.pokedex_id === pokemonId);
      //Si l'index est supérieur a 0 on retourne au pokémon précedent, si jamais ce n'est pas le cas il y a une alerte.
      if (currentIndex > 0) {
        const prevPokemonId = currentPokemonList[currentIndex - 1].pokedex_id;
        afficherDetailsPokemon(prevPokemonId); // Passe au Pokémon précédent
        console.log(prevPokemonId)
      } else {
        alert("Il n'y a pas de Pokémon précédent.");
      }
    }); 


    placement.appendChild(talentsContainer);
    //regroupe les différentes balises en tant qu'enfant de la balise 2
    balise2.appendChild(navContainer)
    balise2.appendChild(placement)
  } catch (erreur) {
    console.error('Erreur lors de la récupération des détails du Pokémon:', erreur);
  }
  
}
recupApi(LoadApi())


const searchBar = document.getElementById("search-bar"); // Création d'une variable SearchBar et on relie au DOM (barre de recherche)
const searchButton = document.getElementById("search-button"); // Création d'une variable searchButton et on relie au DOM (button de recherche)
const dropdown = document.getElementById("pokemon-dropdown"); // Ajouter une fonctionnalité pour la liste déroulante
const balise2 = document.getElementById("type-liste-container");
async function LoadApi() {
  const animations = document.querySelector(".pokeball-animated")

  
  // Chargement de tous les Pokémon pour la liste déroulante
  fetch("https://tyradex.vercel.app/api/v1/pokemon")
    .then((response) => response.json())
    .then((data) => {
      dropdown.innerHTML =
        '<option value=""> Recherche 🔍</option>'; // Réinitialiser le contenu

      // Ajout des options dans le dropdown
      data.forEach((pokemon) => {
        const option = document.createElement("option");
        option.value = pokemon.pokedex_id; // Utiliser pokedex_id comme valeur
        option.textContent = pokemon.name.fr; // Texte affiché dans la liste
        dropdown.appendChild(option);
      });

      // Gestionnaire pour le changement dans le dropdown
      dropdown.addEventListener("change", () => {
        const selectedPokemonId = parseInt(dropdown.value, 10); // Récupérer l'ID sélectionné
        if (selectedPokemonId) {
          console.log('On tente de récupérer le button...')
          animations.style.display="none"
          afficherDetailsPokemon(selectedPokemonId); // Appeler la fonction avec l'ID
          }
      });
    })
    .catch((error) => {
      console.error("Erreur lors de la requête API :", error);
    });
}
LoadApi();