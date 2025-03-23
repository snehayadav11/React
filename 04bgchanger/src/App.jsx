import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    
    <div className='w-full h-screen '
      style={{backgroundColor: color}}
     > 
     <div className='fixed flex flex-wrap justify-center top-80 inset-x-0 px-2'>{/*Test yeh comment isliye kiya taki pata chle dono kisliye kar rahe h */}
     <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>{/*Test yeh dono line kya kar rahe h dekhna ho toh uncomment kar do test ko pata laguga*/}
          <button
          onClick={() =>setColor("red")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "red"}}>Red
          </button>

          <button
          onClick={() =>setColor("purple")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "purple"}}>Purple
          </button>

          <button
          onClick={() =>setColor("green")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "green"}}>Green
          </button>

          <button
          onClick={() =>setColor("blue")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "blue"}}>Blue
          </button>

          <button
          onClick={() =>setColor("yellow")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "yellow"}}>Yellow
          </button>

          <button
          onClick={() =>setColor("pink")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "pink"}}>Pink
          </button>

          <button
          onClick={() =>setColor("lavender")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "lavender"}}>Lavender
          </button>

          <button
          onClick={() =>setColor("orange")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "Orange"}}>Orange
          </button>

     </div>
      </div>  
      
          
   </div> 
  )
}

export default App
