const searchBar = document.getElementById("search-bar"); // Création d'une variable SearchBar et on relie au DOM (barre de recherche)
const searchButton = document.getElementById("search-button"); // Création d'une variable searchButton et on relie au DOM (button de recherche)
const dropdown = document.getElementById("pokemon-dropdown"); // Ajouter une fonctionnalité pour la liste déroulante
const balise2 = document.getElementById("type-liste-container");
async function LoadApi() {
  // A chaque chargement de la page, création d' une fonction asynchrone
  // Effectuer une requête fetch
  fetch("https://tyradex.vercel.app/api/v1/pokemon")
    .then((response) => response.json())
    .then((data) => {
      dropdown.innerHTML =
        '<option value="">-- Sélectionnez un Pokémon --</option>'; // Réinitialiser le
      data.forEach((pokemon) => {
        // Boucle forEach pour parcourir le tableau data et extraire les noms de Pokemons et creation d'une liste deroulante
        const option = document.createElement("option");

        option.value = pokemon.name.fr; // Valeur du Pokémon
        option.textContent = pokemon.name.fr; // Texte affiché
        dropdown.appendChild(option); 
      });
      dropdown
        .addEventListener("change", () => {    // Fonction callback qui rends dynamique le menu deroulant
          let picture = document.getElementById("image"); // Création d'une variable "images" et on relie au DOM en passant par l'ID "image"
          let NamePokemon = document.getElementById("details"); // Création d'une variable images et on relie au DOM en passant par l'ID "image"
          NamePokemon.innerHTML = "";
          picture.innerHTML = "";

          data.forEach((pokemon) => {
            // Boucle forEach pour parcourir le tableau data et extraire les noms de Pokemons et creation d'une liste deroulante
            const option = document.createElement("option");

            option.value = pokemon.name.fr; // Valeur du Pokémon
            option.textContent = pokemon.name.fr; // Texte affiché
            dropdown.appendChild(option);
          });

          for (let i = 0; i < data.length; i++) {
            // Boucle fOR pour parcourir l'api et le tableau data
            const selectedPokemon = dropdown.value;
            // console.log(data[i].name.fr);
            if (selectedPokemon != data[i].name.fr) {
              // Condition qui permets de vérifier si le nom de pokemon qui a éte saisi existe dans l'API
              // console.log("false")
              // data[i].name.fr++;
            } else {
              console.log("true")
              NamePokemon.innerHTML += data[i].name.fr; // Si le pokemon existe, on affiche le resultat de l'API
              picture.innerHTML += `<img src="${data[i].sprites.regular}" alt="${data[i].sprites.regular}"/>`; // Si le pokemon existe, on affiche l'image de l'API
            }
          }
        })
        .catch((error) => {
          console.error("Erreur lors de la requête API :", error);
          NamePokemon.innerHTML += `<p>Erreur lors de la recherche. Veuillez réessayer plus tard.</p>`;
        });
    });
// Mise à jour de la barre de recherche lors de la sélection dans la liste déroulante
dropdown.addEventListener("change", () => {
  searchBar.value = dropdown.value;

  // Déclencher la recherche pour afficher les détails du Pokémon sélectionné
  fetch("https://tyradex.vercel.app/api/v1/pokemon")
    .then((response) => response.json())
    .then((data) => {
      const selectedPokemon = data.find(
        (pokemon) => pokemon.name.fr === dropdown.value
      );
      if (selectedPokemon) {
        NamePokemon.innerHTML += data[i].name.fr; // Si le pokemon existe, on affiche le resultat de l'API
        picture.innerHTML += `<img src="${data[i].sprites.regular}" alt="${data[i].sprites.regular}"/>`; // Si le pokemon existe, on affiche l'image de l'API
      }
      }
    )});

  }
LoadApi();
