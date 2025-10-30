// FormularioContacto.jsx
import { useState } from "react";

export default function FormularioContacto() {
  // 1. Definimos el estado inicial como un objeto
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
  });

  // 2. Manejador del cambio de los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Copiamos el estado anterior y actualizamos solo el campo modificado
    setFormData({ ...formData, [name]: value });
  };

  // 3. Manejador del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // evita recargar la página
    alert(`Contacto guardado: ${formData.nombre} - ${formData.correo}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Nuevo contacto</h2>

      <label>Nombre:</label>
      <input
        type="text"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
      />

      <label>Correo:</label>
      <input
        type="email"
        name="correo"
        value={formData.correo}
        onChange={handleChange}
      />

      <label>Teléfono:</label>
      <input
        type="text"
        name="telefono"
        value={formData.telefono}
        onChange={handleChange}
      />

      <button type="submit">Guardar contacto</button>
    </form>
  );
}
