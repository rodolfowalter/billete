function updateDolar(data) {
  document.querySelector('#dolar-buy').textContent = data.blue.value_buy;
  document.querySelector('#dolar-sell').textContent = data.blue.value_sell;
  document.querySelector('#dolar-avg').textContent = data.blue.value_avg;
}

function updateEuro(data) {
  document.querySelector('#euro-buy').textContent = data.blue_euro.value_buy;
  document.querySelector('#euro-sell').textContent = data.blue_euro.value_sell;
  document.querySelector('#euro-avg').textContent = data.blue_euro.value_avg;
}