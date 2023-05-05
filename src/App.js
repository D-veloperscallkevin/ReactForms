import { useState } from 'react';
import './App.css';
import Header from './Header';
import Formulario from './Formulario';
import Pacientes from './Pacientes';

function App() {
    const [pacientes, setPacientes] = useState([])

  return (
    <div className='App'>
      <div className='form'>
      <Header titulo="Registrar el paciente"/>
      <Formulario
      pacientes={pacientes}
      setPacientes={setPacientes}/>
      </div>
      <div className='datos'>
        <Header titulo="Informacion del paciente"/>
        {pacientes.map((paciente)=>{
        return <Pacientes pacientes={pacientes} setPacientes={setPacientes} 
        nombre={paciente.mascota} 
        dueno={paciente.dueno} 
        sintom={paciente.sintom} 
        fecha={paciente.fecha} 
        hora={paciente.hora} 
        />
        })}
      </div>
    </div>
  );
}

export default App;
