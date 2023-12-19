import { useId } from "react";

interface appProps {
    label: string;
    amount: number;
    onAmountChange: ()=> void;
    onCurrencyChange: ()=> void;
    currencyOption: string[];
    selectedCurrency: string;
    amountDisabled: boolean;
    currencyDisabled: boolean;
    className: string;
}

function InputBox({label
    ,amount
    ,onAmountChange
    ,onCurrencyChange
    ,currencyOption
    ,selectedCurrency
    ,amountDisabled
    ,currencyDisabled,
    className} : appProps) {
        const id = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className="w-1-2">
            <label htmlFor={id} className="text-black/40 mb-2 inline-block">{label}</label>
            <input
            type="number"
            id={id}
            className="outline-none w-full bg-transparent py-1.5"
            placeholder="Amount"
            disabled={amountDisabled}
            value={amount.toFixed(2)}
            onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
            />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
            <p className="text-black/40 mb-2 w-full">Currency Type</p>
            <select
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
            value={selectedCurrency}
            onChange={(e) => { onCurrencyChange && onCurrencyChange(e.target.value)}}
            disabled={currencyDisabled}
            >
                {currencyOption.map((curr) => (
                    <option key={curr} value={curr}>{curr}</option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default InputBox