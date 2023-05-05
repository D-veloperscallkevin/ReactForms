import React from "react";
import "./Pacientes.css"
export default function Pacientes({pacientes, setPacientes, nombre, dueno, sintom, fecha, hora}){
    const eliminarCita=()=>{
        const newPacientes=pacientes.filter(paciente => paciente.dueno != dueno);
        setPacientes(newPacientes)
      }
    return(
        <div className="mover">
            <div className="paciente">
                <h2>Nombre: {nombre} </h2>
                <h2>Dueño: {dueno} </h2>
                <h2>Sintomas: {sintom}</h2>
                <h2>Fecha: {fecha}</h2>
                <h2>Hora: {hora}</h2>
                <button onClick={eliminarCita}>Eliminar Cita</button>
            </div>
        </div>
    )
}