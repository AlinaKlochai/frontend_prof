const root = ReactDOM.createRoot(document.getElementById("root"));

const Task = () => {
    //const isEdit = false;
    const [isEdit, setIsEdit] = React.useState(false);   //возвращает [isEdit, setIsEdit] array(2)

    const [updatedTask, setUpdatedTask] = React.useState('Task1');
    
    const textId = React.useRef();

    const handleClickSave = () => {
        setUpdatedTask(textId.current.value);
        setIsEdit(false)
    }

    if(isEdit){
        return(
            <>
                <textarea ref={textId} defaultValue={updatedTask}></textarea>
                <button onClick={handleClickSave}>Save</button>
            </>
        )
    } else{
        return(
            <>
                <p>{updatedTask}</p>
                <button onClick={() => setIsEdit(true)}>Edit</button>
                <button>Delete</button>
            </>
        )
    }
}

root.render(
    <Task />
)