import "./App.css";
import CurrencyInput from "./components/CurrencyInput";
import axios from "axios";
import { useEffect, useState } from "react";
import currenciesData from "../api/currencies.json";

function App() {
  const [currenciesOptions, setCurrencyOptions] = useState<Array<string>>([]);
  const [fromCurrency, setFromCurrency] = useState<string>("");
  const [toCurrency, setToCurrency] = useState<string>("");

  const [fromAmount, setFromAmount] = useState(1);

  const [toAmount, setToAmount] = useState(1);

  /*
  useEffect(() => {
    axios
      .get(
        "https://api.apilayer.com/exchangerates_data/latest?apikey=utO7Z9iXRLQ2URlX9qbBErvIzcA4LGRR"
      )
      .then((response) => response.data)
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyOptions(Object.keys(data.rates));
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
      });
  }, []);
  */
  useEffect(() => {
    const firstCurrency = Object.keys(currenciesData.rates)[0];
    setCurrencyOptions(Object.keys(currenciesData.rates));
    setFromCurrency(currenciesData.base);
    setToCurrency(firstCurrency);
  }, []);

  return (
    <div className="App">
      <CurrencyInput
        currencies={currenciesOptions}
        amount={fromAmount}
        selectedCurrency={fromCurrency}
        onCurrencyChange={(e) => setFromCurrency(e.target.value)}
      />
      <CurrencyInput
        currencies={currenciesOptions}
        amount={toAmount}
        selectedCurrency={toCurrency}
        onCurrencyChange={(e) => setToCurrency(e.target.value)}
      />
    </div>
  );
}

export default App;
