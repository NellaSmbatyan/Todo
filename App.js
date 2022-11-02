import React, {useState}  from 'react'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [list,setList] = useState([])
  const [input,setInput] = useState('')
  const addTodo = (todo) => {
    const newTodo ={
      id:uuidv4(),
      todo:todo
    }
    setList([...list,newTodo])
    setInput('')
  }
  const deleteTodo = (id) => {
    const newList = list.filter((todo)=> todo.id !== id)
    setList(newList)
  }
  return (
    <div>
      <h1>Todo list</h1>
      <input type='text' value={input} onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={()=> addTodo(input)}>Add</button>
      <ol>
        {
          list.map((todo) => (
            <li key= {todo.id}>{todo.todo}
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          )  )
        }
      </ol>
    </div>
  )



}

export default App


