import React, {useState} from 'react';

const useSelect = (stateInicial, opciones) => {

  // State del Custom Hook
  const [state, actualizarState] = useState('');
  
  const SelectNoticias = () => (
    <select
      className="browser-default"
    >
      <option value="">Seleccione</option>
    </select>
  );

  return [state, SelectNoticias];
}
 
export default useSelect;
