
// Este componente arma la pantalla completa y usa ContactoCard para cada persona.
import "./App.css"; // Importamos estilos de la app
import ContactoCard from "./components/ContactoCard.jsx"; // Importamos el componente hijo

export default function App() {
  // Esta es nuestra "base de datos" inicial quemada en el código
  const contactos = [
    {
      id: 1,
      nombre: "Carolina Pérez",
      telefono: "300 123 4567",
      correo: "carolina@sena.edu.co",
      etiqueta: "Compañera",
    },
    {
      id: 2,
      nombre: "Juan Díaz",
      telefono: "301 987 6543",
      correo: "juan@sena.edu.co",
      etiqueta: "Instructor",
    },
    {
      id: 3,
      nombre: "Luisa Martínez",
      telefono: "320 555 7788",
      correo: "luisa@sena.edu.co",
      etiqueta: "Cliente",
    },
    {
      id: 4,
      nombre: "Pedro Sánchez",
      telefono: "321 765 4321",
      correo: "pedro@sena.edu.co",
      etiqueta: "Compañera",
    },
    {
      id: 5,
      nombre: "María Sánchez",
      telefono: "321 987 6543",
      correo: "maria@sena.edu.co",
      etiqueta: "Instructor",
    },
    {
      id: 6,
      nombre: "Ana Pérez",
      telefono: "322 765 4321",
      correo: "ana@sena.edu.co",
      etiqueta: "Cliente",
    },
    {
      id: 7,
      nombre: "Juan Pérez",
      telefono: "323 987 6543",
      correo: "juan@sena.edu.co",
      etiqueta: "Instructor",
    },
    {
      id: 8,
      nombre: "Luis Pérez",
      telefono: "324 765 4321",
      correo: "luis@sena.edu.co",
      etiqueta: "Cliente",
    },
    {
      id: 9,
      nombre: "María Pérez",
      telefono: "325 987 6543",
      correo: "maria@sena.edu.co",
      etiqueta: "Instructor",
    },
  ];

  return (
    <main className="app-container">
      <h1 className="app-title">Agenda ADSO 📒</h1>

      <p className="app-subtitle">Contactos guardados</p>

      {/* Recorremos el arreglo contactos y pintamos una tarjeta por cada uno */}
      {contactos.map((c) => (
        <ContactoCard
          key={c.id}            // key única para React
          nombre={c.nombre}     // prop nombre
          telefono={c.telefono} // prop telefono
          correo={c.correo}     // prop correo
          etiqueta={c.etiqueta} // prop etiqueta (Cliente, Instructor, etc.)
        />
      ))}

      <p className="app-nota">
        (Versión 0.1 - solo lectura, sin agregar ni editar todavía)
      </p>
    </main>
  );
}

