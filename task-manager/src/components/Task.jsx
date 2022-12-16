import React from "react";
import "../stylesheets/Task.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task ({ id, text, done, taskDone, taskBye }) {
    return (
        <div className={done ? 'task-container done' : 'task-container'}>
            <div className="task-text"
                onClick={() => taskDone(id)}>
                {text}
            </div>  
            <div className="task-container-icons"
                onClick={() => taskBye(id)}>
                <AiOutlineCloseCircle className="task-icon"/>
            </div> 
        </div>
    );
}

export default Task;