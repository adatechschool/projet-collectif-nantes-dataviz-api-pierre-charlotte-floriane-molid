async function recupApi() { 
    const reponse = await fetch("https://api.pokemontcg.io/v2/cards")
    const recuperation = await reponse.json();
    

    const affichage = document.querySelector('h1')

    for(let i=0; i< recuperation.data.length; i++ ) {
    affichage.innerHTML += `<h1>"name"${recuperation.data[i].name}</h1>`
    console.log(recuperation.data[i].name)
    affichage.innerHTML += `<p>"type"${recuperation.data[i].types}</p>`

        if (recuperation.data[i].images && recuperation.data[i].images.small) {
            affichage.innerHTML += `<img src="${recuperation.data[i].images.small}" alt="${recuperation.data[i].name}">`;
        } else {
            affichage.innerHTML += `<p>Image non disponible</p>`;
        }
    
    // Vérifie si abilities existe et contient au moins un élément
        if (recuperation.data[i].abilities && recuperation.data[i].abilities.length > 0) {
            affichage.innerHTML += `<p>"talent"${recuperation.data[i].abilities[0].name}</p>`;
        } else {
            affichage.innerHTML += ``;
        }
        affichage.innerHTML += `<p>"serie"${recuperation.data[i].set.series}</p>`
    }
}



recupApi()