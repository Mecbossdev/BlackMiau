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
    display: 'flex',
    width: '1280px',
    margin: '0 auto',
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
      <Container>
        <Box>
          <Feed />
          <Navbar />
        </Box>
      </Container>
      
    </main>

  </div>
  );
}

export default Home;

