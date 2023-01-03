interface CurrencyInputProps {
  currencies: string[];
  selectedCurrency: string;
  amount: number;
  onAmountChange: (amount: string) => void;
  onCurrencyChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CurrencyInput(props: CurrencyInputProps) {
  return (
    <div className="currency-input">
      <input
        type="number"
        min="1"
        value={props.amount}
        onChange={(e) => props.onAmountChange(e.target.value)}
      />
      <select name="currencies" value={props.selectedCurrency} onChange={props.onCurrencyChange}>
        {props.currencies.map((currency) => (
          <option value={currency} key={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
}
