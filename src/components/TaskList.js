
import Task from './Task';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  taskBox: {
    padding: theme.spacing.unit * 2,
  },
});

const TaskList = (props) => (
  <Box mt={2}>
    <Grid container spacing={2}>
      {props.data.map((data) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={data.id}>
          <Paper elevation={3} className="TaskBox">
            <Task {...data} deleteTask={props.deleteTask} editTask={props.editTask} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
  );

  export default withStyles(styles)(TaskList);