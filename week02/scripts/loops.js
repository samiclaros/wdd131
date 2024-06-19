// myInfo = {
//     name: "Brother T",
//     photo: "images/photo.jpg",
//     favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
//     hobbies: ["Reading", "Fishing", "Camping"],
//     placesLived: [
//         {
//             place: "Rexburg, ID",
//             length: "5 years",
//         },
//         {
//             place: "Ammon, ID",
//             length: "3 years",
//         },
//         {
//             place: "Sandy, UT",
//             length: "1 year",
//         },
//     ],
// };

// //   let ulElement = document.querySelector('#favorite-foods');
// //   myInfo.favoriteFoods.forEach(function(element)
// //   {
// //     let liElement =  document.createElement('li');
// //     liElement.textContent = element;
// //     ulElement.appendChild(liElement);
// //   });

// // LO QUE LA U PUSO EN LA PAGINA ES ESTO:

// with .forEach
// const foodsElement = document.querySelector('#favorite-foods');
// function createandAppendFoodItem(food) {
//   let favoriteFood = document.createElement('li');
//   favoriteFood.textContent = food;
//   foodsElement.appendChild(favoriteFood);
// }
// myInfo.favoriteFoods.forEach(createAndAppendFoodItem);
// }

// // ANOTHER WAY TO DO THE &&& SECTION WITH .MAP()
// const foodsElement = document.querySelector("#favorite-foods");
// const foodListElements = myInfo.favoriteFoods.map((food) => `<li>${food}</li>`);
// // we need to flatten the array of strings into one big string. .join does this.
// foodsElement.innerHTML = foodListElements.join("");


// ACTIVITY 3


myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };
  const foodsElement = document.querySelector("#favorite-foods");
  const placesElement = document.querySelector("#places-lived");
  // requires a list, and a callback that will produce an html string for each item in the list
  // returns a string of html
  function generateListMarkup(list, templateCallback) {
    const htmlList = list.map(templateCallback);
    return htmlList.join("");
  }
  // requires an food string
  // returns that string embedded in HTML markup
  function foodsTemplate(food) {
    return `<li>${food}</li>`;
  }
  
  // requires an place string
  // returns that string embedded in HTML markup
  function placesTemplate(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
  }
  
  foodsElement.innerHTML = generateListMarkup(
    myInfo.favoriteFoods,
    foodsTemplate
  );
  placesElement.innerHTML = generateListMarkup(
    myInfo.placesLived,
    placesTemplate
  );

