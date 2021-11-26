import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Header from '../components/Header';
import Feed from '../components/Feed';
import Navbar from '../components/Navbar';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/system/Box';
//import './styles.css';

const useStyles = makeStyles({
  root: {
    display:'flex',
    flexDirection: 'column'
  },
  main: {
    height: '100vh',
    padding: 100
  },
  toolbar: {
    minHeight: 64,
  }
});

function Home() {
  const classes = useStyles();


  return (
  <div className = {classes.root}>
    <Header />
    <div className={classes.toolbar}></div>
    <main className={classes.main}>
      <Container maxWidth="lg">
        <Box display="flex">
          <Navbar />
          <Feed />
        </Box>
      </Container>
      
    </main>

  </div>
  );
}

export default Home;

