document.querySelector('.cocktail').addEventListener('click', getDrink)

document.querySelector('.cocktail').addEventListener('click', showHide)

document.querySelector('.cocktail').addEventListener('click', shadow)
// document.querySelector('.options').addEventListener('click', options)


const goBack = document.querySelector('.goBack')
// 

function getDrink(){
    let drink = document.querySelector('.drinkName').value

    let fixWord = str => str.toLowerCase().split('').filter(x => x !== ' ').join('')

    drink = fixWord(drink)

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json())
    .then(data => {

      console.log(data.drinks)

      // document.querySelector('.picker').style.display === "none"
      document.querySelector('h3').innerText = data.drinks[0].strDrink
      document.querySelector('img').src = data.drinks[0].strDrinkThumb
      document.querySelector('.instructions').innerText = data.drinks[0].strInstructions
      document.querySelector('.ingredients').innerText = 'Ingredients:'
      document.querySelector('.headingInstructions').innerText = 'Instructions:'

      let ingredients = []
      // let measurements = []

      for(let i = 1; i <= 15; i++) {
        const key = `strIngredient${i}`
        const value = data.drinks[0][key]
        console.log(value);
        if(key.includes('strIngredient') && value) {
          ingredients.push(value)
          const li = document.createElement('li')
          li.textContent = value
          document.querySelector('ul').appendChild(li)
        }
      }
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}



function showHide() {
  goBack.classList.remove('hidden')
}

function shadow() {
  document.querySelector('img').style["boxShadow"] = "-10px 15px 40px black";
}

// function options(contains) {
//   contains = document.querySelector('drinkContains').value

//     fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${contains}`)
//     .then(res => res.json())
//     .then(data => {

//       console.log(data.drinks)

//       // document.querySelector('h3').innerText = data.drinks[0].strDrink
//       // document.querySelector('img').src = data.drinks[0].strDrinkThumb
//       // document.querySelector('.instructions').innerText = data.drinks[0].strInstructions
//       // document.querySelector('.ingredients').innerText = 'Ingredients:'
//       // document.querySelector('.headingInstructions').innerText = 'Instructions:'

//       // let ingredients = []
//       // let measurements = []

//       // for(let i = 1; i <= 15; i++) {
//       //   const key = `strIngredient${i}`
//       //   const value = data.drinks[0][key]
//       //   console.log(value);
//       //   if(key.includes('strIngredient') && value) {
//       //     ingredients.push(value)
//       //     const li = document.createElement('li')
//       //     li.textContent = value
//       //     document.querySelector('ul').appendChild(li)
//       //   }
//       // }
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });
// }
