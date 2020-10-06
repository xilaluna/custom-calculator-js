const usdInput = document.querySelector("#input-usd");
const displayEUR = document.querySelector("#euro-eur");
const displayJPY = document.querySelector("#yen-jpy");
const displayGBP = document.querySelector("#pound-gbp");

function calculateEUR() {
  const usd = parseFloat(usdInput.value);
  const eurExchangeRate = 0.85;
  let calculated = usd * eurExchangeRate;
  displayEUR.innerHTML = `${calculated}`;
}
