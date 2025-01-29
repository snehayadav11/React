// 2 comment line 10 s 18 tako ko hum ko inject krna h jese ki hum root m h1 inject krte the likewise

function customRender(reactElement,container){
   /*const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   domElement.setAttribute('href',reactElement.props.href)
   domElement.setAttribute('target',reactElement.props.target)

   container.appendChild(domElement)
   */

   // ab hum toda modular method dekhenge kuki what i kafi sare props hote toh ek ek krke toh set krte ni toh hum loop laga k use krenge ab
   // jisme dom element create krna or innerhtml inject krna same rhega
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   for (const prop in reactElement.props) {
      if(prop === 'children') continue;//yeh in case agar props k andar children likh dete h toh
     domElement.setAttribute(prop,reactElement.props[prop])
 }
 container.appendChild(domElement)
}




// 2 ⬇️
 const reactElement = {
    type: 'a',
    props: {
        href:'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}
// 1 ⬇️
const mainContainer = document.querySelector('#root')
// ab mko ek a tag ko render krna h jese ki hum ek app component m h1 render karate the
// ab hum 2 cooment p aise hi a tag ko lenge jese actual m react dekhta h a tag ko 

customRender(reactElement,mainContainer)