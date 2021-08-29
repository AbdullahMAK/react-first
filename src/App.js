import React from "react";
import { useState } from "react"

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
      const [tasks, setTasks] = useState([
        {
            id : 1,
            text : 'Doctors Appoin',
            day : '2020/8/30',
            reminder : true,
        },
        {
            id : 2,
            text : 'Maneger Appoin',
            day : '2020/9/1',
            reminder : true,
        },
        {
            id : 3,
            text : 'Teacher Appoin',
            day : '2020/8/31',
            reminder : false,
        },
    ])
    //Add Tasks
    const addTask = (task) => {
      const id = Math.floor(Math.random() * 10000) + 1
      const newTask = {id, ...task}
      setTasks( [...tasks, newTask] )
    }
    //delet task
    const deltask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }
    // Toggle Remainder
    const toggleReminder = (id) => {
      setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    }


  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deltask} onToggle={toggleReminder} /> :'No Tasks To Show'}
    </div>
  );
}

export default App;
