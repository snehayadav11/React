import { StrictMode } from 'react'
import React from "react";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// tph yaha p hum apna ek function bana diye
function MyApp(){
  return(
    <div>
      <h1>Custom App | Sneha</h1>
    </div>
  )
}

// ab hum dekhenge ki agar react jese tree like covert krt h behind the scene agar usko vesa hi de de toh  b run hona chye lets see
// const reactElement = {
//   type: 'a',
//   props: {
//       href:'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }// agar hum isko run krne k liye agar aise hi de denge
// ki <reactElement /> toh b run ni hoga agar reactElement ka R capital b kar dneg jo ki humne padha h toh b ye run nhi hoga
// kuki hum yahan object call kara rahe h naki function or object toh simple call hojata h toh hum ko bas ReactElement likhna h fr b vo run nahi hoga

// passing the above in react's way

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)// yeh jo b likha h object m hi convert hoga toh fr kyu upar wala nai chla kuki uska nam galat h isliye kuki vo hum banaye h humko pata h but smne wala toh kuch or way m aecept kr raha h na
// ab jese hi anotherElement likhenge my app ki jagah ye work krega


// isme jo first expected parameter h vo h tag
  // second parameter hota h object ya props khelo isme jo b paragraph tittle jo b attributes hote h isme aate h
  // iske baad diresct text hota h/// ab hum ye kese smj skteh ki line 13 k liye vo kese syntax use kr rahe h matlb react
// line 16 wale ko comment krek usi ko react elemnt banate h vese banayenge


//🚨🚨🚨🚨🚨🚨🚨🚨 ab yaha dekhenge kyu ni lagate if else evalated expreesion m 🚨🚨🚨🚨🚨🚨🚨
const anotherUser = "Aman"

const reactElement = React.createElement(
  'a',
  {href: "https://google.com" , target: "_blank"},
  'Click me to visit google',
  anotherUser
)// at the end ye toh h ek object na toh isme to iksa b synatx hota h todi na if else ghusa denge isliye yaha evalted expression dalta h


createRoot(document.getElementById('root')).
render
(
  reactElement 
)

// ab hum yaha tak toh samja gaye ab hum app m jake dekhenge ki hum html toh likh lenge but
// hum jsx m variable kese inject krenge


  /*<StrictMode>
     {/* <App />  */
     /* <MyApp />  kuki ye ek funtn h toh sirf parenthesis s b execute hona chye or ye syntax toh babel ka h
      MyApp() 
    ReactElement yeh isliye run nahi hua kuki vo hmara custom react tha jo humne banay tha pr react toh certain way ya uska apna way h jisme vo run hoga isliye vo run  nahi hua
    toh hum apna na bana k react k way m denge a tag ko
  // </StrictMode>
  // sirf MyApp() krne s b kamm toh kar raha h par aisa nahi krna chaye kuki code convention optimisation or baki log kese code likh rahe h unsb chizon m problem aajata h
  // */



/* hum idhar cusyom react s apna khud library banane k baad aaye h so 
// vaha s ye dekha ki app jo basically h vo ek function h jisme jsx hota h bas vo hum render kara dete h div ya koi tag element p
// toh ab hum dekhenge yahi p ek function bana k ki kya vo kam krta h kuki vo ek function h toh <App /> aise syntax m na likh k
// App() aisw b toh exwcute kara skte h toh lets see hota h ya nahi */
