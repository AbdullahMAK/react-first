import React from "react";
import { useState } from "react"

import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
      const [tasks, setTasks] = useState([
        {
            id : 1,
            text : 'Doctors Appoin',
            day : 'Tom',
            reminder : true,
        },
        {
            id : 2,
            text : 'Maneger Appoin',
            day : 'ToDay',
            reminder : true,
        },
        {
            id : 3,
            text : 'Teacher Appoin',
            day : 'yas',
            reminder : false,
        },
    ])

    //delet task
    const deltask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deltask} /> :'No Tasks To Show'}
    </div>
  );
}

export default App;
