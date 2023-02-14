import { useState, useEffect } from 'react';
import './styles/app.scss';

function App() {

  const [loan, setLoan] = useState(3300000)
  const [firstPay, setFirstPay] = useState(420000)
  const [term, setTerm] = useState(60)

  const [min, setMin] = useState();
  const [max, setMax] = useState();

  const [sum, setSum] = useState(4467313);

  const [monthPay, setMonthPay] = useState(114455);

  const [percent, setPercent] = useState(10);

useEffect(()=>{
  const min = 10/100 *loan
  setMin(min)
  const max = 60/100 * loan
  setMax(max)

},[loan,min,max])

useEffect(()=>{
 const percent =  Math.round(firstPay * 100 / loan);
 setPercent(percent)
},[firstPay,loan])

useEffect(()=>{
  const monthPay = ((+loan - +firstPay) * (0.05 * Math.pow((1+0.05), +term) / (Math.pow((1 + 0.05), +term) - 1))).toFixed(0)
  setMonthPay(monthPay)
},[loan,firstPay,term])

useEffect(()=>{
  const sum = (+firstPay + +term * +monthPay).toFixed(0)
  setSum(sum)
},[monthPay,firstPay,term])


  return (
    <div className="App">
      <section className='calculator'>
        <h2 className='calculator__title'>Рассчитайте стоимость автомобиля в лизинг</h2>

 
      <div>
        <label htmlFor="loan">Желаемая сумма кредита</label>
        <input type='text' onChange={(e)=> setLoan(e.target.value)} value={loan}></input>
        <input onChange={(e)=>setLoan(e.target.value)} type="range" id="loan" name="loan" 
              min="1500000" max="10000000" value={loan} step="10000">
        </input>
        
      </div>
      <div>
        <label htmlFor="cowbell">Первоначальный взнос</label>
        <input type='text' onChange={(e)=> setFirstPay(e.target.value)} value={firstPay}></input>
        <input onChange={(e)=>setFirstPay(e.target.value)} type="range" id="cowbell" name="cowbell" 
              min={min} max={max} value={firstPay} step="10000">
        </input>
        
      </div>
      <div>
        <label htmlFor="term">Срок лизинга</label>
        <input type='text' onChange={(e)=> setTerm(e.target.value)} value={term}></input>
        <input onChange={(e)=>setTerm(e.target.value)} type="range" id="term" name="term" 
              min="6" max="120" value={term} step="1">
        </input>
        
      </div>
      <div>{sum}</div>
      <div>{monthPay}</div>
      <div>{percent}</div>
      </section>
    </div>
  );
}

export default App;
