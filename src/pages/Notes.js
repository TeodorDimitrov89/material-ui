import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
export default function Notes() {
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
      <div key={note.id}>
        <Typography component='h2' variant='h5'>
          {note.title}
        </Typography>
        <Typography>{note.category}</Typography>
        <Typography>{note.details}</Typography>
      </div>
    );
  });

  return <>{notesList}</>;
}
