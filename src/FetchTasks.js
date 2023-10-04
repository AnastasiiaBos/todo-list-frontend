import axios from 'axios';

const getAllTasks = (setAllTasks) => {
    axios.get('https://todo-list-ln7v.onrender.com')
    .then(({ data }) => {
        console.log(data);
        setAllTasks(data);
    })
};

const removeAllTasks = (setTaskName, setEditing, setAllTasks) => {
    axios.get('https://todo-list-ln7v.onrender.com/removeTasks')
    .then(() => {
        setTaskName('');
        setEditing(false);
        getAllTasks(setAllTasks);
    })
};

const addTask = (taskName, setTaskName, setAllTasks) => {
    axios.post('https://todo-list-ln7v.onrender.com/saveTask', { taskName })
    .then( () => {
        setTaskName('');
        getAllTasks(setAllTasks);
    })
};

const deleteTask = (_id, setTaskName, setEditing, setAllTasks) => {
    axios.post('https://todo-list-ln7v.onrender.com/deleteTask', { _id})
    .then( () => {
        setTaskName('');
        setEditing(false);
        getAllTasks(setAllTasks);  
    })
};

const editTask = (taskName, taskId, setTaskName, setAllTasks, setEditing) => {
    axios.put('https://todo-list-ln7v.onrender.com/editTask', { taskName, _id: taskId })
    .then( () => {
        setTaskName('');
        setEditing(false);
        getAllTasks(setAllTasks);
    });
};

export { getAllTasks, addTask, editTask, deleteTask, removeAllTasks };