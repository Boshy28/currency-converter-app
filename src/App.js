import { useState, useEffect, useCallback } from 'react';
import ConverterBlock from './components/ConverterBlock';
import Header from './components/Header';
import { useGetCurrency } from './hooks/useGetCurrency';
import Loader from './components/Loader';

function App() {
  const { rates, isLoading } = useGetCurrency();
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('UAH');
  const [fromPrice, setFromPrice] = useState('');
  const [toPrice, setToPrice] = useState('');

  const onChangeFromPrice = useCallback(
    (value) => {
      const price = value / rates[fromCurrency];
      const result = price * rates[toCurrency];
      setToPrice(result ? result.toFixed(2) : '');
      setFromPrice(value);
    },
    [fromCurrency, rates, toCurrency],
  );

  const onChangeToPrice = useCallback(
    (value) => {
      const result = (rates[fromCurrency] / rates[toCurrency]) * value;
      setFromPrice(result ? result.toFixed(2) : '');
      setToPrice(value);
    },
    [fromCurrency, rates, toCurrency],
  );

  useEffect(() => {
    onChangeFromPrice(fromPrice);
  }, [fromCurrency]);

  useEffect(() => {
    onChangeToPrice(toPrice);
  }, [toCurrency]);

  return (
    <div className="wrapper">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header rates={rates}></Header>
          <div className="container">
            <ConverterBlock
              value={fromPrice}
              currency={fromCurrency}
              onChangeCurrency={setFromCurrency}
              onChangeValue={onChangeFromPrice}
            />
            <ConverterBlock
              value={toPrice}
              currency={toCurrency}
              onChangeCurrency={setToCurrency}
              onChangeValue={onChangeToPrice}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
