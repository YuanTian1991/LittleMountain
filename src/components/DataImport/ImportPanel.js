import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Typography, Collapse, Button, Card, CardMedia, Grid } from '@material-ui/core';

import ClipboardImport from './ClipboardImport'

const useStyles = makeStyles((theme) => ({
  topbarButton: {
    margin: '6px 10px',
    marginRight: '20px',
    fontWeight: '500',
    color: 'lightgrey',
    '&:hover': {
      backgroundColor: 'white'
    }
  }
}));

export default function ImportPanel() {
  const classes = useStyles();
  const buttomIteams = ['Clipboard', 'CSV/Excel', 'Google Sheets', 'TextArea']
  const [value, setValue] = React.useState(-1);

  const handleChange = (newValue) => {
    if (newValue === value) {
      setValue(-1)
    } else {
      setValue(newValue);
    }
  };

  return (
    <Card elevation={0} style={{ marginBottom: '4em', border: '1px solid #9e9e9e' }}>
      <CardMedia style={{ padding: '0', borderBottom: '1px solid #9e9e9e' }}>
        <Grid container spacing={4}>
          <Grid item xs={2} >
            <Typography variant="subtitle2" color="primary" style={{ fontWeight: "900", padding: '10px 10px', paddingLeft: '2em' }}>
              1. Import From
          </Typography>
          </Grid>
          <Grid item xs={8}>
            {
              buttomIteams.map((item, buttonIndex) => {
                return (
                  <Button
                    key={buttonIndex}
                    size="small"
                    className={classes.topbarButton}
                    onClick={() => handleChange(buttonIndex)}
                    style={buttonIndex === value ? { color: 'black' } : null}
                  >
                    {item}
                  </Button>
                )
              })
            }
          </Grid>
        </Grid>
      </CardMedia>

      <Collapse in={value === 0}>
        <ClipboardImport />
      </Collapse>

      <Collapse in={value === 1}>
      </Collapse>

      <Collapse in={value === 2}>
      </Collapse>

      <Collapse in={value === 3}>
      </Collapse>

    </Card>
  );
}