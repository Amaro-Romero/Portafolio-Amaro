import { useState } from 'react';

export const useContacto = () => {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (values) => {
    console.log("Formulario enviado con éxito:", values);
    setEnviado(true);
  };

  return { enviado, handleSubmit, setEnviado };
};