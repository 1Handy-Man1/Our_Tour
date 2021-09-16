import React, { useState, useEffect } from 'react';
import Tour from './List';
import './style.css';
import data from './Look';

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [readMore, setReadMore] = useState(data);


  const getRead = async () =>{
    const response = await fetch(url)
    const readMore = await response.json()
    setReadMore(readMore)
  }
  
  const getPlaces = async () =>{
    const response = await fetch(url)
    const places = await response.json()
    setPlaces(places)
  }

  useEffect(()=>{
    getPlaces();
    getRead();
  },[])

  const removePlace= (id) =>{
    let newPlaces = places.filter((places)=> places.id !== id);
    setPlaces(newPlaces)
  }
  return (
    <main>
      <section>
        <p className='title'>Our Tour</p>
        {readMore.map((setReadMore) => {
          return(
            <Tour places={places} remove={removePlace}  {...setReadMore}/>
          )
        })}
        
      </section>
    </main>
    
  );
}

export default App;
