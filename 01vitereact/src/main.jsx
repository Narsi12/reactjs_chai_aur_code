import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

// const recatElement = {
//   type :'a',
//   props: {
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visist Google</a>
)

const nameuser = "narsimha ch"

const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to google',
  nameuser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement   
)
