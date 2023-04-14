import React, { useState } from 'react';
import './film.css';
import films from '../../data/films';
import ItemFilm from './ItemFilm';
import AddFilm from './AddFilm';

const ListFilms = () => {
  const [filmsList, setFilmsList] = useState(films);


  const removeFilm = (id) => { 
    const newFilms = filmsList.filter(film => film.id !== id)
    setFilmsList(newFilms);
  }

  const addFilm = (film) => { 
    const newFilms = [...filmsList, film];
    setFilmsList(newFilms);
  }

  return (
    <div>
      <AddFilm />

      <div className="films-list">
        {filmsList.map((film) => (
          <ItemFilm {...film} removeHandler={removeFilm} key={film.id} />
        ))}
      </div>
    </div>
  );
}

export default ListFilms;





