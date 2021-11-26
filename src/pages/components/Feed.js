import React from 'react';
import { makeStyles } from '@material-ui/styles';
import PostCard from '../../utils/PostCard';

const useStyles = makeStyles({
  root: {

  }
});

const posts = [
  { id: 1,
    author: {
      id: 1,
      name: 'José silva',
      userName: 'Jsilva',
      avatar: '/images/avatars/man.png'
    },
    title: "Video de dança de suingueira",
    date: "Novembro 22, 2021",
    description: "Fala pessoal, qual o framework favorito por voces?",
    hashtags:"#Framework, #Javascript",
    image:"/images/avatars"
  },
  { id: 2,
    author: {
      id: 2,
      name: 'Maria costa',
      userName: 'mariazinha',
      avatar: '/images/avatars/man.png'
    },
    title: "Cantando a musica da xuxa ao contrario",
    date: "Novembro 22, 2021",
    description: "Fala pessoal, qual o framework favorito por voces?",
    hashtags:"#Framework, #Javascript",
    image:"/images/avatars"
  },
  { id: 3,
    author: {
      id: 3,
      name: 'Isis Maria',
      userName: 'Isissilva',
      avatar: '/images/avatars/man.png'
    },
    title: "Fazendo um miojo super temperado",
    date: "Novembro 22, 2021",
    description: "Fala pessoal, qual o framework favorito por voces?",
    hashtags:"#Framework, #Javascript",
    image:"/images/posts/card1.png"
  },

];

function Feed(){
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {
      posts.map(post => (
      <PostCard key={post.id} post={post}  />
      )) 
      }
    </div>
  );
}

export default Feed;