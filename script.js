async function recupApi() { 
    const reponse = await fetch("https://api.pokemontcg.io/v2/cards")
    const recuperation = await reponse.json();
    console.log(recuperation)

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
}



recupApi()
