
import { useState } from "react";
import ".src/App.css" /* styles  */;
import ContactoCard from ".src/assets/components/ContactoCard.jsx";
import FormularioContacto from ".src/assets/components/FormularioContacto.jsx";

export default function App() {
const [contactos, setContactos] = useState([
    {
      id: 1,
      nombre: "Juan",
      telefono: "3093237",
      correo: "juan@sena.edu.co",
      etiqueta: "estudiante",
    },
    {
      id: 2,
      nombre: "Camilo",
      telefono: "3105458578",
      correo: "camilo@sena.edu.co",
      etiqueta: "Instructor",
    },
    {
      id: 3,
      nombre: "Sarrazola",
      telefono: "3105458578",
      correo: "sarrazola@sena.edu.co",
      etiqueta: "aprendiz",
    },
    
    {
      id: 4,
      nombre: "Agudelo",
      telefono: "3093237",
      correo: "agudelo@gmail.com",
      etiqueta: "Tecnico",
    },
    {
      id: 5,
      nombre: "Bertha",
      telefono: "3093237",
      correo: "bertha@gmail.com",
      etiqueta: "madre",
    },
  ]);

  const agregarContacto = (nuevo) => {
setContactos([...contactos, nuevo]);
};

  return (
    <main className="app-container">
      <h1 className="app-title">Agenda ADSO 📒</h1>

      <p className="app-subtitle">Contactos guardados</p>
      <FormularioContacto onAgregar={agregarContacto} />

      {contactos.map((c) => (
        <ContactoCard
          key={c.id}
          nombre={c.nombre}
          telefono={c.telefono}
          correo={c.correo}
          etiqueta={c.etiqueta}
        />
      ))}

      <p className="app-nota">
        (Versión 0.1 - solo lectura, sin agregar ni editar todavía)
      </p>
    </main>
  );
}

