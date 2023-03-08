import React from 'react';
import { defaultCurrencies } from '../../constants/';

const ConverterBlock = ({ value, currency, onChangeValue, onChangeCurrency }) => {
  return (
    <div className="block">
      <input
        onChange={(e) => {
          if (e.target.value < 0) {
            e.target.placeholder = 'Некоректне значення';
          } else {
            e.target.placeholder = 'Введіть значення';
            onChangeValue(e.target.value);
          }
        }}
        value={value}
        type="number"
        placeholder={'Введіть значення'}
      />
      <select
        className="currencies"
        defaultValue={currency}
        onChange={(e) => onChangeCurrency(e.target.value)}>
        {defaultCurrencies.map((cur) => (
          <option value={cur} key={cur}>
            {cur}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ConverterBlock;
