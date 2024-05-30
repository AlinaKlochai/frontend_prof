const root = ReactDOM.createRoot(document.getElementById("root"));

const Task = ({ title, del }) => {
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
                <button className='btn btn-success' onClick={handleClickSave}>Save</button>
            </>
        )
    } else {
        return (
            <div className='border border-primary-subtle w-50' style={{}}>
    <>
                <p className='mt-2'>{updatedTask}</p>
                <div className='d-flex justify-content-center mb-5'>
                <button className='btn btn-warning' onClick={() => setIsEdit(true)}>Edit</button>
                <button className='btn btn-danger' onClick={del}>Delete</button>
                </div>
               
            </>

            </div>
        
        );
    }
};

const TaskList = () => {
    const [tasks, setTasks] = React.useState(['Task 1', 'Task 2', 'Task 3']);
    const [newTask, setNewTask] = React.useState('');

    const deleteTask = (i) => {
        //1. глубоквя копия массива
        const tasksCopy = [...tasks]

        //2. Поверхностая копия массива - копирование ссылки на  - подходит для чтения(так как при редактирование изменится и исходный массив)
        //const taskCopy2 = tasks;

        //произошло удаление i-того елемента массива в копии
        tasksCopy.splice(i, 1)

        //обновленнубю копию передали в качестве нового значения локалоного состояния
        setTasks(tasksCopy); // Создаем новый массив, исключая задачу с указанным индексом
    };

    const addNewTask = () => {
        if (newTask.trim()) {       //если пользователь введ пробелы и нажал addTask то эта задача не добавиться 
            const tasksCopy = [...tasks];  //1.создавние копии
            tasksCopy.push(newTask);      //2.изменение копии
            setTasks(tasksCopy);         // 3.обновление значения оригинала на копию
        }

        setNewTask('');              // 4.удаляем сохраненную иинформацию о новой задачи после ее добавоения 
        //в список и тем самым очизаем инпут
    };

    return (
        <>

            <h1 className='text-center'>Todo List App</h1>
            <div style={{ margin: '0 auto' }} className='w-50 d-flex'>
                <input
                    className='form-control'
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder='Add new task...'
                />
                <button style={{ width: '160px' }} className='btn btn-primary' onClick={addNewTask}>Add Task</button>
            </div>
            <div className='d-flex flex-column text-center'>
                {tasks.map((task, i) => (
                    <Task
                        key={Math.random()}
                        title={task}
                        //index={i} 
                        del={() => deleteTask(i)}
                    />
                ))}
            </div>
        </>
    );
};

root.render(
    <TaskList />
);