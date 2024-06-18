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

//   let ulElement = document.querySelector('#favorite-foods');
//   myInfo.favoriteFoods.forEach(function(element)
//   {
//     let liElement =  document.createElement('li');
//     liElement.textContent = element;
//     ulElement.appendChild(liElement);
//   });

// LO QUE LA U PUSO EN LA PAGINA ES ESTO:

// ANOTHER WAY TO DO THE &&& SECTION WITH .MAP()
const foodsElement = document.querySelector("#favorite-foods");
const foodListElements = myInfo.favoriteFoods.map((food) => `<li>${food}</li>`);
// we need to flatten the array of strings into one big string. .join does this.
foodsElement.innerHTML = foodListElements.join("");

