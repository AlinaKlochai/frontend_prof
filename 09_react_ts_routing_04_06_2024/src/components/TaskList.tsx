import { useEffect, useState } from "react";
import Task from "./Task";

interface ITaskJSON {
        userId: number,
        id: number,
        title: string,
        completed: boolean
        
}

const TaskList = () => {
    const [tasks, setTasks] = useState<string[]>([]);
    const [newTask, setNewTask] = useState<string>('');

    useEffect(() => {
        //1.Вариант с async await
        const fetchTasks = async () =>{
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos');
                const data = await response.json();
                setTasks(data.slice(0, 10).map((e: ITaskJSON) => e.title))
            } catch (error) {
                console.log(error);
            }
        }

        //2.Вариант с promise
        // fetch('https://jsonplaceholder.typicode.com/todos')
        // .then(response => response.json())
        // .then(response => response.map(item => item.title))
        // .then(response => setTasks(response.slice(0,10)))
        // .catch(reject => console.log(reject));

        fetchTasks();

        return () => console.log('Компонент размонтирован');
    },[/* здесь можна передать те значения, при изменпимя которых должен перезаписаться эффект (2.updating) */]) 

    /*
    Этапы жизненного цикла компонентов:
    1. mounting
    2. update
    3. unmounting
    */

    const deleteTask = (i: number) => {
        //1. глубокая копия массива
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
                    className='form-control me-2'
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder='Add new task...'
                />
                <button style={{ width: '160px' }} className='btn btn-primary' onClick={addNewTask}>Add Task</button>
            </div>
            <div className='text-center d-flex flex-column align-items-center'>
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

}

export default TaskList;