import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)
  const [message, setMessage] = useState('');
  // let counter = 5

  const addValue = () =>{
    if (counter < 20){
    console.log("clicked",  counter);
    counter = counter +1 
    setCounter(counter)
    }else {
      window.alert('Count reached the limit of 20');
    }
  }
  const removeValue = () =>{
    if (counter > 0){
    console.log("removeClick",counter);
    counter = counter - 1
    setCounter(counter)
    }else{
      window.alert('Count cannot go below zero');
    }
  }
  return (
    <>
       <div>chai aur react</div>
       <h2>Couter value : {counter}</h2>

       <button
       onClick = {addValue}
       >
        ADD value{counter}</button>
       <br />
       <button
       onClick={removeValue}
       >remove value{counter}</button>
       <p>footer : {counter}</p>
    </>
  )
}

export default App
