import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/styles';
import {Grid} from '@material-ui/core';

const useStyles = makeStyles({
  helloThereStyle: {
    fontStyle: 'oblique'
  }
});

function App() {
  // const classes = useStyles;
  return (
    <Grid container direction="column">
      <Header />
      {/* <Grid item>Header Content</Grid> */}
      <Grid item container>
        <Grid item xs={0} sm={2} />
        <Grid item xs={12} sm={8}>Body ContentBody 
        ContentBody ContentBody ContentBody ContentBody ContentBody 
        ContentBody ContentBody ContentBody ContentBody Content</Grid>
        <Grid item xs={0} sm={2}/>
      </Grid>
    </Grid>




    // <div>
    //   <NavBar />
    //   <Button variant="outlined" color="primary">
    //     Hello World
    //   </Button>

    //   <Typography 
    //     className={classes.helloThereStyle}
    //     variant="h1"
    //     color="primary"
    //   >
    //     Helloooo
    //   </Typography>
    // </div>
  );
}

export default App;
