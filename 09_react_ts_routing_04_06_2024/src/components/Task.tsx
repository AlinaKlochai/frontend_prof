import { useState, useRef, FC } from "react";

interface ITaskProps {
    title: string;
    del: () => void;
}


const Task: FC<ITaskProps> = ({ title, del }) => {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [updatedTask, setUpdatedTask] = useState<string>(title);

    //1, Получение абстрактной ссылки, которую впоследсвии можно повесить на люблй из элементов
    const textId = useRef<HTMLTextAreaElement>(null);

    const handleClickSave = () => {
        //!-игнгорируй проверку на null или unfefined все равно выполняй это действие
        // ?-делает проверку на null или undefined ы в случае, если провенрка дала положительный рез-тат возвращает undefined
        setUpdatedTask(textId.current!.value);      
        setIsEdit(false);                           
    };

    if (isEdit) {
        return (
            <div className='border border-primary-subtle w-50 my-2 p-2 task-container'>
                <textarea className='form-control' ref={textId} defaultValue={updatedTask}></textarea>
                <div className='d-flex justify-content-center mt-2'>
                    <button className='btn btn-outline-success' onClick={handleClickSave}>Save</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className='border border-primary-subtle w-50 my-2 p-2 task-container' style={{}}>
                <>
                    <p className='mt-2'>{updatedTask}</p>
                    <div className='d-flex justify-content-center mb-4'>
                        <button className='btn btn-outline-primary me-2' onClick={() => setIsEdit(true)}>Edit</button>
                        <button className='btn btn-outline-danger' onClick={del}>Delete</button>
                    </div>

                </>

            </div>

        );
    }
};

export default Task;