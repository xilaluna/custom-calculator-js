function convertCurrency() {
  const usdInput = document.querySelector("#input-usd");
  const displayEUR = document.querySelector("#euro-eur");
  const displayJPY = document.querySelector("#yen-jpy");
  const displayGBP = document.querySelector("#pound-gbp");

  const input = usdInput.value;

  const eurExchangeRate = 0.85;
  const jpyExchangeRate = 105.6;
  const gbpExchangeRate = 0.78;

  displayEUR.innerHTML = (input * eurExchangeRate).toFixed(2);
  displayJPY.innerHTML = (input * jpyExchangeRate).toFixed(2);
  displayGBP.innerHTML = (input * gbpExchangeRate).toFixed(2);
}

document.getElementById("input-usd").addEventListener("input", convertCurrency);
