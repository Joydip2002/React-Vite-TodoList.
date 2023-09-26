import React, { useEffect, useState } from 'react';
import Header from './components/header/Header';
import AddTodo from './components/main/AddTodo';
import TodoList from './components/todoList/TodoList';
function App() {
  const [getTask, setTask] = useState([]);

  useEffect(() => {
    const saveGetTask = localStorage.getItem('TodoTask');
    if (saveGetTask) {
      setTask([...JSON.parse(saveGetTask)]);
    } else { setTask([]) };
  }, [])

  const saveLocalStorageData = (newTask) => {
    setTask(newTask);
    localStorage.setItem('TodoTask', JSON.stringify(newTask));
  }

  const addTask = (tasktitle) => {
    saveLocalStorageData([
      ...getTask,
      {
        id: crypto.randomUUID(),
        taskTitle: tasktitle,
        isCompleted: false
      }
    ]);
  }

  const toggleTaskIsCompleted = (taskid) => {
    const newTask = getTask.map(task => {
      if (task.id === taskid) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    })
    saveLocalStorageData(newTask);
  }

  const deleteTask = (taskid) => {
    const filteredTasks = getTask.filter((task) => task.id !== taskid);
    saveLocalStorageData(filteredTasks);
  }

  return (
    <>
      <Header />
      <AddTodo addTask={addTask} />
      <TodoList getTask={getTask} oncomplete={toggleTaskIsCompleted} ondelete={deleteTask} />
    </>
  )
}

export default App;