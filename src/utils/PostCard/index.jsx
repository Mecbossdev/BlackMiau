import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/icons/IconButton';
import FavoriteIcon from '@mui/material/icons/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MessageIcon  from '@mui/material/icons/Message';




const userStyles = makeStyles({
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
  },
  favorite: {
    marginLeft: "auto"
  }
  
});


function PostCard({ post }) {
  const classes = userStyles();

  return (
    <Card className={classes.root}>
      <CardHeader 
        avatar={<Avatar src={post.author.avatar} />}
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
      <CardActionArea>
        <img src={post.image} className={classes.image} alt="img"/>
      </CardActionArea>
    </CardContent>
      <CardActions disableSpacing>
        <IconButton arial-label="like">
          <FavoriteIcon />
          <Typography
            style={{cursor: 'pointer'}}
            color="textSecondary"
            variant="body2"
          >
            {'10'}
          </Typography>
        </IconButton>
        <IconButton>
          <MessageIcon />
          <Typography 
            className={classes.reactions}
            color="textSecondary"
            variant="body2"
          >
            {38}
          </Typography>
        </IconButton>
        <IconButton arial-label="favorite" className={classes.favorite}>
          <BookmarkIcon />
        </IconButton> 
      </CardActions>
    </Card>
  )
}

export default PostCard;