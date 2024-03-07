// import Boton from "../../componente/Boton";
"use client"
import { useState } from "react"
import "./index.css"
import { Noto_Sans_Tamil_Supplement } from "next/font/google"

export default function Home() {

  var[CountEquipo1, setCountEquipo1]= useState(0)
  var[CountEquipo2, setCountEquipo2]= useState(0)
  var [Seet1, setSeet1]= useState(null)
  var [Seet2, setSeet2]= useState(null)
  var [Seet3, setSeet3] = useState(null)
  var [Seet4, setSeet4]= useState(null)
  var [Seet5, setSeet5] = useState(null)

  const Ganador = () => {
    const equipo1Sets = [Seet1, Seet2, Seet3, Seet4, Seet5].filter(set => set === "Equipo1").length;
    const equipo2Sets = [Seet1, Seet2, Seet3, Seet4, Seet5].filter(set => set === "Equipo2").length;

    if (equipo1Sets === 3) {
      return "Equipo 1"
      
    } else if (equipo2Sets === 3) {
      return "Equipo 2";
    } else {
      return null
      
    }
  };


const handlePuntosEquipo1 = () => {
    if (CountEquipo1 >= 24 && CountEquipo2 >= 24) {
      setCountEquipo1(CountEquipo1+1)
      if (CountEquipo1 - CountEquipo2 >= 2) {
        // Equipo 1 gana el set
        if (!Seet1) {
            setSeet1("Equipo1");
            setCountEquipo1(0);
            setCountEquipo2(0);
        } else if (!Seet2) {
            setSeet2("Equipo1");
            setCountEquipo1(0);
            setCountEquipo2(0);
        } else if (!Seet3) {
            setSeet3("Equipo1");
            setCountEquipo1(0);
            setCountEquipo2(0);
        } else if (!Seet4) {
            setSeet4("Equipo1");
            setCountEquipo1(0);
            setCountEquipo2(0);
        } else if (!Seet5) {
            setSeet5("Equipo1");
            setCountEquipo1(0);
            setCountEquipo2(0);
        }
    } else if (CountEquipo2 - CountEquipo1 >= 2) {
        // Equipo 2 gana el set
        if (!Seet1) {
            setSeet1("Equipo2");
            setCountEquipo1(0);
            setCountEquipo2(0);
        } else if (!Seet2) {
            setSeet2("Equipo2");
            setCountEquipo1(0);
            setCountEquipo2(0);
        } else if (!Seet3) {
            setSeet3("Equipo2");
            setCountEquipo1(0);
            setCountEquipo2(0);
        } else if (!Seet4) {
            setSeet4("Equipo2");
            setCountEquipo1(0);
            setCountEquipo2(0);
        } else if (!Seet5) {
            setSeet5("Equipo2");
            setCountEquipo1(0);
            setCountEquipo2(0);
        }
    }
    } else {
        // Continuar agregando puntos
        if (CountEquipo1 <= 24) {
          setCountEquipo1(CountEquipo1 + 1);
      } else {
        if(!Seet1){
                  setCountEquipo2(0)
                  setCountEquipo1(0)
                setSeet1("Equipo1")
                }else if(!Seet2) {
                  setCountEquipo2(0)
                  setCountEquipo1(0)
                  setSeet2("Equipo1")
                }else if(!Seet3){
                  setCountEquipo2(0)
                  setCountEquipo1(0)
                  setSeet3("Equipo1")
                }else if(!Seet4){
                  setCountEquipo2(0)
                  setCountEquipo1(0)
                  setSeet4("Equipo2")
                }else if(!Seet5){
                  setSeet5("Equipo1")
                }
              }
  
    }
  };
  



  const handleMasEquipo2 = () => {
    
    if (CountEquipo1 >= 24 && CountEquipo2 >= 24) {
      setCountEquipo2(CountEquipo2+1)
        if (CountEquipo2 - CountEquipo1 >= 2) {
          
          if(!Seet1){
            setCountEquipo2(0)
            setCountEquipo1(0)
          setSeet1("Equipo2")
          }else if(!Seet2) {
            setCountEquipo2(0)
            setCountEquipo1(0)
            setSeet2("Equipo2")
          }else if(!Seet3){
            setCountEquipo2(0)
            setCountEquipo1(0)
            setSeet3("Equipo2")
          }else if(!Seet4){
            setCountEquipo2(0)
            setCountEquipo1(0)
            setSeet4("Equipo2")
          }else if(!Seet5){
            setSeet5("Equipo2")
          }
        }
        else if (CountEquipo2 > 24 && CountEquipo1 - CountEquipo2 >= 2) {
          // Equipo 2 gana el set
          if(!Seet1){
            setCountEquipo2(0)
            setCountEquipo1(0)
          setSeet1("Equipo2")
          }else if(!Seet2) {
            setCountEquipo2(0)
            setCountEquipo1(0)
            setSeet2("Equipo2")
          }else if(!Seet3){
            setCountEquipo2(0)
            setCountEquipo1(0)
            setSeet3("Equipo2")
          }else if(!Seet4){
            setCountEquipo2(0)
            setCountEquipo1(0)
            setSeet4("Equipo2")
          }else if(!Seet5){
            setSeet5("Equipo2")
          }
      }
    } else {
      if (CountEquipo2 <= 24) {
        setCountEquipo2(CountEquipo2 + 1);
    } else {
      
    if(!Seet1){
      setCountEquipo2(0)
      setCountEquipo1(0)
    setSeet1("Equipo2")
    }else if(!Seet2) {
      setCountEquipo2(0)
      setCountEquipo1(0)
      setSeet2("Equipo2")
    }else if(!Seet3){
      setCountEquipo2(0)
      setCountEquipo1(0)
      setSeet3("Equipo2")
    }else if(!Seet4){
      setCountEquipo2(0)
      setCountEquipo1(0)
      setSeet4("Equipo2")
    }else if(!Seet5){
      setSeet5("Equipo2")
    }
    }

    }
};

  const handleMenos1= () =>{
    setCountEquipo1(CountEquipo1-1)
   }
   const handleMenos2=() => {
    setCountEquipo2(CountEquipo2-1)
   }
  return (
    <>
    <header class="titulo">
      PARTIDOS DE VOLEIBOL
    </header>
    <div class="equipos">
      <div class="EquipoSolo">
        <p class="textoEquipos">Equipo 1</p>
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shirt-filled" width="250" height="250" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14.883 3.007l.095 -.007l.112 .004l.113 .017l.113 .03l6 2a1 1 0 0 1 .677 .833l.007 .116v5a1 1 0 0 1 -.883 .993l-.117 .007h-2v7a2 2 0 0 1 -1.85 1.995l-.15 .005h-10a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-7h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-5a1 1 0 0 1 .576 -.906l.108 -.043l6 -2a1 1 0 0 1 1.316 .949a2 2 0 0 0 3.995 .15l.009 -.24l.017 -.113l.037 -.134l.044 -.103l.05 -.092l.068 -.093l.069 -.08c.056 -.054 .113 -.1 .175 -.14l.096 -.053l.103 -.044l.108 -.032l.112 -.02z" stroke-width="0" fill="currentColor" /></svg>
       <div class="puntosIncrementados">
    <button class="Puntos" onClick={handlePuntosEquipo1} >
           <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
           </button>
           <button class="Puntos" onClick={handleMenos1}>
       <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-minus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /></svg>
         
        </button>
        <span >
        {CountEquipo1}

       </span>
        </div>
        <div class="vs"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-vs" width="150" height="150" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 12c0 5.523 4.477 10 10 10s10 -4.477 10 -10s-4.477 -10 -10 -10s-10 4.477 -10 10" /><path d="M14 14.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75" /><path d="M7 9l2 6l2 -6" /></svg></div>

      
      
      <div class="EquipoSolo">
        <p class="textoEquipos">Equipo 2</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trophy-filled" width="250" height="250" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2.17a3 3 0 1 1 0 5.659v.171a6.002 6.002 0 0 1 -5 5.917v2.083h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-2.083a6.002 6.002 0 0 1 -4.996 -5.692l-.004 -.225v-.171a3 3 0 0 1 -3.996 -2.653l-.003 -.176l.005 -.176a3 3 0 0 1 3.995 -2.654l-.001 -2.17a1 1 0 0 1 1 -1h10zm-12 5a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm14 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z" stroke-width="0" fill="currentColor" /></svg>
        <div class="puntosIncrementados">
    <button class="Puntos" onClick={handleMasEquipo2} >
           <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
           </button>
           <button class="Puntos" onClick={handleMenos2}>
       <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-minus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /></svg>
         
        </button>
        <span >
        {CountEquipo2}

       </span>
        </div>
    </div>
    <div class="contenedorSets">
      <table class="">
       <thead >
        <tr >
          <th class="tabla">Ganador Primer Set</th>
          <th class="tabla">Ganador Segundo Set</th>
          <th class="tabla">Ganador Tercer Set</th>
          <th class="tabla">Ganador Cuarto Set</th>
          <th class="tabla">Ganador Quinto Set</th>
        </tr>
       </thead>
       <tbody>
        <tr>
          <td class="tabla" >{Seet1}</td>
          <td class="tabla">{Seet2}</td>
          <td class="tabla">{Seet3}</td>
          <td class="tabla">{Seet4}</td>
          <td class="tabla">{Seet5}</td>
        </tr>
       </tbody>
      </table>
    </div>
    <div>
      <h1>Ganador</h1>
      <section>{Ganador()}</section>
    </div>
    </div>
</div>
   
    </>
   
  );
}
