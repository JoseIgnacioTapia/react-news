import Header from './components/Header';
import Formulario from './components/Formulario';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Header 
        titulo="Buscador de noticias"
      />

      <div className="container white">
        <Formulario />
      </div>
    </Fragment>
  );
}

export default App;
