import { useState }  from "react";
import NavBar from './components/NavBar/Navbar';
import TaskList from './components/TaskList/TaskList';
import './App.css';

export default function App() {
  const [tasks, setTasks] = useState([]);
  let id = 0;

  const generateId = () => {
    id = id + 1;
    return id;
  }

  const addTask = (title, state) => {
     const newTask = {
          id: generateId(),
          title,
          state
     };

     setTasks((existingTasks) => {
          return [...existingTasks, newTask];
     })
  }

  const updateTask = (id, title,state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if(task.id === id){
          return {...task, title, state};
        }
        else {
          return task;
        }
      })
    })
  }

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
    })
  }

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <TaskList 
          title="To Do" 
          onAddTask={addTask} 
          tasks={tasks.filter((t) => t.state === "Pendente")}
          onTaskUpdate={updateTask}
          taskState="Pendente"
          onDeleteTask={deleteTask}
        />
        <TaskList 
          title="Doing" 
          onAddTask={addTask} 
          tasks={tasks.filter((t) => t.state === "Fazendo")}
          onTaskUpdate={updateTask}
          taskState="Fazendo"
          onDeleTask={deleteTask}
        />
        <TaskList 
          title="Done" 
          onAddTask={addTask} 
          tasks={tasks.filter((t) => t.state === "Feito")}
          onTaskUpdate={updateTask}
          taskState="Feito"
          onDeleTask={deleteTask}
        />
      </div>
    </div>
  );
}