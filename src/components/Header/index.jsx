import React from 'react';

function Header({ rates }) {
  const date = new Date();

  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth()}` : date.getMonth();
  const year = date.getFullYear();
  const fullDate = `${day}.${month}.${year}`;

  const priceUSD = (1 / rates.USD).toFixed(2);
  const priceEUR = (1 / rates.EUR).toFixed(2);

  return (
    <header>
      <h2>Актуальний курс валют до гривні станом на {fullDate}</h2>
      <span>USD : {isNaN(priceUSD) ? 'Завантаження...' : priceUSD}</span>
      <span>EUR : {isNaN(priceEUR) ? 'Завантаження...' : priceEUR}</span>
    </header>
  );
}

export default Header;
