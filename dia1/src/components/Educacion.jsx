import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

function Educacion() {
  const [editingEducation, setEditingEducation] = useState(false);
  const [newEducation, setNewEducation] = useState('');
  const [selectedEducation, setSelectedEducation] = useState('');
  const [educations, setEducations] = useState([
    "Funval desarrollo web full stack julio-diciembre 2023",
    "Universidad Nacional de San Cristóbal de Huamanga Egresado Ciencias sociales 2017 - 2023",
    "Gran unidad escolar Mariscal Cáceres Ayacucho 2006"
  ]);

  const handleAddEducation = () => {
    if (newEducation) {
      setEducations([...educations, newEducation]);
      setNewEducation('');
    }
  };

  const handleRemoveEducation = () => {
    const updatedEducations = educations.filter((education) => education !== selectedEducation);
    setEducations(updatedEducations);
    setSelectedEducation('');
  };

  return (
    <div className="experience">
      <h3>EDUCACIÓN</h3>
      <select
        value={selectedEducation}
        onChange={(e) => setSelectedEducation(e.target.value)}
      >
        <option value="">Selecciona un elemento</option>
        {educations.map((education, index) => (
          <option key={index} value={education}>
            {education}
          </option>
        ))}
      </select>
      <button onClick={() => setEditingEducation(true)}>Agregar educación</button>
      {editingEducation && (
        <div>
          <input
            type="text"
            value={newEducation}
            onChange={(e) => setNewEducation(e.target.value)}
          />
          <button onClick={handleAddEducation}>Agregar<FontAwesomeIcon icon={faPlus} /></button>
          <button onClick={() => setEditingEducation(false)}>Cancelar</button>
        </div>
      )}
      {selectedEducation && (
        <div>
          <p>Seleccionaste: {selectedEducation}</p>
          <button onClick={() => setSelectedEducation('')}>Deseleccionar</button>
          <button onClick={handleRemoveEducation}>
            Eliminar<FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      )}
    </div>
  );
}

export default Educacion;


