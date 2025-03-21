{/* <div class="md:flex">
  <div class="md:flex-shrink-0">
    <img class="rounded-lg md:w-56" src="https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?cs=srgb&dl=pexels-energepic-com-27411-313690.jpg&fm=jpg&_gl=1*3bzbap*_ga*MTM5NTE4MzY3NS4xNzQyNDczMDAx*_ga_8JE65Q40S6*MTc0MjQ3MzAwMC4xLjEuMTc0MjQ3MzExNi4wLjAuMA.." alt="Woman Sitting in Front of Macbook" />
  </div>
  <div class="mt-4 md:mt-0 md:ml-6">
    <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">Marketing</div>
    <a href="#" class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">Finding customers for your new business</a>
    <p class="mt-2 text-gray-600">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
  </div>
  </div> aise comment karna h */}
import react from 'react'

function Card({title , src , alt}){
    return(
      <div className="max-w-xs p-6 rounded-md shadow-md bg-black mb-6">
      <img
        src={src}
        alt={alt}
        className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
          {title}
        </span>
        <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
      </div>
      <p className="text-gray-300">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
        amet
        
      </p>
      
    </div>
    
    )
}
export default Card