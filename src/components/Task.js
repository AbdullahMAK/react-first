import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : "reminderfalse"}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} <FaTimes style={{color : '#00000090', cursor:'pointer'}} onClick={() => onDelete(task.id)}/></h3>
            <p style={{fontSize: '12px', fontFamily: 'Segoe UI'}}>Date:{task.day} - Time:{task.timer}</p>
            
        </div>
    )
}

export default Task
