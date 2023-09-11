/*Info.jsx*/
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faEnvelope, faPhone, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

function Info() {
  const [editingSkill, setEditingSkill] = useState(false);
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState([
    'Trabajo bajo presión y en base a metas',
    'Capacidad de resolución de problemas de manera eficiente y rápida',
    'Continuamente acude al auto-aprendizaje',
  ]);

  const [editingLanguage, setEditingLanguage] = useState(false);
  const [newLanguage, setNewLanguage] = useState('');
  const [languages, setLanguages] = useState(['Español', 'Inglés básico']);

  const [editingInterest, setEditingInterest] = useState(false);
  const [newInterest, setNewInterest] = useState('');
  const [interests, setInterests] = useState(['Javascript', 'React', 'Node']);

  const handleAddSkill = () => {
    if (newSkill) {
      setSkills([...skills, newSkill]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  const handleAddLanguage = () => {
    if (newLanguage) {
      setLanguages([...languages, newLanguage]);
      setNewLanguage('');
    }
  };

  const handleRemoveLanguage = (index) => {
    const updatedLanguages = languages.filter((_, i) => i !== index);
    setLanguages(updatedLanguages);
  };

  const handleAddInterest = () => {
    if (newInterest) {
      setInterests([...interests, newInterest]);
      setNewInterest('');
    }
  };

  const handleRemoveInterest = (index) => {
    const updatedInterests = interests.filter((_, i) => i !== index);
    setInterests(updatedInterests);
  };

  return (
    <div className="personal-info">
      <img src="src/assets/foto.jpg" alt="" />
      <h4>PERFIL</h4>
      <p><FontAwesomeIcon icon={faHouse}/> Dirección: Ayacucho, Huamanga</p>
      <p><FontAwesomeIcon icon={faEnvelope}/> Email: poolramos@gmail.com</p>
      <p><FontAwesomeIcon icon={faPhone}/> Teléfono: +51992189524</p>

      <h4>HABILIDADES</h4>
      <select>
        {skills.map((skill, index) => (
          <option key={index} value={skill}>
            {skill}
          </option>
        ))}
      </select>
      {editingSkill ? (
        <div>
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
          />
          <button onClick={handleAddSkill}>Agregar<FontAwesomeIcon icon={faPlus}/></button>
          <button onClick={() => setEditingSkill(false)}>Cancelar</button>
        </div>
      ) : (
        <button onClick={() => setEditingSkill(true)}>Agregar habilidad</button>
      )}

      <h4>IDIOMAS</h4>
      <select>
        {languages.map((language, index) => (
          <option key={index} value={language}>
            {language}
          </option>
        ))}
      </select>
      {editingLanguage ? (
        <div>
          <input
            type="text"
            value={newLanguage}
            onChange={(e) => setNewLanguage(e.target.value)}
          />
          <button onClick={handleAddLanguage}>Agregar<FontAwesomeIcon icon={faPlus}/></button>
          <button onClick={() => setEditingLanguage(false)}>Cancelar</button>
        </div>
      ) : (
        <button onClick={() => setEditingLanguage(true)}>Agregar idioma</button>
      )}

      <h4>INTERESES</h4>
      <select>
        {interests.map((interest, index) => (
          <option key={index} value={interest}>
            {interest}
          </option>
        ))}
      </select>
      {editingInterest ? (
        <div>
          <input
            type="text"
            value={newInterest}
            onChange={(e) => setNewInterest(e.target.value)}
          />
          <button onClick={handleAddInterest}>Agregar<FontAwesomeIcon icon={faPlus}/></button>
          <button onClick={() => setEditingInterest(false)}>Cancelar</button>
        </div>
      ) : (
        <button onClick={() => setEditingInterest(true)}>Agregar interés</button>
      )}
    </div>
  );
}

export default Info;



