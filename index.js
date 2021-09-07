"use strict"

const Slider = document.querySelectorAll('input[type=range]');
const itr = document.getElementById("itr");
const pageView = document.querySelector(".page-view");
const amountPerView = document.querySelector(".amount-per-view");
const checkBox = document.querySelector(".check-box");


let inputValue = 16;


Slider.forEach(e => {
  e.addEventListener('input', function () {
    e.style.setProperty('background', `linear-gradient(90deg, rgb(16, 213, 194) ${e.value}%, rgb(191,191,191) ${e.value}%)`);
    inputValue = e.value;
    price(inputValue)
    // price01(inputValue)
})});

checkBox.addEventListener('input', () => {

 let boxCheck = checkBox.nodeValue;

  if (checkBox.checked === true ) {
    const b = inputValue - (inputValue * 25 / 100)
    console.log(b);
    amountPerView.innerHTML = `$${b}.00 <span>/month</span>`
    boxCheck = "it is clicked"
    console.log(boxCheck);
  }  else {
    amountPerView.innerHTML = `$${inputValue}.00 <span>/month</span>`
    price(inputValue)
    
  }
});

function price(e){
  if(e !== '8' && e !=='12' && e !=='16' && e !=='24'  && e !=='36') {
    amountPerView.innerHTML = `$${e}.00 <span>/month</span>`
  } else if (e === "8") {
    pageView.innerHTML = "10K Pageviews";
    amountPerView.innerHTML = "$8.00 <span>/month</span>"
  } else if (e === "12") {
    pageView.innerHTML = "50K Pageviews";
    amountPerView.innerHTML = "$12.00 <span>/month</span>"
  } else if (e === "16") {
    pageView.innerHTML = "100K Pageviews";
    amountPerView.innerHTML = "$16.00 <span>/month</span>"
  } else if (e === "24") {
    pageView.innerHTML = "500K Pageviews";
    amountPerView.innerHTML = "$24.00 <span>/month</span>"
  } else if (e === "36") {
    pageView.innerHTML = "1M Pageviews";
    amountPerView.innerHTML = "$36.00 <span>/month</span>"
  } else {
    console.log("something went wrong!");
  }
};


