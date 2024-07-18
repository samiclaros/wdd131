const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

// HAM BUTTON

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.top-nav');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// HAM BUTTON

// ACTUAL WEATHER

// aca quede...

// ACTUAL WEATHER

// LIST OF THE STORE

// aca quede...

// LIST OF THE STORE