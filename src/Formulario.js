import React, {useState} from "react";
import './Formulario.css'
export default function Formulario({pacientes, setPacientes}){
    const [mascota, setMascota] = useState("")
    const [dueno,setDueno] = useState("")
    const [sintom,setSintom] = useState("")
    const [fecha,setFecha] = useState("")
    const [hora,setHora] = useState("")

function agregarPaciente(){
    const informacion={
        mascota,
        dueno,
        sintom,
        fecha,
        hora
    }
    setPacientes([...pacientes, informacion])

    setMascota("")
    setDueno("")
    setSintom("")
    setFecha("")
    setHora("")
}

return (
    <div className="move"> 
        <form className="inputForm" action=""> 
            <label htmlFor="mascota">Nombre de la mascota</label>
            <input id="mascota" onChange={(e) => {setMascota(e.target.value)}} value={mascota} type="text"></input>
            <label htmlFor="">Nombre del dueño</label>
            <input onChange={(e) => {setDueno(e.target.value)}} value={dueno} type="text"></input>
            <label htmlFor="">Describa los síntomas</label>
            <input onChange={(e) => {setSintom(e.target.value)}} value={sintom} type="text"></input>
            <label htmlFor="">Fecha</label>
            <input onChange={(e) => {setFecha(e.target.value)}} value={fecha} type="text"></input>
            <label htmlFor="">Hora</label>
            <input onChange={(e) => {setHora(e.target.value)}} value={hora} type="text"></input>

            <button onClick={agregarPaciente} type="button">Agregar</button>
        </form>
    </div>
)
}