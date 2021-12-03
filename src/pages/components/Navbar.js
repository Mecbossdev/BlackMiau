import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Paper from '@mui/material/Paper';
import Button from '@material-ui/core/Button';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
  root: {
    padding: 16,
    width: 275,
    marginRight: 16
  },
  button: {
    width: '100%'
  },
});
  
  const tags = [
    {id: 1, name:'Post video'},
    {id: 2, name:'Post reels'},
    {id: 3, name:'Postfolio'},
    {id: 4, name:'Contato'},
    {id: 5, name:'Bom café da manhã'},
    {id: 6, name:'Bom amanhecer'},
  ]

function Navbar(){
  const classes = useStyles();

  return (
    <Paper className={classes.root} >
      <Button variant="contained" color="secondary" className={classes.button}>Registra</Button> 
      <ListSubheader> {`Nested List Items`}</ListSubheader>
      {
        tags.map((item) => (
          <ListItem dense button key={`item-{$item.id}-{$item.name}`}>
            <ListItemText primary={`#${item.name}`} />
          </ListItem>
        ))

      }
      <ListItem button>
        Exibir mais palavrões

      </ListItem>
    </Paper>
   
  );
}

export default Navbar;