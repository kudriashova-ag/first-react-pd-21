import React, { useEffect, useState } from 'react';
import './film.css';
import films from '../../data/films';
import ItemFilm from './ItemFilm';
import AddFilm from './AddFilm';

const ListFilms = () => {
  const getFromLocal = () => { 
    return JSON.parse(localStorage.getItem("films"));
  }

  const [filmsList, setFilmsList] = useState(getFromLocal() || films);
  const [showAddFilm, setShowAddFilm] = useState(false);

  const saveToLocal = () => { 
    localStorage.setItem("films", JSON.stringify(filmsList));
  }

  useEffect(() => {
    saveToLocal();
    fetch("http://db/index.php")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, [filmsList]);

  const removeFilm = (id) => { 
    const newFilms = filmsList.filter(film => film.id !== id)
    setFilmsList(newFilms);
  }

  const addFilm = (film) => { 
    const newFilms = [...filmsList, film];
    setFilmsList(newFilms);
  }

  const updateFilm = (film) => { 
    const newFilms = filmsList.map(f => f.id === film.id ? film : f);
    setFilmsList(newFilms);
  }

  return (
    <div>
      <button onClick={() => setShowAddFilm(!showAddFilm)}>Add film</button>
      {showAddFilm && <AddFilm addFilm={addFilm} />}

      <div className="films-list">
        {filmsList.map((film) => (
          <ItemFilm
            {...film}
            removeHandler={removeFilm}
            updateHandler={updateFilm}
            key={film.id}
          />
        ))}
      </div>
    </div>
  );
}

export default ListFilms;


// Добавление
// push, unshift  -  concat, [...arr, newElem]

// Удаление
// pop, shift, splice  - slice, filter

// Замена
// splice, arr[i]=n   -   map

// Сортировка
// reverse, sort   -  сначала скопировать массив, потом сортировать


