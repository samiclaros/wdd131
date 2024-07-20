// CURRENT YEAR

const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

// CURRENT YEAR

// HAM BUTTON

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.top-nav');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// HAM BUTTON

// ACTUAL WINDCHILL

const windSpeed = 12;
const temperature = 7;
const windchill = document.querySelector("#windchill");

const windchillOperation = function(temperature, windSpeed){
    if(temperature <=10 && windSpeed > 4.8)
        {
            let windchill = 13.12 + (0.6215*temperature) - (11.37*(windSpeed**0.16)) + (0.3965*temperature*(windSpeed**0.16));
            return windchill.toFixed(2);
        }
    else
    {
        return "N/A";
    }
}
windchill.innerHTML = `<span class="highlight">${windchillOperation(temperature, windSpeed)}</span>`;

// ACTUAL WINDCHILL

// LIST OF THE STORE

// const belts =[
// 	{
// 		title: "Lacroiuse Belt (Two faces)",
// 		colors: "Brown and black",
// 		price: "12.99$"
// 	},
// 	{
// 		title: "Bordare",
// 		colors: "Black and White",
// 		price: "29.99$"
// 	},
// 	{
// 		title: "Samesttri",
// 		colors: "Black, Grey, Dark Grey",
// 		price: "29.99$"
// 	}
// ]

// createBeltsInformation(belts);

// function createBeltsInformation(belts) {
// 	belts.forEach((belt, index) => {
//         let container = document.querySelector(`#belt-${index + 1}-container .belt-info`);
//         if (container) {
//             let title = document.createElement("p");
//             let colors = document.createElement("p");
//             let price = document.createElement("p");

//             title.innerHTML = `<span class="belts-title"></span> ${belt.title}`;
//             colors.innerHTML = `<span class="belts-colors">Colors</span> ${belt.colors}`;
//             price.innerHTML = `<span class="belts-price">Price:</span> ${belt.price}`;

//             container.appendChild(title);
//             container.appendChild(colors);
//             container.appendChild(price);
//         }
//     });
// }

// LIST OF THE STORE COMMENTS: I tried to use this, but the styling part was a challenge for me. I tried to set attributes and classes but I finally decided 
// 							   to not add this. Actually works, but the styling part was a problem for me.

// SELECT OPTION IN FORM
const cities = [
	{
        zipNumber: 3221,
	    city: "Cochabamba"
	},
	{
        zipNumber: 9821,
        city: "Santa Cruz"
	},
	{
        zipNumber: 2417,
        city: "La Paz"
	},
	{
        zipNumber: 1693,
        city: "Chuquisaca"
	},
	{
        zipNumber: 2185,
        city: "Sucre"
	},
    {
        zipNumber: 9124,
        city: "Pando"
	},
    {
        zipNumber: 7642,
        city: "Beni"
	},
    {
        zipNumber: 2081,
        city: "Tarija"
	},
    {
        zipNumber: 5201,
        city: "Oruro"
	}
];

const citySelector = document.querySelector("#city");
cities.forEach(cityObj => {
	const option = document.createElement("option");
	option.value = cityObj.city;
	option.textContent = cityObj.city;
	citySelector.appendChild(option);
});
// SELECT OPTION IN FORM

// NUMBER OF REVIEWS

const essentialForm = document.querySelector("#essential-form");

essentialForm.addEventListener("submit", (event) => {
    let numReviews = Number(window.localStorage.getItem("numOfFormsCompleted-ls")) || 0;
    numReviews++;
    localStorage.setItem("numReviews-ls", numReviews);
});

// NUMBER OF REVIEWS
