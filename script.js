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
recupApi()

