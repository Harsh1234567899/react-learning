import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyinfo from './hooks/useCuurencyinfo.js'
import { useEffect } from 'react'
function App() {
  const [amount, setAmount] = useState("")
  const [from,setFrom] = useState("usd")
  const [to,setTo] = useState("inr")
  const [convertAmount,setConvertAmount] = useState("")
  
  const currencyInfo =  useCurrencyinfo(from)

  const optionsKeys = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertAmount(amount)
    setAmount(convertAmount)
  }
  const convertedAmount = () => {
    
 
    setConvertAmount(amount * currencyInfo[to])
  }
  useEffect(()=> {
    convertedAmount()
  },[amount , swap , from , to])
  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('http://as2.ftcdn.net/v2/jpg/09/48/27/77/1000_F_948277793_LhV63KGQdNErZcKkZ8rJLFslCZUnQWlC.jpg')",
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // convertedAmount()
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={optionsKeys}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                  
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 active:bg-blue-400"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertAmount}
                  currencyOptions={optionsKeys}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
              <p  className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg text-center">
                Amount Convert {from} to {to}
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
