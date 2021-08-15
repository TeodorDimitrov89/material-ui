import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
    height: `calc(100% - ${theme.spacing(4)}px)`,
  },
}));

export default function Notes() {
  const classes = useStyles();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      const data = await fetch('http://localhost:8000/notes');
      const response = await data.json();
      setNotes(response);
    };

    getNotes();
  }, []);

  const notesList = notes.map((note) => {
    return (
      <Grid item xs={12} sm={6} md={4} lg={3} key={note.id}>
        <Paper className={classes.control}>
          <Typography component='h2' variant='h5'>
            {note.title}
          </Typography>
          <Typography>{note.category}</Typography>
          <Typography>{note.details}</Typography>
        </Paper>
      </Grid>
    );
  });

  return (
    <Container>
      <Grid container className={classes.root} spacing={2}>
        {notesList}
      </Grid>
    </Container>
  );
}
