import React from 'react'
import '../style/style.css';

const TodoList = ({ getTask, oncomplete, ondelete }) => {
  const tasks = getTask.filter(tasks => tasks.isCompleted).length;
  return (
    <>
      <div className='container'>
        <div className='text-white d-flex justify-content-between border-bottom'>
          <h6>Created Task <span className='rounded-3 bg-warning p-1'>{getTask.length}</span></h6>
          <h6>Completed Task <span className='rounded-3 bg-success p-1'>{tasks} of {getTask.length}</span></h6>
        </div>
        <div className='text-white'>
          {getTask.length ? getTask.map((tasks, index) => (
            <div className='Tasklist' key={index}>
              <p onClick={() => oncomplete(tasks.id)}>
                {tasks.isCompleted ?
                  <input type="checkbox" name="checkbox" id="" checked />
                  :
                  <input type="checkbox" name="checkbox" id="" />
                }
              </p>
              <p>{tasks.taskTitle}</p>
              <p onClick={()=>ondelete(tasks.id)}><ion-icon name="trash"></ion-icon></p>
            </div>
          )) :
            <div className='text-center text-white tododiv mt-5'>
              <img src="../src/assets/taskboard.png" width='15%' alt="taskboard" />
              <p className='mt-5'>You have no task register yet</p>
              <p>Create task and organized your todo</p>
            </div>
          }
        </div>

      </div>
    </>
  )
}

export default TodoList
