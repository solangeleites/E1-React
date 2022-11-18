export function Task(props){
    const {task, deleteTask} = props
    return(
        <>
            <div className="container-task-item" id = {Task.id}>
            <span>{task.task}</span>
            <button className="btn-delete" onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
        </>
    )
}