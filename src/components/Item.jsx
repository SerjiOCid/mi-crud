import React from 'react';

function Item({ evaluacion, eliminarEvaluacion, editarEvaluacion }) {
  const obtenerEscala = (promedio) => {
    const p = parseFloat(promedio);
    if (p >= 6.5) return <span className="destacado">Destacado</span>;
    if (p >= 5.6) return <span className="buen-trabajo">Buen trabajo</span>;
    if (p >= 4.0) return <span className="con-mejora">Con mejora</span>;
    return <span className="deficiente">Deficiente</span>;
  };

  return (
    <li>
      <div className="info">
        <div><strong>Alumno:</strong> {evaluacion.nombre}</div>
        <div><strong>Asignatura:</strong> {evaluacion.asignatura}</div>
        <div><strong>Promedio:</strong> {evaluacion.promedio}</div>
        <div>{obtenerEscala(evaluacion.promedio)}</div>
      </div>
      <div className="actions">
        <button className="editar" onClick={() => editarEvaluacion(evaluacion)}>
          Editar
        </button>
        <button className="eliminar" onClick={() => eliminarEvaluacion(evaluacion.id)}>
          Eliminar
        </button>
      </div>
    </li>
  );
}

export default Item;