// NUMBER OF REVIEWS

const reviewAmount = document.querySelector("#review-amount");
let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;

if (numReviews > 0) { 
  reviewAmount.textContent = numReviews + 1;
} else {
  reviewAmount.textContent = `1`;
}

numReviews++ + 1;
localStorage.setItem("numReviews-ls", numReviews);

// NUMBER OF REVIEWS