import './index.css'
import trash from '../../assets/Vector.svg'
function TodoItem(props) {
    const {title} = props.todo
  return (
   <div className='item-wrapper'>
    <div className='tasks'>
    <input type="checkbox" name='' id='' />
    <p>{title}</p>
    </div>
   <img className='trash-icon' src={trash} alt="Trash icon" />
   </div>
  )
}

export default TodoItem