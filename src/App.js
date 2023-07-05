
import { useEffect, useState } from 'react';
import './App.css';
import PhotoCard from './components/PhotoCard';
import SearchPhoto from './components/SearchPhoto';


function App() {
    const [isLoading,  setIsLoading] = useState(false)
    const [photos, setPhotos ] = useState([])
    const [input, setInput ] = useState('')
    const [querry, setQuerry ] = useState('yellow+flowers')

  useEffect(()=>{
    setIsLoading(true)
    fetch(`https://pixabay.com/api/?key=38016491-e6663f861e581e1a4e4a0f11f&q=${querry}&image_type=photo`)
    .then(response => response.json())
    //.then(data => console.log(data.hits))
    .then(data => {
      setPhotos(data.hits)
      setIsLoading(false)
      setInput('')
    })
    .catch((err) => console.log(err))
  },[querry])

  
  return (
    <div className="App m-4">
      <SearchPhoto input={input} setInput={setInput} setQuerry={setQuerry} />
      {isLoading ?
        <h1 className='text-center m-10 text-3xl'>Loading...</h1>
        :
        <>
          <h1 className='text-center m-10 text-3xl'>The result of <span className='font-bold text-rose-400 '>{querry}</span></h1>
          <div className='rounded-lg grid grid-cols-4 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1'>
          {photos?.map((photo)=>(
            <PhotoCard photo={photo} key={photo.id} />
          ))}
          </div>

        </>
      }
 
 

    </div>
  );
}

export default App;
