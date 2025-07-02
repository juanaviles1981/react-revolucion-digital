const TodoItem = ({ task, toggleCompleted, handleDelete })=>{
console.log(task)
    return (
        <div>
            <li>
                
                <span
                style={{textDecoration: task.completed? "line-through" : "none"}}>
                {task.name}
                </span>
                
                
                <button onClick={()=> toggleCompleted(task.id)}>Completada</button>
                <button onClick={()=> handleDelete(task.id)}>Eliminar</button>
            </li>
        </div>
    )

}

export default TodoItem