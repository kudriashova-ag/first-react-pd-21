import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";


const AddFilm = ({ addFilm }) => {
  
  const [name, setName] = useState('');
  const [year, setYear] = useState('2022');
  const [image, setImage] = useState(
    "https://upload.wikimedia.org/wikipedia/ru/3/31/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%D0%A2%D0%B5%D1%80%D0%BC%D0%B8%D0%BD%D0%B0%D0%BB.jpg"
  );
  const [director, setDirector] = useState("");
  const [description, setDescription] = useState("");

  const [nameError, setNameError] = useState(null);


  const submitHandler = () => { 
    if (name.length === 0) { 
      setNameError('Name is required');
      return;
    }

    addFilm({ name, year, image, director, description, id: uuidv4() });
    setName("");
    setYear("");
    setImage("");
    setDirector("");
    setDescription("");

    setNameError(null);
  }

  return (
    <div>
      <h2>Add Film</h2>
      <input type="text" placeholder='Title' value={name} onChange={(e) => setName(e.target.value)} /> <br />
      {nameError ? <div className='error'>{nameError}</div> : ''}
      <input type="text" placeholder='Year' value={year} onChange={(e) => setYear(e.target.value)} /> <br />
      <input type="text" placeholder='Image' value={image} onChange={(e) => setImage(e.target.value)} /> <br />
      <input type="text" placeholder='Director' value={director} onChange={(e) => setDirector(e.target.value)} /> <br />
      <input type="text" placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} /> <br />

      <button onClick={submitHandler}>Save</button>
    </div>
  );
}

export default AddFilm;
