import { useEffect, useState } from 'react';

export const useGetCurrency = () => {
  const [rates, setRates] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.apilayer.com/exchangerates_data/latest?apikey=iI6SZXlShMFlKPKcBGkrIg732DxWyWEo&symbols=UAH,USD,EUR&base=UAH`,
    )
      .then((response) => response.json())
      .then((json) => {
        setRates(json.rates);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return { isLoading, rates };
};
