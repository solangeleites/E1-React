export function TodoForm(props){

    const {task, handleSubmit, handleChange, deleteAll} = props

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter a task"  onChange={handleChange} value={task} className='todo-input'/>

            <input type="submit" value="Add task" onClick={handleSubmit} className='todo-btn'/>

            <input type="submit" value="Delete all tasks" onClick={deleteAll} className='todo-btn delete' />
        </form>
    )
}