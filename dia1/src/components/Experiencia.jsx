import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

function Experiencia() {
  const [editingEmployment, setEditingEmployment] = useState(false);
  const [newEmployment, setNewEmployment] = useState('');
  const [selectedEmployment, setSelectedEmployment] = useState('');
  const [employments, setEmployments] = useState([
    "Coordinador de investigación de mercados Ipsos Perú (Abril 2019 - Marzo 2021)",
    "Proveedor de campo Datum Internacional (Marzo 2014 - Diciembre 2018)",
    "Investigador German Institute of Global and Area Studies (GIGA) y Analysis Research Consulting(ARC) Jornada completa Agosto 2014 - Noviembre 2014",
    "Investigación Histórica Patronato Circuito Turístico Mariscal Cáceres · Jornada completa Junio 2013 - Diciembre 2013"
  ]);

  const handleAddEmployment = () => {
    if (newEmployment) {
      setEmployments([...employments, newEmployment]);
      setNewEmployment('');
    }
  };

  const handleRemoveEmployment = (employment) => {
    const updatedEmployments = employments.filter((item) => item !== employment);
    setEmployments(updatedEmployments);
  };

  return (
    <div className="experience">
      <h2>POOL RAMOS</h2>
      <div className="job">
        <h3>EMPLEO</h3>
        <p>Apasionado por la tecnología, con experiencia en investigación de mercados usando sistemas de información, trabajando distintos estudios cuantitativos y cualitativos.</p>
        <p>Me considero un profesional que continuamente acude al auto-aprendizaje, trabajo bajo presión y en base a metas, con capacidad de resolución de problemas de manera eficiente y rápida, lo cual ha beneficiado positivamente a las empresas en las que he trabajado.</p>
      </div>
      <div className="job">
        <h3>EXPERIENCIA PROFESIONAL</h3>
        <ul>
          {editingEmployment ? (
            <li>
              <input
                type="text"
                value={newEmployment}
                onChange={(e) => setNewEmployment(e.target.value)}
              />
              <button onClick={handleAddEmployment}>Agregar<FontAwesomeIcon icon={faPlus} /></button>
              <button onClick={() => setEditingEmployment(false)}>Cancelar</button>
            </li>
          ) : (
            <li>
              <button onClick={() => setEditingEmployment(true)}>Agregar empleo</button>
            </li>
          )}
          <li>
            <select onChange={(e) => setSelectedEmployment(e.target.value)}>
              <option value="">Selecciona un empleo</option>
              {employments.map((employment, index) => (
                <option key={index} value={employment}>
                  {employment}
                </option>
              ))}
            </select>
            {selectedEmployment && (
              <button onClick={() => handleRemoveEmployment(selectedEmployment)}>Eliminar<FontAwesomeIcon icon={faTrash} /></button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Experiencia;





