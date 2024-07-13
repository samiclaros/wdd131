const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const lastModified = document.querySelector("#lastModified");
const lastModifiedDate = new Date(document.lastModified);

lastModified.innerHTML = `Last modified: <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "short",
    timeStyle: "medium"
	}
).format(lastModifiedDate)}</span>`;

// CONTENT OF THE LIST OF PRODUCTS


const productName = document.querySelector("#product-name");
