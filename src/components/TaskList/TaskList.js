import React from "react";
import "./tasklist.css";
import PropTypes from "prop-types";
import TaskIItem from "../TaskItem/TaskItem";

export default function TaskList({
    title, 
    tasks, 
    taskState,
    onAddTask, 
    onTaskUpdate, 
    onDeleteTask
}) {
    const addTask = () => {
        onAddTask("Nova Tarefa", taskState)
    }

    return(
        <div className="tasklist">
            <div className="title">{title}</div>
            <div className="content">
                {tasks.map((task) => {
                    return(
                        <TaskIItem 
                            key={task.id} 
                            id={task.id} 
                            title={task.title}
                            taskState={task.state}
                            onTaskUpdate={onTaskUpdate}
                            onDeleteTask={onDeleteTask}
                        />
                    )
                })}
            </div>
            <button onClick={addTask}>Adicionar tarefa</button>
        </div>
    )
}

TaskList.propTypes = {
    title: PropTypes.string.isRequired,
    tasks: PropTypes.array.isRequired,
    taskState: PropTypes.string,
    onAddTask: PropTypes.func.isRequired,
    onTaskUpdate: PropTypes.func,
    onDeleteTask: PropTypes.func
}