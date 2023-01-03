import "./App.css";
import CurrencyInput from "./components/CurrencyInput";
import axios from "axios";
import { useEffect, useState } from "react";
import currenciesData from "../api/currencies.json";

function App() {
  const [currenciesOptions, setCurrencyOptions] = useState<Array<string>>([]);
  const [exchangeRate, setExchangeRate] = useState<number>();

  const [fromCurrency, setFromCurrency] = useState<string>("");
  const [toCurrency, setToCurrency] = useState<string>("");

  const [amount, setAmount] = useState<number>(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let fromAmount, toAmount;
  console.log(exchangeRate);
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  /* useEffect(() => {
    axios
      .get(
        "https://api.apilayer.com/exchangerates_data/latest?apikey=utO7Z9iXRLQ2URlX9qbBErvIzcA4LGRR"
      )
      .then((response) => response.data)
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyOptions(Object.keys(data.rates));
        setExchangeRate(currenciesData.rates);

        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
      });
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      axios
        .get(
          `https://api.apilayer.com/exchangerates_data/latest?apikey=utO7Z9iXRLQ2URlX9qbBErvIzcA4LGRR&latest?symbols=${toCurrency}&base=${fromCurrency}"
      )`
        )
        .then((response) => response.data)
        .then((data) => setExchangeRate(data.rates[toCurrency]));
    }
  }, [fromCurrency, toCurrency]); */

  useEffect(() => {
    const firstCurrency = Object.keys(currenciesData.rates)[0];
    setCurrencyOptions(Object.keys(currenciesData.rates));
    setExchangeRate(currenciesData.rates[firstCurrency]);

    setFromCurrency(currenciesData.base);
    setToCurrency(firstCurrency);
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      setExchangeRate(currenciesData.rates[toCurrency]);
    }
  }, [fromCurrency, toCurrency]);

  function handleToAmountChange(e) {
    setAmount(Number(e));
    setAmountInFromCurrency(true);
  }

  function handleFromAmountChange(e) {
    setAmount(Number(e));
    setAmountInFromCurrency(false);
  }

  return (
    <div className="App">
      <CurrencyInput
        currencies={currenciesOptions}
        amount={fromAmount}
        selectedCurrency={fromCurrency}
        onCurrencyChange={(e) => setFromCurrency(e.target.value)}
        onAmountChange={handleToAmountChange}
      />
      .
      <CurrencyInput
        currencies={currenciesOptions}
        amount={toAmount}
        selectedCurrency={toCurrency}
        onCurrencyChange={(e) => setToCurrency(e.target.value)}
        onAmountChange={handleFromAmountChange}
      />
    </div>
  );
}

export default App;
