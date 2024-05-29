const root = ReactDOM.createRoot(document.getElementById("root"));

// Компонент Task, который принимает title, id и функцию удаления задачи
const Task = ({ title, id, deleteTask }) => {
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
        );
    } else {
        return (
            <>
                <p>{updatedTask}</p>
                <button onClick={() => setIsEdit(true)}>Edit</button>
                <button onClick={() => deleteTask(id)}>Delete</button>
            </>
        );
    }
};

// Генерация уникальных ID для задач
const generateId = () => Math.random() * 100;

const TaskList = () => {
    const [tasks, setTasks] = React.useState([
        { id: generateId(), title: 'Task 1' },
        { id: generateId(), title: 'Task 2' },
        { id: generateId(), title: 'Task 3' }
    ]);

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id); // Удаление задачи по ID
        setTasks(updatedTasks); // Обновление состояния
    };

    return (
        <>
            {tasks.map((task) => (
                <Task 
                    key={task.id} 
                    title={task.title} 
                    id={task.id} 
                    deleteTask={deleteTask} 
                />
            ))}
        </>
    );
};

root.render(
    <TaskList />
);


