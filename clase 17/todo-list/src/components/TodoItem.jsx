const TodoItem = ({ task, handleCompleted, handleDelete })=>{
console.log(task)
    return (
        <div>
            <li key={task.id}>
                
                <span
                style={{textDecoration: task.completed? "line-through" : "none"}}>
                {task.name}
                </span>
                
                
                <button onClick={()=> handleCompleted(task.id)}>Completada</button>
                <button onClick={()=> handleDelete(task.id)}>Eliminar</button>
            </li>
        </div>
    )

}

export default TodoItem