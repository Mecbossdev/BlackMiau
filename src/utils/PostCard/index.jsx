import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardActionsArea from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import  Avatar  from '@mui/material/Avatar';

const UserStyles = makeStyles({
  root:{
    marginBottom: 16
  },
  subheader: {
    display: 'flex',
    alignItems: 'center'
  },
  caption: {
    marginRight: 16,
  },
  message: {
    height: 'auto',
    marginBottom: 16,
    padding: '0 24px'
  },
  image: {
    height: 300,
    width: '100%',
    maxWidth: '100%',
  },
  content: {
    padding: 0
  }
  
});


function PostCard ({ post }) {
  const classes = UserStyles();
  return (
    <Card className={classes.root}>

      
      <CardHeader 
      avatar={<Avatar src={post.author.avatar}/>}
      title={<Typography variant="h6">{post.title}</Typography>}
      subheader={
        <div className={classes.subheader}>
          <Typography variant="caption" className={classes.caption}>
            {'Avaliado por'}
          </Typography>
          <Typography variant="subtitle2" className={classes.caption}>
            {post.author.name}
          </Typography>
          <Typography variant="caption" className={classes.caption}>
            {post.date}
          </Typography>
        </div>
      }
      />
      <CardContent className={classes.content}>
        <Typography 
          className={classes.message}
          variant="body1"
        >
          {post.hashtags}
        </Typography>
      </CardContent>
      <CardActionsArea>
        <img src={post.image} className={classes.image} alt="img"/>
      </CardActionsArea>
      
      <CardActions>
        
      </CardActions>
    </Card>
  )
}

export default PostCard;