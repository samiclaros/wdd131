const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = `<span>${today.getFullYear()}</span>`;