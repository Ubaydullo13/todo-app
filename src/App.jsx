import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form'
import TodoItem from './components/TodoItem'
function App() {
const [todos, setTodos] = useState([])
  function getData() {
    let data = []
    if(localStorage.getItem('todos')) {
        data = JSON.parse(localStorage.getItem('todos'))
    }
    return data
}

useEffect(() => {
setTodos(getData())
}, [])

  return (
    <div className='todo-wrapper'>
<div className="sidebar">
  <ul className='list'>
    <li>All</li>
    <li>Groceries</li>
    <li>College</li>
    <li>Payments</li>
  </ul>
</div>
<div className="main">
  <h2>All Tasks</h2>
  <Form />
  {
    todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} />
    ))
  }
</div>
 
    </div>
  )
}

export default App
