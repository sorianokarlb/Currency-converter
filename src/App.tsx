import { useState } from "react"
import useCurrencyInfo from "./hooks/useCurrencyInfo"
import { InputBox } from "./components/index"


function App() {

  const [amount, setAmount] = useState<number>(0)
  const [from, setFrom] = useState<string>('usd')
  const [to, setTo] = useState<string>('php')
  const [convertedAmount, setConvertedAmount] = useState<number>(0)

  const currencyInfo:Record<string,number> = useCurrencyInfo(from);
  const options:string[] = Object.keys(currencyInfo);

  const swap = () => {
    const tempFrom = from;
    setFrom(to);
    setTo(tempFrom);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div 
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{backgroundImage: `url(https://images.pexels.com/photos/5912629/pexels-photo-5912629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border boarder-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
            <div className="w-full mb-1">
              <InputBox 
              label="from"
              amount={amount}
              currencyOption={options}
              onCurrencyChange={(currency) => {setFrom(currency)}}
              onAmountChange={(amount) => {setAmount(amount)}}
              selectedCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-purple-800 text-white px-2 py-0.5"
              onClick={swap}>Swap</button>
            </div>
            <div className="w-full mb-1">
              <InputBox 
              label="to"
              currencyOption={options}
              amount={convertedAmount}
              onCurrencyChange={(currency)=>setTo(currency)}
              selectedCurrency={to}
              amountDisabled={true}
              />
            </div>
            <button
            type="submit"
            className="w-full bg-purple-800 text-white px-4 py-3 rounded-lg"
            >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
