import React, { useState } from 'react';

import { Button, IconButton, Checkbox, Typography, CardActions, CardContent, Card, TextField, FormControlLabel } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const Task = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTaskName, setEditedTaskName] = useState(props.name);
    const [completed, setCompleted] = useState(props.completed);
    
  
    const handleDeleteTask = ()=>{
      props.deleteTask(props.id);
    };
  
    const handleEditClick = () => {
      setIsEditing(true);
    };
  
    const handleSaveClick = () => {
      // Only update the task name if it has changed
      if (editedTaskName !== props.name || completed !== props.completed) {
        props.editTask(props.id, { name: editedTaskName, completed });

      }
      setIsEditing(false);
    };

  
    const handleCancelClick = () => {
      // Reset the edited task name to the original name
      setEditedTaskName(props.name);
      setCompleted(props.completed);

      setIsEditing(false);

    };
  
    const handleCheckboxChange = () => {
      setCompleted(!completed);
      props.editTask(props.id, { ...props, completed: !props.completed });
    };

  
    return(
    <Card className="TaskCard">
    <CardContent>
      {isEditing ? (
        <>
        <TextField id="outlined-basic"     
          size="small"
          variant="outlined" 
          value={editedTaskName}
          onChange={event => setEditedTaskName(event.target.value)}/>

          <FormControlLabel 
              control={<Checkbox 
                          checked={completed} 
                          onChange={handleCheckboxChange} 
                          inputProps={{ 'aria-label': 'completed checkbox' }}
                      />} 
          label="completed" />
          <Button variant="contained" onClick={handleSaveClick} size="small" >Save</Button>  
          <Button variant="contained" onClick={handleCancelClick} size="small">Cancel</Button>  

        </>
      ) : (
        <>
          <Typography variant="h6" component="div" className="TaskName">{props.name}</Typography>
          <FormControlLabel 
              control={<Checkbox 
                          checked={completed} 
                          onChange={handleCheckboxChange} 
                          inputProps={{ 'aria-label': 'completed checkbox' }}
                      />} 
          label="completed" />        </>
      )}
    </CardContent>
    <CardActions>
      <IconButton id="del" onClick={handleDeleteTask} className="YN" aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton id="edit" onClick={handleEditClick} className="YN" aria-label="edit">
        <EditIcon />
      </IconButton>
    </CardActions>
  </Card>
   
    );
  }

  export default Task;