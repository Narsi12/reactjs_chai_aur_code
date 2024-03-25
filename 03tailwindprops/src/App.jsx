import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myonj = {
    username : "narsimha",
    age : 23
  }

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
     <Card username = "chaiaurcode" someObjj = {myonj}  btnText="Visit Me"/>
      <Card username="narsimha" btnText = "click me"/>
     

    </>

    
  )
}

export default App
