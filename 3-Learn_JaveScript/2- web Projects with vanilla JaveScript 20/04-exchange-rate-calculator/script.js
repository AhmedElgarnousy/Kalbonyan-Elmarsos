/*
function calculate() {
  fetch("items.json").then((res) => {
    res.json().then((data) => console.log(data));
  });
}

calculate();

*/

const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");

const swap = document.getElementById("swap");
const rateEl = document.getElementById("rate");

// Fetch exchange rates and update the DOM
function calculate() {
  // console.log("RAN");
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  fetch(`https://open.exchangerate-api.com/v6/latest/${currency_one}`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      const rate = data.rates[currency_two];
      console.log(rate);

      rateEl.innerHTML = `1 ${currency_one} = ${rate} ${currency_two}`;
      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);

      swap.addEventListener("click", () => {
        const swapVar = currencyEl_one.value;
        currencyEl_one.value = currencyEl_two.value;
        currencyEl_two.value = swapVar;
        calculate();
      });
    });
}

// Event Listeners
currencyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);

calculate();
