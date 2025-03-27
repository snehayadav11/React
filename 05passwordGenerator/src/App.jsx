import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [copyText, setCopyText] = useState("Copy")// ✅ Copy button text state
  const passwordRef = useRef(null) // useRef hook


  //use Callback hook basicalyy store kar lets h cache m jo b inputs keh skte h yahan p taki jo rkhna h vo rakha jaye or jo ni lena h vo usko chor detah jese yahap p passwords k sath hora h
  //let password generate
//   useCallback ka kaam hai memoization (yaani unnecessary re-creation se bachana).
// Agar dependency [length, numAllowed, charAllowed, setPassword] me se koi change hoti hai, tabhi function dobara create hoga.
  
// ✅ Password Generator Function
  const passwordGenerator = useCallback(() =>{
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str += "123456789"
    if(charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)//+ 1 remove kar dena chye)
      pass += str.charAt(char)

    }
    setPassword(pass)

  },[length, numAllowed, charAllowed, setPassword])

  //Ye ensure karta hai ki jab bhi user settings change kare 
  // (e.g. length badhaye ya numbers ya special characters allow kare), toh password automatically update ho jaye. 🎉
  
  // ✅ Auto-update password when settings change

  useEffect(() => {
    passwordGenerator()
  },[length,numAllowed,charAllowed,passwordGenerator])

 // ✅ Copy Function
 const handleCopy = () => {
  if (passwordRef.current) {
    passwordRef.current.select(); // 🔹 Auto-select password text
    window.navigator.clipboard.writeText(password); // 🔹 Copy to clipboard
    setCopyText("Copied!"); // 🔹 Change button text
  }
};
 
 // ✅ Reset "Copied!" to "Copy" when password changes
 useEffect(() => {
  setCopyText("Copy");
}, [password]);


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-400'>

        <h1 className='text-yellow-500 text-center my-2'>Password generator</h1>

        <div className='flex shadow rounded-lg  overflow-hidden mb-4 bg-white'>

          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}  // ✅ Input reference for auto-select
          />

           <button 
           onClick={handleCopy}  //✅ Copy button function
           className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>{copyText}
           </button>

        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>

            <input 

            type="range"
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}

             />

             <label>Length: {length}</label>

          </div>

          <div className="flex items-center gap-x-1">
           <input
             type="checkbox"
             defaultChecked={numAllowed}
             id="numberInput"
             onChange={() => {
               setNumAllowed((prev) => !prev);
              }}
            />

              <label htmlFor="numberInput">Numbers</label> 

          </div>

          <div className="flex items-center gap-x-1">
           <input
               type="checkbox"
               defaultChecked={charAllowed}
               id="characterInput"
               onChange={() => {
                   setCharAllowed((prev) => !prev )
               }}
           />
           <label htmlFor="characterInput">Characters</label>
          </div>
           
        </div>

      </div>

    </>
  )
}

export default App
