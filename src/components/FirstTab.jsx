import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

export default function FirstTab() {
  //   const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid item xs={8}>
          <Paper>Hello World</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper> haha </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
