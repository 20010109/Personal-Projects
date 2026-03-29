import { useState } from 'react'
import { LuMoon, LuSun } from "react-icons/lu";
import './App.css'

export default function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('');
  const [name, setName] = useState('');

  function resetName() {
    setName("Stephanie");
  };

  function handleNameChange(e){
    setName(e.target.value);
  };

  return (
    <>
      <div className={`${theme ? "dark" : ""} bg-white dark:bg-gray-800 w-full h-full`}>
          <header className='header flex bg-gray-300 dark:bg-gray-600/50 items-center justify-between'>
              <h1 className='text-5xl text-gray-700 dark:text-white m-5'>HELLO WORLD</h1>
            <div className='flex bg-gray-200 dark:bg-gray-500 rounded-full m-5 justify-items-center'>
              <button className='hover:bg-gray-500/30 dark:bg-gray-400 dark:hover:bg-gray-400 dark:text-white rounded-tl-full rounded-bl-full p-3 color-black' onClick={() => {setTheme("dark")}}>
                <LuMoon />
              </button>
              <button className='bg-gray-500/30 hover:bg-gray-500/30 dark:bg-gray-500 dark:hover:bg-gray-100 rounded-tr-full rounded-br-full  p-3 color-white' onClick={() => {setTheme("")}}>
                <LuSun />
              </button>
            </div>
          </header>
          <div className=''>
            <div className=' flex justify-center bg-gray-100 h-screen'>
              <div className='rounded bg-gray-200 m-auto p-5 '>
                <h1 className='text-center font-bold'>onChange/onClick test</h1>
                <h1 className='mt-5 w-full bg-gray-300 p-2'>NAME: {name}</h1>
                <input type="text" value={name} className='bg-gray-300 mt-5 p-2 w-full' onChange={handleNameChange}/>
                <br />
                <button className='bg-gray-300 hover:bg-gray-600 mt-5 rounded p-5' onClick={resetName}>CLICK ME TO RESET NAME</button>
              </div>
            </div>
            <div className='flex justify-center bg-gray-200 h-screen'>
              <div className='m-10 bg-gray-300 text-center p-10 grid grid-cols-1 grid-rows-2 gap-4 place-items-center rounded-3xl'>
              <h1 className='text-6xl'>CLICKED {count} TIMES!!!</h1>
                <button className='bg-sky-800 hover:bg-amber-400 active:bg-amber-500 rounded-full p-5' onClick={() => setCount(count + 1)}>
                  CLICK ME! Clicked {count} times.
                </button>
              </div>
            </div>
          </div>
      </div>
    </> 
  )
}

