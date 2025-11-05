export default function ContactoCard({
  nombre,
  telefono,
  correo,
  etiqueta,
  onEliminar,
  empresa,
}) {
  return (
    <div className="card">
      <h3>{nombre}</h3>
      <p>📱 {telefono}</p>
      <p>✉️ {correo}</p>
      {empresa && <p>μ {empresa}</p>}
      {etiqueta && <span className="tag">{etiqueta}</span>}
      <button className="btn-eliminar" onClick={() => onEliminar(correo)}>
        Eliminar
      </button>
    </div>
  );
}



