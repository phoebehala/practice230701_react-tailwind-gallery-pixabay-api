import React from 'react'

const SearchPhoto = ({input, setInput, setQuerry}) => {
    const onSubmit = (e)=>{
        e.preventDefault(); // Prevent default submission
        setQuerry(input)
      }
  return (
    <form 
    className='flex justify-center'
    onSubmit={onSubmit}>
    <div className='flex max-w-lg'>
      <input 
        className="placeholder:italic 
                  placeholder:text-slate-400 block 
                  bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm 
                  focus:outline-none 
                  focus:border-sky-500 
                  focus:ring-sky-500 
                  focus:ring-1 
                  sm:text-sm py-0 pl-2 pr-0" 
        placeholder="Type to search..." 
        name="search"
        type="text" 
        onChange={e=>{setInput(e.target.value)}}
        />
      <button type="submit"
        className='rounded-non
        bg-red-300
        rounded-r-lg
        hover:bg-red-400
        px-8 py-5
        max-sm:px-2 py-2
        '
        >
            SEARCH</button>

    </div>

  </form>
  )
}

export default SearchPhoto