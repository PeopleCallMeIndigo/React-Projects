import React, { useState } from "react";  
import TaskForm from "./TaskForm";
import Task from "./Task"
import "../stylesheets/TaskList.css";


function TaskList () {

    const [tasks, setTasks] = useState([]);

    const addTask = task => {
        if (task.text.trim()) {
            task.text = task.text.trim();

            const tasksUpdated = [task, ...tasks];
            console.log(task);
            setTasks(tasksUpdated);
        }
    };

    const taskBye = id => {
        const tasksUpdated = tasks.filter(task => task.id !== id);
        setTasks(tasksUpdated);
    };

    const taskDone = id => {
        const tasksUpdated = tasks.map( task => {
            if (task.id === id) {
                task.done = !task.done
            }
            return task;
        });
        setTasks(tasksUpdated);
    };

    return (
        <>
            <TaskForm onSubmit={addTask}/>
            <div className="task-list-container">
                {
                    tasks.map((task) =>
                        <Task
                            key={task.id}
                            id={task.id}
                            text={task.text}
                            done={task.done}
                            taskDone = {taskDone}
                            taskBye={taskBye}
                        />
                    )
                }
            </div>
        </>
    );
}

export default TaskList;