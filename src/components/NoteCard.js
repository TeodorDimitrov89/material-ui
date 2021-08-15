import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: 100,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  control: {
    paddingBottom: theme.spacing(2),
    height: `calc(100% - ${theme.spacing(4)}px)`,
  },
}));

export default function NoteCard({ note }) {
  const classes = useStyles();
  return (
    <Card className={classes.control}>
      <CardHeader
        action={
          <IconButton aria-label='settings'>
            <DeleteOutlined></DeleteOutlined>
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  );
}
