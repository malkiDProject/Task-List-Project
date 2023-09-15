import React from 'react';
import { Paper,Grid,  Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    headerContainer: {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      padding: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    countText: {
      fontWeight: 'bold',
    },
  }));
  

const Headers = ({ completedTaskCount, incompleteTaskCount }) => {
    const classes = useStyles();

  return (
    <Paper className={classes.headerContainer}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">
            <span className={classes.countText}>Completed Tasks:</span>
            {completedTaskCount}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">
            <span className={classes.countText}>Incomplete Tasks:</span>
            {incompleteTaskCount}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
    /*<Box >
    <Typography variant="h6">
      <span >Completed Tasks:</span>
      {completedTaskCount}
    </Typography>
    <Typography variant="h6">
      <span >Incomplete Tasks:</span>
      {incompleteTaskCount}
    </Typography>
  </Box>*/
  );
};

export default Headers;