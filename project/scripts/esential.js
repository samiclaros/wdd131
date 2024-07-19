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



// LIST OF THE STORE