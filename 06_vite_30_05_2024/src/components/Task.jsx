import { useState, useRef } from "react";


// eslint-disable-next-line react/prop-types
const Task = ({ title, del }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [updatedTask, setUpdatedTask] = useState(title);
    const textId = useRef();

    const handleClickSave = () => {
        setUpdatedTask(textId.current.value);
        setIsEdit(false);
    };

    if (isEdit) {
        return (
            <div className='border border-primary-subtle w-50 my-2 p-2 task-container'>
                <textarea className='form-control' ref={textId} defaultValue={updatedTask}></textarea>
                <div className='d-flex justify-content-center mt-2'>
                    <button className='btn btn-success' onClick={handleClickSave}>Save</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className='border border-primary-subtle w-50 my-2 p-2 task-container' style={{}}>
                <>
                    <p className='mt-2'>{updatedTask}</p>
                    <div className='d-flex justify-content-center mb-4'>
                        <button className='btn btn-warning me-2' onClick={() => setIsEdit(true)}>Edit</button>
                        <button className='btn btn-danger' onClick={del}>Delete</button>
                    </div>

                </>

            </div>

        );
    }
};

export default Task;