"use client"
import {useState} from 'react'
export default function Boton() {
   var[CountEquipo1, setCountEquipo1]= useState(0)
   var[CountEquipo2, setCountEquipo2]= useState(0)
  const handlemasDetener = () =>{
    setCountEquipo1(CountEquipo1++)
    setCountEquipo2(CountEquipo2++)
    if(CountEquipo1 ==25 || CountEquipo2==25){
      console.log("Equipo ganador 1")
      return (useState(0) )
    }

  }

   return (
    <>  
    <div>  
    <div class="puntosIncrementados">
    <button class="Puntos" onClick={handlemasDetener} >
           <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
         
        </button>
        <button class="Puntos" onClick={handlemasDetener}>
       <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-minus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /></svg>
         
        </button>
       
       </div>
    
       <span >
        {CountEquipo1}
        {CountEquipo2}
       </span>
       </div>
        </>

  )
}
