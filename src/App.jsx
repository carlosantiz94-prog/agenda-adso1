
import FormularioContacto from "./components/FormularioContacto"; 
import ContactoCard from "./components/ContactoCard"; 
export default function App() { 
 return ( 
 <main className="max-w-2xl mx-auto mt-10 p-4"> 
 <h1 className="text-3xl font-bold text-morado text-center mb-2"> 
 Agenda ADSO v4 
 </h1> 
 <p className="text-gray-500 text-center mb-6"> 
 Interfaz moderna con TailwindCSS 
 </p> 
 <FormularioContacto /> 
 <ContactoCard /> 
 </main> 
 ); 
} 

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
      <h1 className="app-title">Agenda ADSO</h1>

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

