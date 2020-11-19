import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Copyright() {
  return (
    <div style={{
      textAlign: 'center', height: '10vh', display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }}>
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
