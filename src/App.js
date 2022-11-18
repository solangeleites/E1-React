import {useState} from 'react';
import './App.css';
import { TodoForm } from './components/TodoForm'
import { Task } from './components/Task'

function App() {
  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([])

  function handleSubmit(e){
    e.preventDefault()
    if(task === ''){
      alert('You must enter a task')
      return;
    }
    const newTask = {
      id: Date.now(),
      task: task,
      complete: false,
    }
    const temp = [newTask, ...taskList]
    setTaskList(temp)
    setTask('')
  }
  function handleChange(e){
    setTask(e.target.value)
    console.log(task)
  }
  function deleteTask(id){
    const temp = taskList.filter(item => item.id !== id)
    setTaskList(temp)
  }
  function deleteAll(){
    if(window.confirm('Do you want to delete all tasks?')){
      setTaskList([])
    } else{
      return
    }
  }

  return (
    
    <div className='container'>

      <h1>To Do List</h1>

      <div className='container-form'>
      <TodoForm
        task={task}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        deleteAll={deleteAll}/>
      </div>

      <div className='container-tasks'>
        <div className='container-task'>
          {
            taskList.map(task => (<Task
            key= {task.id}
            id= {task.id}
            task= {task}
            deleteTask= {deleteTask}
            deleteAll = {deleteAll}/>
            ))
          }
        </div>
      </div>

    </div>

    
  );
}

export default App;
