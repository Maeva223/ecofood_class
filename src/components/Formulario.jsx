import { useState } from 'react';

export function Formulario() {
  const [nombre, setNombre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gracias por registrarte, ${nombre}`);
    setNombre(''); // Limpiar el campo después del envío
  };

  return (
    <form onSubmit={handleSubmit}>
      <label> Nombre:
        <input 
          type="text" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}
