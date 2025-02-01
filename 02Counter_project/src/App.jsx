import { useState } from 'react'//yeh hook use krne k liye import krte h
// yahan p react import nahi kar rahe h still kam hora h cause babbel _jsx underhhod jake sb kr raha h
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*function App() {
  //const [count, setCount] = useState(0)
let counter = 5
const addValue = () => {
  console.log(counter)
  counter++
}
  return (
    <>
      <h1>Y HOOKS are important!</h1>
      <h2>Let's see with the counter project</h2>
      <h3>Counter Value :  {counter}</h3> 
      <button onClick={addValue}>Add Value </button> 
      <button>Subtract Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}
here in hooks_yneedimg.png img u can see that even if the counter value is changing still the counter value is not changing here where the hooks come
into the picture where it is realted with ui updation it changes the value wherever it is present and as soon as changes occurs it reacts and comes into the picture
react react krti h variable k updation p

lets understand this with the help of somany counter variable at each button and a new footer where we can see how a variable changes at every place
toh kuki yaha ui m update hona h toh react apna hooks ka concept diya

🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨
//////////////lets now use the above code with  hook
use state jo h na vo state ko changek liye responsible h 
or iss change ko propagate kiya jata h ui k andar
use state ko default value true false array string objects kuch b de skte h even function bhi vo optimisde wala toda game h
*/

function App() {

  // 1 default value set krna --> useState(5) 
  // 2 s hemsha 2 chize milte h isliye array lenge
  // 3 pehla value dusra uska function ab app name kuch b de skte ho
  // setcounter ekk method h jo counter variable ko control krega

let [counter, setcounter] = useState(5)
//let counter = 5

const addValue = () => {
  if(counter == 20){
    setcounter(counter = 20)
  }
  else{
  setcounter(counter + 1)
}
}

const subtractValue = () => {
  if(counter > 0 ){
    setcounter(counter - 1)
  }
  else{
    setcounter(counter = 0)
  }
 }
 

  return (
    <>
      <h1>Y HOOKS are important!</h1>
      <h2>Let's see with the counter project</h2>
      <h3>Counter Value :  {counter}</h3> 
      <button onClick={addValue}>Add Value {counter} </button> 
      <button onClick={subtractValue}>Subtract Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}





export default App

 
