import {FiEdit3, FiDelete} from 'react-icons/fi';

export const Task = ({ text, updatingInInput, deleteTask }) => {
    return (
        <div className='container'>
            <p>{text}</p>
            <div className='imgContainer'>
                <FiEdit3 onClick={updatingInInput}></FiEdit3>
                <FiDelete onClick={deleteTask}></FiDelete>
            </div>
        </div>
    )
};
