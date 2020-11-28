import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search';
import TodoItem from './components/TodoItem';
import EditPopup from './components/EditPopup';
import axios from 'axios';

function App() {
  let [tasks, setTasks] = useState([]);
  const url = 'http://localhost:9081/tasks';
  // get datas from json file
  useEffect(() => {
    try {
      axios.get(url).then(json => setTasks(json.data));
    } catch (error) {
      console.log("Failed to get data");
    }
  }, [])

  // get value of task name and description field
  let [newTaskName, setName] = useState('');
  let [description, setDes] = useState('');

  // check task is existed
  const isExisted = () => {
    for (let task of tasks) {
      if (newTaskName === task.Title) {
        return true;
      }
    }
    return false;
  }

  // handle to add new task
  const addNewTask = () => {
    if (newTaskName !== '' && !isExisted()) {
      const item = { Title: newTaskName, Description: description, isComplete: false };
      // add new task and render list tasks
      setTasks([
        ...tasks, item
      ]);
      // reset input field
      setName('');
      setDes('');
      // post data to json file
      axios.post(url, item)
        .catch(err => {
          console.log(err);
        })
    }
  }
  const setNewTaskName = event => {
    setName(event.target.value);
  }
  const setDescription = event => {
    setDes(event.target.value);
  }
  // check task is complete then change status
  const checkTaskComplete = item => {
    setTasks(tasks.map(i => i !== item ? { ...i } : { ...i, isComplete: !item.isComplete }));
    // update status item in db
    axios.put(`${url}/${item.id}`, { ...item, isComplete: !item.isComplete })
      .catch(err => {
        console.log(err);
      })
  }
  // delete task
  const deleteTask = (item, index) => {
    tasks.splice(index, 1);
    setTasks([...tasks]);
    // delete task in db
    axios.delete(`${url}/${item.id}`, item)
      .catch(err => {
        console.log(err);
      })
  }
  const [taskID, setTaskID] = useState('');
  const [taskNameToUpdate, setTaskNameToUpdate] = useState('');
  const [descriptionToUpdate, setDescriptionToUpdate] = useState('');
  // get edit information into poup and show
  let [modalIsOpen, setModalIsOpen] = useState(false);
  const editTaskInfo = item => {
    setModalIsOpen(true);
    setTaskID(item.id);
    setTaskNameToUpdate(item.Title);
    setDescriptionToUpdate(item.Description);
  }
  // get update task name
  const getUpdateTaskName = e => {
    setTaskNameToUpdate(e.target.value);
  }
  // get update description
  const getUpdateDescription = e => {
    setDescriptionToUpdate(e.target.value);
  }
  // update task information
  const updateTaskInfo = () => {
    setTasks(
      tasks.map(item => item.id !== taskID ? { ...item } : { ...item, Title: taskNameToUpdate, Description: descriptionToUpdate })
    );
    setModalIsOpen(false);
    //update task information in db
    axios.put(`${url}/${taskID}`, { Title: taskNameToUpdate, Description: descriptionToUpdate })
      .catch(err => {
        console.log(err);
      })
  }
  // close popup
  const closePopup = () => {
    setModalIsOpen(false);
  }
  // get task name to search
  let [searchTaskName, setSearchTaskName] = useState('');
  const searchTaskNameField = e => {
    setSearchTaskName(e.target.value);
  }
  let [items, setItems] = useState([]);
  // get datas from json file
  useEffect(() => {
    axios.get(url).then(json => setItems(json.data))
  }, [])
  const searchTask = () => {
    // filter tasks from items in db
    const filteredTasks = items.filter(item => item.Title.toLowerCase().indexOf(searchTaskName.toLowerCase()) > -1);
    if (filteredTasks.length) {
      setTasks([...filteredTasks]);
    } else {
      setTasks([]);
    }
  }

  return (
    <div className="App">
      <h2 className="Title">Todo List App</h2>
      <div className="Add-new-task">
        <input value={newTaskName} onChange={setNewTaskName} placeholder="Add new task..." />
        <label>Description</label>
        <textarea value={description} onChange={setDescription} />
        <button onClick={addNewTask}>Add</button>
      </div>
      <h2 className="Title">List Tasks</h2>
      <div className="List-tasks">
        <Search
          searchTaskNameField={searchTaskNameField}
          searchTask={searchTask}
        />
        <div className="Tasks">
          {tasks.length && tasks.map((item, index) =>
            <TodoItem
              key={index}
              item={item}
              checkTask={() => checkTaskComplete(item)}
              deleteTask={() => deleteTask(item, index)}
              editTask={() => editTaskInfo(item)}
            />
          )
          }
        </div>
      </div>
      <EditPopup
        modalIsOpen={modalIsOpen}
        closePopup={closePopup}
        taskID={taskID}
        taskNameToUpdate={taskNameToUpdate}
        descriptionToUpdate={descriptionToUpdate}
        getUpdateTaskName={getUpdateTaskName}
        getUpdateDescription={getUpdateDescription}
        updateTaskInfo={updateTaskInfo}
      />
    </div>
  );
}

export default App;
