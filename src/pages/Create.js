import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Create() {
  return (
    <div>
      <Typography
        variant='h6'
        component='h2'
        color='textSecondary'
        align='center'
        gutterBottom
      >
        Create New Note
      </Typography>
      <Typography
        variant='overline'
        component='h3'
        color='textPrimary'
      >
        Create New Note
      </Typography>

      <Typography color='secondary' noWrap>
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Voluptas, amet sunt tenetur explicabo repellat
        quos numquam, unde itaque commodi veniam alias
        aspernatur voluptatem voluptatum recusandae
        temporibus nulla ea! Eaque, aliquid!
      </Typography>
    </div>
  );
}
