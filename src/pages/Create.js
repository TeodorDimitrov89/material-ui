import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core';



const useStyles = makeStyles({
  btn: {
    fontSize: 26,
    backgroundColor: 'violet',
    color: 'white',
    transition: 'all .3s ease-in',
    '&:hover': {
      backgroundColor: '#ddd',
    },
  },
  text: {
    textDecoration: 'underline',
    marginBottom: 30,
    fontSize: 32,
  },
});
export default function Create() {
  const classes = useStyles();
  return (
    <Container>
      <br />
      <Typography
        variant='h6'
        component='h2'
        color='primary'
        className={classes.text}
      >
        Create a new Note
      </Typography>
      <Button
        variant='contained'
        color='primary'
        size='large'
        className={classes.root}
        endIcon={<ChevronRightIcon />}
      >
        Move
      </Button>
    </Container>
  );
}
