import { useState } from 'react'
import './index.css'

function Form() {
const [todo, setTodo] = useState('')
function validate(todo) {
    if(todo.trim().length < 3) {
        alert('Enter at least 3 characters')
        return false
    }
    return true
}

function getData() {
    let data = []
    if(localStorage.getItem('todos')) {
        data = JSON.parse(localStorage.getItem('todos'))
    }
    return data
}

    function handleSubmit(e){
      e.preventDefault()
      if(validate(todo)) {
        let obj = {
            id: Date.now(),
            title: todo,
            category: 'Uncategorized',
            completed: false
        }
        let todos = getData()
        todos.push(obj)
        localStorage.setItem('todos', JSON.stringify(todos))
      }
      setTodo('')
    }
  return (
    <form onSubmit={handleSubmit}>
        <input value={todo} onChange={(e) => {setTodo(e.target.value)}} className='field' type="text" placeholder="Add a new task insdie ‘All’ category"/>
    </form>
  )
}

export default Form

