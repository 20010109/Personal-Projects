import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const [count, setCount] = useState(0)

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");

  return (
    <>
      <div>
        <input type="text" value={input} onChange={(e) => setInput}/>
      </div>
    </>
  )
}

export default App
