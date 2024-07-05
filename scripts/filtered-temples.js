const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Cochabamba Bolivia",
	  	location: "Cochabamba Bolivia",
	  	dedicated: "2000, April, 30",
	  	area: 3298.1,
	  	imageUrl:
	  	"https://www.churchofjesuschrist.org/imgs/e012ebb4075dc7976a314471fc0a3b3058e37c1a/full/320%2C/0/default"
	},
	{
		templeName: "Quito Ecuador",
	  	location: "Quito Ecuador",
	  	dedicated: "2022, November, 20",
	  	area: 32585.54,
	  	imageUrl:
	  	"https://www.churchofjesuschrist.org/imgs/490df500d14611ec90efeeeeac1ee7e67e80c168/full/320%2C/0/default"
	},
	{
		templeName: "Bogota Colombia",
	  	location: "Bogota Colombia",
	  	dedicated: "1999, April, 24",
	  	area: 5000,
	  	imageUrl:
	  	"https://www.churchofjesuschrist.org/imgs/89b209718a7ed41649a497893e240972b7cfd036/full/320%2C/0/default"
	}
];

const templeContainer = document.querySelector("#templeContainer");

temples.forEach(function(temple){
	console.log('Temple Name: ' + temple.templeName());
  	console.log('Location: ' + temple.location());
  	console.log('Dedicated: ' + temple.dedicated());
  	console.log('Size: ' + temple.area());
  	console.log(temple.imageUrl());
});