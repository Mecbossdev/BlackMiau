import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import SvgIcon from '@mui/material/SvgIcon';
import { Bell } from 'react-feather';
import Avatar from '@mui/material/Avatar';

const useStyles = makeStyles({
  appBar: {
    boxShadow: 'none',
    
  },
  img: {
    maxheight: 35,
  },
  grow: {
    flexGrow: 1,
  },
  userSection: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    marginRight: 10
  },
  bell: {
    marginRight: 10
  }

});

function Header() {
   const classes = useStyles();

  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar>
          <img src="images/log.png" alt="logo" className={classes.img}></img>
          <div className={classes.grow}></div>
          <div className={classes.userSection}>
            <Button color="primary" variant="contained" className={classes.button}>
              Novo Post
            </Button>
            <SvgIcon className={classes.bell}>
              <Bell></Bell>
            </SvgIcon>
            <Avatar alt="Jeferson Fernandes" src="" />
          </div>
          {/*<div>
            <a href='/'>BlackMiau</a>
            <input type="text"></input>
          </div>
          <div>
            
            <span>img1</span>
            <span>img2</span>
          </div>*/}
        </Toolbar>
    </AppBar>
    )
  };

  export default Header;