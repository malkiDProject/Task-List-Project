import React, { useState } from 'react'; 

import { TextField, Box, Button } from '@mui/material';

const MainForm = (props) => {
    const [taskName, setTaskName] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      const newData = { name: taskName };
      props.onSubmit(newData);
      setTaskName('');
    };
  
    return (
      <Box mt={2}>
        <TextField id="outlined-basic"     
          size="small"
          style={{ width: '80%', marginBottom: '10px',marginRight:'5%' }} // Adjust the width and margin as needed
          label="Task name" 
          variant="outlined" 
          value={taskName}
          onChange={event => setTaskName(event.target.value)}
          required/>

        <Button 
          variant="contained"
          style={{ width: '15%', marginBottom: '10px' }} // Adjust the width and margin as needed
          onClick={handleSubmit}>
          Add task
        </Button>        
      </Box>
    );
  }

  export default MainForm;