import React from 'react'

const PhotoCard = ({photo}) => {

  return (
    <div>
          <div className= 'flex items-center gap-1 box-border py-8'>
            {
             photo.userImageURL? <img className='rounded-full w-2/5 w-28 h-28' src={photo.userImageURL}/> 
             :<div className='rounded-full w-2/5 bg-slate-300 w-28 h-28'></div> 
            }

            <p className='text-xl w-3/5'>{photo.user}</p>
          </div>

          <div className=''>
            <img className='rounded-lg w-full' src={photo.previewURL}></img>
            <div className='flex flex-wrap justify-center '>
              <p className='max-sm:text-sm'>views: {photo.views}</p>
              <p>likes: {photo.likes}</p>
              <p>downloads: {photo.downloads}</p>
            </div>
          </div>

    </div>
  )
}

export default PhotoCard