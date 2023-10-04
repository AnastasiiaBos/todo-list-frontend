import { useEffect, useState } from 'react';
import './App.css';
import { Task } from './Task';
import { addTask, removeAllTasks, deleteTask, editTask, getAllTasks } from './FetchTasks';

function App() {
  const [allTasks, setAllTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [editing, setEditing] = useState(false);
  const [taskId, setTaskId] = useState('');

  useEffect( () => {
    getAllTasks(setAllTasks);
  }, []);

  const updatingInInput = (_id, taskName) => {
    setEditing(true);
    setTaskId(_id);
    setTaskName(taskName);
  };

  return (
    <div>
      <h1>Your To Do List</h1>
      <div className='container'>
          <input type="text" placeholder="Add a new task" value={taskName}
          onChange={ (evt) => setTaskName(evt.target.value)}
          />
          <button 
          disabled={!taskName}
          className={taskName ? 'active' : 'disabled'}
          onClick={ 
            editing 
            ? () => editTask(taskName, taskId, setTaskName, setAllTasks, setEditing)
            : () => addTask(taskName, setTaskName, setAllTasks)}
            >{editing ? 'Edit' : 'Add'}</button>
          <button 
          disabled={!allTasks.length}
          className={allTasks.length ? 'activeDelete' : 'disabled'}
          onClick={() => removeAllTasks(setTaskName, setEditing, setAllTasks)}
          >Clean List</button>
      </div>
      {allTasks.map( task => 
        <Task 
        text={ task.taskName }
        key={ task._id }
        updatingInInput = { () => updatingInInput(task._id, task.taskName)}
        deleteTask = { () => deleteTask(task._id, setTaskName, setEditing, setAllTasks)}
        />
      )}
    </div>
  );
}

export default App;
