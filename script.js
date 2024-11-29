<<<<<<< HEAD
=======
/* async function recupApi() { 
    const reponse = await fetch("https://api.pokemontcg.io/v2/cards")
    const recuperation = await reponse.json();
    console.log(recuperation)
>>>>>>> 74388ae (maj list types et liste pokemon)

<<<<<<< HEAD
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
      console.log(recuperation2)
      const balise2 = document.getElementById('type-liste-container')
      balise2.innerHTML = "" // on vide

      for (let i = 0; i < recuperation2.pokemons.length; i++) {
        console.log(recuperation2.pokemons[i].name.fr)
        const listingueDeNoms = document.createElement("li")
        // on affiche la liste après le click
        listingueDeNoms.innerText += `${recuperation2.pokemons[i].name.fr}`
        // 
        balise2.appendChild(listingueDeNoms)

      }

    })
  }
=======
    const affichage = document.querySelector('main')

    for(let i=0; i< recuperation.data.length; i++ ) {
    affichage.innerHTML += `<main>${recuperation.data[i].name}</main>`
    console.log(recuperation.data[i].name)
    // affichage.innerHTML += `<p>"type"${recuperation.data[i].types}</p>`

        
    
    // Vérifie si abilities existe et contient au moins un élément
        if (recuperation.data[i].abilities && recuperation.data[i].abilities.length > 0) {
           //  affichage.innerHTML += `<p>"talent"${recuperation.data[i].abilities[0].name}</p>`;
        } else {
            affichage.innerHTML += ``;
        }
       // affichage.innerHTML += `<p>"serie"${recuperation.data[i].set.series}</p>`
    }
>>>>>>> a54a86b (creation Barre.js)
}
<<<<<<< HEAD
=======



recupApi() */



async function recupApi() {
    const reponse = await fetch("https://tyradex.vercel.app/api/v1/types");
    const recuperation = await reponse.json();
    console.log(recuperation[0].name.fr)

    for (let i = 0; i < recuperation.length; i++) {
    const balise = document.querySelector('#type-container')
    let type = document.createElement('button')
    type.innerText = `${recuperation[i].name.fr}`
    balise.appendChild(type)

    type.addEventListener("click", async() => {                                                                                                                                                                                                                                                                                                                                                                                                           
        const reponse2 = await fetch(`https://tyradex.vercel.app/api/v1/types/${recuperation[i].name.fr}`)
        const reponse3 = await fetch (`https://tyradex.vercel.app/api/v1/types/${recuperation[i].sprites.fr}`)
        const recuperation2 = await reponse2.json()
        const recuperation3 = await reponse3.json()

        console.log(recuperation2)
        console.log(recuperation3)
        let image = document.getElementById("image")
        image.innerHTML = recuperation3
        let balise2 = document.getElementById("type-containerTypes")
        balise2.innerHTML ='';
for(let i = 0; i < recuperation2.pokemons.length; i++) {
            console.log(recuperation2.pokemons[i].name.fr)
            
            let listingueDeNoms = document.createElement("li")
            let listingueImage = document.createElement("li")
          
            listingueDeNoms.innerHTML = `${recuperation2.pokemons[i].name.fr}`
            listingueImage = 
            balise2.appendChild(listingueDeNoms)
            // on affiche la liste après le click
            
            
          
           
              // on vide

            
}

         

    }) 

    }
}
>>>>>>> 74388ae (maj list types et liste pokemon)
recupApi()

