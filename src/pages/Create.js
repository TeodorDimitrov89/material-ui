import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';

export default function Create() {
  return (
    <Container>
      <Button variant='contained' color='primary'>
        Button
      </Button>

      <Button
        variant='contained'
        color='primary'
        disableElevation
      >
        Disabled Elevation
      </Button>

      <Button
        variant='outlined'
        color='primary'
        size='large'
      >
        Outlined Button
      </Button>

      <Button
        type='submit'
        color='primary'
        variant='contained'
      >
        Submit 1
      </Button>
      <Button
        type='submit'
        color='primary'
        variant='outlined'
      >
        Submit 1
      </Button>
      <ButtonGroup color='primary' variant='outlined'>
        <Button type='submit'>Submit 1</Button>
        <Button type='submit'>Submit 1</Button>
      </ButtonGroup>
    </Container>
  );
}
