// NUMBER OF REVIEWS

const reviewAmount = document.querySelector("#review-amount");
let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;

if (numReviews > 0) { 
  reviewAmount.textContent = numReviews;
} else {
  reviewAmount.textContent = `1`;
}

numReviews++;
localStorage.setItem("numReviews-ls", numReviews);

// NUMBER OF REVIEWS