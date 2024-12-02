
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
}
recupApi()

