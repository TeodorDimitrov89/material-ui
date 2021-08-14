import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

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
  field: {
    display: 'block',
    marginTop: 20,
    marginBottom: 20,
  },
});
export default function Create() {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
    if (e.target.value.trim().length > 0) {
      setTitleError(false);
    }
  };

  const detailsChangeHandler = (e) => {
    setDetails(e.target.value);

    if (e.target.value.trim().length > 0) {
      setDetailsError(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (title.trim() === '') {
      setTitleError(true);
    }
    if (details.trim() === '') {
      setDetailsError(true);
    }

    if (title && details) {
      console.log(title, 'title');
      console.log(details, 'details');
    }
  };
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

      <form
        noValidate
        autoComplete='off'
        onSubmit={submitHandler}
      >
        <TextField
          onChange={titleChangeHandler}
          className={classes.field}
          value={title}
          label='Note Title'
          variant='outlined'
          color='secondary'
          fullWidth
          required
          error={titleError}
        />

        <TextField
          onChange={detailsChangeHandler}
          className={classes.field}
          value={details}
          label='Details'
          variant='outlined'
          color='secondary'
          fullWidth
          multiline
          rows={4}
          required
          error={detailsError}
        />

        <Button
          type='submit'
          variant='contained'
          color='primary'
          size='large'
          className={classes.root}
          endIcon={<ChevronRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
