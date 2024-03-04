import Boton from "../../componente/Boton";
import "./index.css"
export default function Home() {
  return (
    <>
    <header class="titulo">
      PARTIDOS DE VOLEIBOL
    </header>
    <div class="equipos">
      <div class="EquipoSolo">
        <p class="textoEquipos">Equipo 1</p>
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shirt-filled" width="250" height="250" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14.883 3.007l.095 -.007l.112 .004l.113 .017l.113 .03l6 2a1 1 0 0 1 .677 .833l.007 .116v5a1 1 0 0 1 -.883 .993l-.117 .007h-2v7a2 2 0 0 1 -1.85 1.995l-.15 .005h-10a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-7h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-5a1 1 0 0 1 .576 -.906l.108 -.043l6 -2a1 1 0 0 1 1.316 .949a2 2 0 0 0 3.995 .15l.009 -.24l.017 -.113l.037 -.134l.044 -.103l.05 -.092l.068 -.093l.069 -.08c.056 -.054 .113 -.1 .175 -.14l.096 -.053l.103 -.044l.108 -.032l.112 -.02z" stroke-width="0" fill="currentColor" /></svg>
      <Boton/>
      
        </div>
        <div class="vs"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-vs" width="150" height="150" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 12c0 5.523 4.477 10 10 10s10 -4.477 10 -10s-4.477 -10 -10 -10s-10 4.477 -10 10" /><path d="M14 14.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75" /><path d="M7 9l2 6l2 -6" /></svg></div>

      
      
      <div class="EquipoSolo">
        <p class="textoEquipos">Equipo 2</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trophy-filled" width="250" height="250" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2.17a3 3 0 1 1 0 5.659v.171a6.002 6.002 0 0 1 -5 5.917v2.083h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-2.083a6.002 6.002 0 0 1 -4.996 -5.692l-.004 -.225v-.171a3 3 0 0 1 -3.996 -2.653l-.003 -.176l.005 -.176a3 3 0 0 1 3.995 -2.654l-.001 -2.17a1 1 0 0 1 1 -1h10zm-12 5a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm14 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z" stroke-width="0" fill="currentColor" /></svg>
        <Boton/>
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
          <td class="tabla"></td>
          <td class="tabla"></td>
          <td class="tabla"></td>
          <td class="tabla"></td>
          <td class="tabla"></td>
        </tr>
       </tbody>
      </table>
    </div>
    </div>

   
    </>
   
  );
}
