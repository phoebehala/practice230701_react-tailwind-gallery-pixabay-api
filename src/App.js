
import { useEffect, useState } from 'react';
import './App.css';
import PhotoCard from './components/PhotoCard';


function App() {

  const [photos, setPhotos ] = useState([])

  useEffect(()=>{
    fetch("https://pixabay.com/api/?key=38016491-e6663f861e581e1a4e4a0f11f&q=yellow+flowers&image_type=photo")
    .then(response => response.json())
    //.then(data => console.log(data.hits))
    .then(data => setPhotos(data.hits))
  })
  return (
    <div className="App m-4">
      <div className='rounded-lg grid grid-cols-4 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1'>
      {photos?.map((photo)=>(
        <PhotoCard photo={photo} key={photo.id} />
        ))}  
      </div>

    </div>
  );
}

export default App;
