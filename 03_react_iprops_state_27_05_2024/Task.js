const Task = ({ title, index, deleteTask }) => {
    const [isEdit, setIsEdit] = React.useState(false);
    const [updatedTask, setUpdatedTask] = React.useState(title);
    const textId = React.useRef();

    const handleClickSave = () => {
        setUpdatedTask(textId.current.value);
        setIsEdit(false);
    };

    if (isEdit) {
        return (
            <>
                <textarea ref={textId} defaultValue={updatedTask}></textarea>
                <button onClick={handleClickSave}>Save</button>
            </>
        )
    } else {
        return (
            <>
                <p>{updatedTask}</p>
                <button onClick={() => setIsEdit(true)}>Edit</button>
                <button onClick={() => deleteTask(index)}>Delete</button>
            </>
        );
    }
};

const TaskList = () => {
    const [tasks, setTasks] = React.useState(['Task 1', 'Task 2', 'Task 3']);

    const deleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks.slice(index, 1); // Создаем новый массив, исключая задачу с указанным индексом
        setTasks(newTasks);
    };

    return (
        <>
            {tasks.map((task, i) => (
                <Task 
                key={i} 
                title={task} 
                index={i} 
                deleteTask={deleteTask} 
                />
            ))}
        </>
    );
};

root.render(
    <TaskList />
);
