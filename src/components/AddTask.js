import { useState } from 'react'

const AddTask = ( {onAdd} ) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [timer, setTime] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Plase Add Text')
            return
        } else if(!day){
            alert('Plase Add Day')
            return
        }
        
        onAdd({text, day, timer, reminder})

        setText('')
        setDay('')
        setTime('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input 
                type='text' 
                placeholder='Add Task'
                value={text} 
                onChange={(e) => setText(e.target.value)} />
            </div>

            <div className='form-control'>
                <label>Day & Time</label>
                <input 
                style={{width:'45%'}}
                type='date' 
                value={day} 
                onChange={(e) => setDay(e.target.value)} />
                <input 
                style={{width:'45%'}}
                type='time' 
                value={timer} 
                onChange={(e) => setTime(e.target.value)} />
            </div>

            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input 
                type='checkbox'
                checked={reminder}
                value={reminder} 
                onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input type='submit' value='Save Task' className='btn btn-block'/>
            
        </form>
    )
}

export default AddTask
