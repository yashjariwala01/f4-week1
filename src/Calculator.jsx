import React,{useState} from 'react'

const Calculator = () => {

const [num1,setNum1] = useState('')
const [num2,setNum2] = useState('')
const [ans,setAns] = useState('')
const [error,setError] = useState('')

const validInputs=()=>{
    if (num1 === "") {
        setError('Error :  Num1 cannot be empty');
        return false
    }
    else if (num2 === "") {
        setError('Error :  Num2 cannot be empty');
        return false
    }
    else if(isNaN(num1) || isNaN(num2)) {
        setError('Please enter valid numbers');
        return false;
    }
    else{
        return true;
    }
}

const operation=(event)=>{
    
   if(validInputs()){
    let operands = event.target.value;
    let operatingValue = num1 + operands +num2
    let result =eval(operatingValue)
    setAns(result)
   }
}

  return (
    <div className='main'>
    <h1>React Calculator</h1>
    <div className='inputs'>
      <input type="text" value={num1} onChange={(e)=>setNum1(e.target.value)} />
      <input type="text" value={num2} onChange={(e)=>setNum2(e.target.value)} />
    </div>
    <div className="btns">
        <button  value={"+"} onClick={operation}>+</button>
        <button value={'-'} onClick={operation}>-</button>
        <button value={'/'} onClick={operation}>/</button>
        <button value={'*'} onClick={operation}>*</button>
    </div>
    <div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {ans &&
                    <>
                        <div >{ans}</div>
                        <div style={{ color: 'green' }}>Success : Your result is shown above!</div>
                    </>
                }
        {/* {ans? <p>successfull</p>:<p>Error</p>} */}
        
        {/* <p>{error}</p>  */}
        <div>
        </div>
    </div>
    </div>
  )
}

export default Calculator
