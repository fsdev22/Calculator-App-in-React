import { useState } from "react"


function App() {
  const [calc, setCalc] = useState('')
  const [res, setres] = useState('')
  const ops = ['+', '-', '.', '/', '*']

  const updateCalculator = (value) => {
    if(ops.includes(value) && calc==='' || ops.includes(value) && ops.includes(calc.slice(-1))){
      return
    }
    setCalc(calc + value)
    if(!ops.includes(value)){
      setres(eval(calc+value).toString())
    }
  }

  const calculate = ()=>{
    setCalc(eval(calc).toString())
  }

  const createDigits = () => {
    const digits = []
    for (let i = 1; i < 10; i++) {
      digits.push(<button onClick={() => updateCalculator(i.toString())} key={i}>{i}</button>)
    }
    return digits
  }

  const deleteLst = ()=>{
    if(calc===''){
      return
    }
    const value = calc.slice(0,-1)
    setCalc(value)
  }
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {res ? <span>{res}</span> : ''}
          {calc || "0"}
        </div>
        <div className="operators">
          <button onClick={() => updateCalculator('+')}>
            +
          </button>
          <button onClick={() => updateCalculator('-')}>-</button>
          <button onClick={() => updateCalculator('/')}>/</button>
          <button onClick={() => updateCalculator('*')}>*</button>
          <button onClick={deleteLst}>
            DEL
          </button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalculator('0')}>0</button>
          <button onClick={() => updateCalculator('.')}>.</button>
          <button onClick={() => calculate('=')}>=</button>

        </div>
      </div>
    </div>
  );
}

export default App;
