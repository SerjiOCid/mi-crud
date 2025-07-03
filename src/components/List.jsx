import React from 'react';
import Item from './Item';

function List({ evaluaciones, eliminarEvaluacion, editarEvaluacion }) {
  return (
    <div className="card">
      <h2>Evaluaciones Guardadas</h2>
      {evaluaciones.length === 0 ? (
        <p>No hay evaluaciones guardadas aún. ¡Agrega una!</p>
      ) : (
        <ul>
          {evaluaciones.map((evaluacion) => (
            <Item
              key={evaluacion.id}
              evaluacion={evaluacion}
              eliminarEvaluacion={eliminarEvaluacion}
              editarEvaluacion={editarEvaluacion}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default List;