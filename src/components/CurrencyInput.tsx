interface CurrencyInputProps {
  currencies: string[];
  selectedCurrency: string;
  amount: number;
  onAmountChange: (amount: string) => void;
  onCurrencyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function CurrencyInput(props: CurrencyInputProps) {
  return (
    <div className="currency-input">
      <input
        type="number"
        value={props.amount}
        onChange={(e) => props.onAmountChange(e.target.value)}
        className="amount"
      />
      <select name="currencies" value={props.selectedCurrency} onChange={props.onCurrencyChange} className="selected-currency">
        {props.currencies.map((currency) => (
          <option value={currency} key={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
}
