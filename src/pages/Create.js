import React, { useState } from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const useStyles = makeStyles({
  root: {
    color: 'black',
    '&$checked': {
      color: 'black',
    },
    '&$checkboxChecked': {
      color: 'blue',
    },
  },
  checked: {},
  checkboxChecked: {},
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
  const [category, setCategory] = useState('money');

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

  const changeHandler = (e) => {
    setCategory(e.target.value);
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
      console.log(category, 'category');
    }
  };

  return (
    <Container>
      <br />
      <Typography variant='h6' component='h2' color='primary' className={classes.text}>
        Create a new Note
      </Typography>
      <form noValidate autoComplete='off' onSubmit={submitHandler}>
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

        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                className={clsx(classes.root, classes.checkboxChecked)}
                icon={<CheckBoxOutlineBlankIcon color='primary' fontSize='medium' />}
                checkedIcon={<CheckBoxIcon fontSize='medium' />}
              />
            }
            label='Checkbox'
          />
        </FormGroup>

        <FormControl className={classes.field}>
          <FormLabel component='legend'>Note Category</FormLabel>
          <RadioGroup
            aria-label='categories'
            name='categories'
            value={category}
            onChange={changeHandler}
          >
            <FormControlLabel
              value='money'
              control={<Radio className={clsx(classes.root, classes.checked)} />}
              label='Money'
            />
            <FormControlLabel
              value='todos'
              control={<Radio className={clsx(classes.root, classes.checked)} />}
              label='Todos'
            />
            <FormControlLabel value='reminders' control={<Radio />} label='Reminders' />
            <FormControlLabel value='work' control={<Radio />} label='Work' />
          </RadioGroup>
        </FormControl>

        <Button
          type='submit'
          variant='contained'
          color='primary'
          size='large'
          endIcon={<ChevronRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
