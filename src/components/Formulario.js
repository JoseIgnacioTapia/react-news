import React from 'react';
import styles from './Formulario.module.css';
import PropTypes from 'prop-types';
import useSelect from '../hooks/useSelect';

const Formulario = ({ guardarCategoria }) => {

  const OPCIONES = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Negocios' },
    { value: 'entertainment', label: 'Entretenimiento' },
    { value: 'health', label: 'Salud' },
    { value: 'science', label: 'Ciencias' },
    { value: 'sports', label: 'Deportes' },
    { value: 'technology', label: 'Tecnología' }
  ]

  // Utilizar Custom Hook
  const [categoria, SelectNoticias] = useSelect('general',  OPCIONES);

  // Submit al form para pasar la categoría a app.js
  const buscarNoticias = e => {
    e.preventDefault();

    guardarCategoria(categoria);
  }

  return ( 
    <div className={`${styles.buscador} row`}>
      <div className="clo s12 m8 offset-m2">
        <form
          onSubmit={buscarNoticias}
        >
          <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>

          <div className="input-field col s12">
            <input 
              type="submit"
              className={`${styles['btn-block']} btn-large amber darken-2`}
              value="Buscar"
            />
          </div>

          <SelectNoticias
          />
        </form>
      </div>
    </div>
  );
}

Formulario.propTypes = {
  guardarCategoria: PropTypes.string.isRequired
}

export default Formulario;
