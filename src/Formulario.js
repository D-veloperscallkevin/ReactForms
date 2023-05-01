import React, {useState} from "react";
import './Formulario.css'
export default function Formulario(){
    const [pacientes, setPacientes] = useState([])
    const [mascota, setMascota] = useState("")
    const [dueno,setDueno] = useState("")

function agregarPaciente(){
    const informacion={
        mascota,
        dueno
    }
    setPacientes([...pacientes, informacion])

    setMascota("")
    setDueno("")
}

return (
    <div> 
        <form className="inputForm" action=""> 
            <label htmlFor="mascota">Nombre de la mascota</label>
            <input id="mascota" onChange={(e) => {setMascota(e.target.value)}} value={mascota} type="text"></input>
            <label htmlFor="">Nombre del dueño</label>
            <input onChange={(e) => {setDueno(e.target.value)}} value={dueno} type="text"></input>

            <button onClick={agregarPaciente} type="button">Agregar</button>
        </form>
    </div>
)
}