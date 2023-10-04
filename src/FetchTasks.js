import axios from 'axios';

const getAllTasks = (setAllTasks) => {
    axios.get('http://localhost:3000')
    .then(({ data }) => {
        console.log(data);
        setAllTasks(data);
    })
};

const removeAllTasks = (setTaskName, setEditing, setAllTasks) => {
    axios.get('http://localhost:3000/removeTasks')
    .then(() => {
        setTaskName('');
        setEditing(false);
        getAllTasks(setAllTasks);
    })
};

const addTask = (taskName, setTaskName, setAllTasks) => {
    axios.post('http://localhost:3000/saveTask', { taskName })
    .then( () => {
        setTaskName('');
        getAllTasks(setAllTasks);
    })
};

const deleteTask = (_id, setTaskName, setEditing, setAllTasks) => {
    axios.post('http://localhost:3000/deleteTask', { _id})
    .then( () => {
        setTaskName('');
        setEditing(false);
        getAllTasks(setAllTasks);  
    })
};

const editTask = (taskName, taskId, setTaskName, setAllTasks, setEditing) => {
    axios.put('http://localhost:3000/editTask', { taskName, _id: taskId })
    .then( () => {
        setTaskName('');
        setEditing(false);
        getAllTasks(setAllTasks);
    });
};

export { getAllTasks, addTask, editTask, deleteTask, removeAllTasks };