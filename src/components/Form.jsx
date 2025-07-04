import React, { useState, useEffect } from 'react';

function Form({ agregarOActualizarEvaluacion, evaluacionAEditar }) {
  const [nombre, setNombre] = useState('');
  const [asignatura, setAsignatura] = useState('');
  const [promedio, setPromedio] = useState('');

  useEffect(() => {
    if (evaluacionAEditar) {
      setNombre(evaluacionAEditar.nombre);
      setAsignatura(evaluacionAEditar.asignatura);
      setPromedio(evaluacionAEditar.promedio);
    } else {
      setNombre('');
      setAsignatura('');
      setPromedio('');
    }
  }, [evaluacionAEditar]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim() && asignatura.trim() && promedio.trim()) {
      agregarOActualizarEvaluacion({ nombre, asignatura, promedio });
      setNombre('');
      setAsignatura('');
      setPromedio('');
    }
  };

  return (
    <div className="card">
      <h2>{evaluacionAEditar ? 'Editar Evaluación' : 'Agregar Nueva Evaluación'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre del Alumno:</label>
          <input
            type="text"
            placeholder="Ej: Julio Iglesias"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label>Asignatura:</label>
          <input
            type="text"
            placeholder="Ej: Programacion Front End"
            value={asignatura}
            onChange={(e) => setAsignatura(e.target.value)}
          />
        </div>
        <div>
          <label>Promedio (0.0 - 7.0):</label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="7"
            placeholder="Ej: 5.5"
            value={promedio}
            onChange={(e) => setPromedio(e.target.value)}
          />
        </div>
        <button type="submit">
          {evaluacionAEditar ? 'Actualizar Evaluación' : 'Agregar Evaluación'}
        </button>
      </form>
    </div>
  );
}

export default Form;