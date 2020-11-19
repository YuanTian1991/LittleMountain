import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Copyright() {
  return (
    <div style={{ paddingTop: '2em', paddingBottom: '2em', textAlign: 'center' }}>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
          Yuan Tian
          {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </div>
  );
}
