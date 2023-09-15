import './App.css';
import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import TaskList from './TaskList';
import MainForm from './MainForm';
import Headers from './Headers';

import { Container } from '@mui/material';





const App = () => {
  const [data, setData] = useState([]);
  const [completedTaskCount, setCompletedTaskCount] = useState(0);
  const [incompleteTaskCount, setIncompleteTaskCount] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Calculate the completed and incomplete task counts
    const newCompletedTaskCount = data.filter((task) => task.completed).length;
    const newIncompleteTaskCount = data.length - newCompletedTaskCount;

    // Update the state variables
    setCompletedTaskCount(newCompletedTaskCount);
    setIncompleteTaskCount(newIncompleteTaskCount);
  }, [data]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3002/Tasks');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addNewTask = async (taskData) => {
    const newTask = { ...taskData, id: uuidv4(),completed: false };

    try {
      const response = await axios.post('http://localhost:3002/Tasks', newTask);
      setData((prevData) => [...prevData, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async (taskId) =>{

    try {
      await axios.delete(`http://localhost:3002/Tasks/${taskId}`);
      setData((prevData) => prevData.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error(error);
    }
  };

  const editTask = async (taskId, newTaskData) => {
    try {
      await axios.put(`http://localhost:3002/Tasks/${taskId}`, newTaskData);
      setData((prevData) =>
        prevData.map((task) =>
          task.id === taskId ? { ...task, ...newTaskData } : task
        )
      );
    } catch (error) {
      console.error(error); 
    }
  };

  return (
    <Container maxWidth>
      <div className='header' >Task List</div>
      <Headers completedTaskCount={completedTaskCount} incompleteTaskCount={incompleteTaskCount} />
      <MainForm onSubmit={addNewTask} />
      <TaskList data={data} deleteTask={deleteTask} editTask={editTask}/>
    </Container>
  );
}
export default App;
 





