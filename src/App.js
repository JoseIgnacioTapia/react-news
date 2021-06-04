import reactDom from 'react-dom';
import Header from './components/Header';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Header 
        titulo="Buscador de noticias"
      />

      <div className="container white">
        <h1>Formulario aquí</h1>
      </div>
    </Fragment>
  );
}

export default App;
