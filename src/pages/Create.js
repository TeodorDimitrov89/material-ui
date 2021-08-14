import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
// import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default function Create() {
  return (
    <Container>
      <br />
      <Button variant='contained' color='primary'>
        Button
      </Button>

      {/* Icons */}

      {/* <AcUnitOutlinedIcon />
      <AcUnitOutlinedIcon
        color='primary'
        fontSize='small'
      />
      <AcUnitOutlinedIcon
        color='secondary'
        fontSize='large'
      />
      <AcUnitOutlinedIcon
        color='disabled'
        fontSize='medium'
      />
      <AcUnitOutlinedIcon color='error' fontSize='medium' />
      <AcUnitOutlinedIcon color='action' fontSize='large' /> */}

      {/* Button icons */}
      <br />
      <br />
      <ButtonGroup>
        <Button
          variant='outlined'
          color='secondary'
          endIcon={<DeleteIcon />}
        >
          Delete
        </Button>

        <Button
          variant='contained'
          color='primary'
          size='small'
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </ButtonGroup>
    </Container>
  );
}
