let counter = 0;
const myNumber = document.querySelector(".number");
const increaseButton = document.querySelector(".increase");
const resetButton = document.querySelector(".reset");
const decreaseButton = document.querySelector(".decrease");

increaseButton.addEventListener("click", function () {
    counter++;
    myNumber.innerHTML = counter;
})

resetButton.addEventListener("click", function () {
    counter = 0;
    myNumber.innerHTML = 0;
});

decreaseButton.addEventListener("click", function () {
    counter--;
    myNumber.innerHTML = counter;
})

console.log(counter);