async function recupApi() { 
    const reponse = await fetch("https://api.pokemontcg.io/v2/cards")
    const recuperation = await reponse.json();
    //console.log(recuperation)

    const affichage = document.querySelector('p')

    for(let i=0; i< recuperation.data.length; i++ ) {
    //affichage.innerHTML += `<p>${recuperation.data[i].name}<p>`
    //console.log(recuperation.data[i].name)
    //affichage.innerHTML += `<p>${recuperation.data[i].types.dragon}</p>`

    //console.log(recuperation.data[i].types.dragon)

      if (recuperation.data[i].types && recuperation.data[i].types.dragon >0){
            affichage.innerHTML += `<p>"type"${recuperation.data[i].types.dragon.length}</p>`
            console.log(recuperation.data[i].types.dragon)

          } else {
        affichage.innerHTML += ``;
    }



        // if (recuperation.data[i].images && recuperation.data[i].images.small) {
        //     affichage.innerHTML += `<img src="${recuperation.data[i].images.small}" alt="${recuperation.data[i].name}">`;
        // } else {
        //     affichage.innerHTML += `<p>Image non disponible</p>`;
        // }
    
    // // Vérifie si abilities existe et contient au moins un élément
    //     if (recuperation.data[i].abilities && recuperation.data[i].abilities.length > 0) {
    //         affichage.innerHTML += `<p>"talent"${recuperation.data[i].abilities[0].name}</p>`;
    //     } else {
    //         affichage.innerHTML += ``;
    //     }
    //     affichage.innerHTML += `<p>"serie"${recuperation.data[i].set.series}</p>`
    // }
}
}



recupApi()


boutonFire.addEventListener("click", async function () {
    if (recupApi("Metal")) {
       return
    } if (recupApi("Grass")) {
       return
    } if (recupApi("Lightning")) {
       return
    } if (recupApi("Dragon")) {
       return
    } if (recupApi("Darkness")) {
       return
  
    } if (recupApi("Colorless")) {
       return
  
    } if (recupApi("Psychic")) {
       return
  
    } if (recupApi("Fire")) {
       return
    } if (recupApi("Water")) {
       return
    } if (recupApi("Fighting")) {
       return
    }
  
  })



  // const boutonMetal = document.getElementById('metal')
// const boutonGrass = document.getElementById('grass')
// const boutonLightning = document.getElementById('lightning')
// const boutonDragon = document.getElementById('dragon')
// const boutonDarkness = document.getElementById('darkness')
// const boutonColorless = document.getElementById('colorless')
// const boutonPsychic = document.getElementById('psychic')
// const boutonFire = document.getElementById('fire')
// const boutonWater = document.getElementById('water')
// const boutonFighting = document.getElementById('fighting')

// const boutonGroup = document.querySelectorAll('#buttonGroup button');




  // for (let i = 0; i < recuperation.name.length; i++) {
  //   const carte = recuperation.name[i];

  //   if (recuperation.name[i] && recuperation.name[i].type >0) {
  //     affichage.innerHTML += `<p>${recuperation.name[i]} </p>`;
  //   }
  // }




  // boutonGroup.addEventListener("click", async function () {
//   recupApi("Metal")
   
// })
