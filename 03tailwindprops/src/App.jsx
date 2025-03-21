import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-yellow-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card title='Andaman & Nicobar' src="https://images.pexels.com/photos/4870581/pexels-photo-4870581.jpeg?cs=srgb&dl=pexels-roman-odintsov-4870581.jpg&fm=jpg&_gl=1*rs6vdx*_ga*MTM5NTE4MzY3NS4xNzQyNDczMDAx*_ga_8JE65Q40S6*MTc0MjU1MDY0OC4zLjEuMTc0MjU1MDc5Ny4wLjAuMA.."
        alt="Outdoor Swimming Pool in Tropical Garden"/>
      <Card title='SriNagar' src="https://images.pexels.com/photos/15407672/pexels-photo-15407672/free-photo-of-person-standing-on-river-bank-in-snow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="photo-of-person-standing-on-river-bank-in-snow"/>
        
      
    </>
  )
}

export default App
