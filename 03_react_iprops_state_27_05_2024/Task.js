const root = ReactDOM.createRoot(document.getElementById("root"));

const Task = () => {
    //const isEdit = false;
    const [isEdit, setIsEdit] = React.useState(false);   //возвращает [isEdit, setIsEdit] array(2)
    
    if(isEdit){
        return(
            <>
                <textarea defaultValue=''></textarea>
                <button onClick={() =>  setIsEdit(false)}>Save</button>
            </>
        )
    } else{
        return(
            <>
                <p>Name</p>
                <button onClick={() => setIsEdit(true)}>Edit</button>
                <button>Delete</button>
            </>
        )
    }
}

root.render(
    <Task />
)