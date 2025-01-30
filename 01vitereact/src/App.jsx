
/*import Chai from "./chai"
function App() {
  

  return (
    <>
    
      <h1>Chai aur react | sneha yadav </h1>
      <Chai />
    </>
  )
}

export default App

*/

// variable injection in the above code

import Chai from "./chai"
function App() {
  const username = "Sneha Yadav"

  return (
    <>
      
      <h2>Chai aur react username❌ </h2>
      <h1>Chai aur react {username}✔️</h1>
      <Chai />
    </>
  )
}// just like in js in string interpolation`${username}` yeh jo curly braces k andar hoga usko bolte h 
//🚨🚨🚨🚨🚨🚨 interview pov (expression / evalvated expression ) it means final outcome ayga na ki if conditon true h toh or false h toh
// keeep in  mind
// ab dekhenge ki ku n likhte yaha p hum if vgera toh for that see ki jb hum react elemnt banate h toh 
// pele toh type lete h then props then childreen then hum variable inject rte h 

export default App

