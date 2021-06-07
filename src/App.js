import Header from './components/Header';
import Formulario from './components/Formulario';
import { Fragment, useState } from 'react';

function App() {

  const [select, guardarSelect] = useState();

  return (
    <Fragment>
      <Header 
        titulo="Buscador de noticias"
      />

      <div className="container white">
        <Formulario  
          guardarSelect={guardarSelect}
        />
      </div>
    </Fragment>
  );
}

export default App;
