async function recupApi() {
    const reponse = await fetch("https://pokeapi.co/api/v2/move");
  const recuperation = await reponse.json();
     const typeName = recuperation.results[4].name
    //console.log(typeName)
     for (i = 0; i < recuperation.results.length; i++) {
     const balise = document.querySelector('#type-container')
    let type = document.createElement('button')
    type.innerText = `${recuperation.results[i].name}`
    balise.appendChild(type)
     console.log(balise)
    console.log(type)
    }
 }
 recupApi()

 document.getElementById('Listing').onclick = function () {
    // Effectuer une requête fetch
    fetch('https://pokeapi.co/api/v2/move/1')
      .then(response => response.json())
      .then(data => {
        // Recuperer les noms de Pokemon 
        for(let i=0; i < data.data.length; i++){
            let affichageImage = document.getElementsByClassName('Affichage-Image')
            let names = [data.data[i].name]
            let images = data.data[i].images.small
           console.log(names[0])
            // console.log("Voila" + searchBar.value)
              // Afficher les dans l'élément avec le main
              
            if((searchBar.value === names[0]) === false){
                names[0]++
                console.log("false")
              } else {
              console.log("true") 
              document.querySelector('main').innerHTML += names[0];
              affichageImage.innerHTML += `<img src="${images}" alt="${images}">`
              return names[0]

              }
            }
        })}