import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NoteCard from '../components/NoteCard';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({}));

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
      <Grid item xs={12} sm={6} md={4} key={note.id}>
        <NoteCard note={note} />
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
