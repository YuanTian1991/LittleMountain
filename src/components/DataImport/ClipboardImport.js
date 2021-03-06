import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';

import { useDispatch } from 'react-redux';
import { ReadFromClipboard } from '../../redux/actions/tableData';

const useStyles = makeStyles((theme) => ({

}));

export default function ClipboardImport() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleReadClipboard = () => {
    dispatch(ReadFromClipboard())
  }

  return (
    <div style={{ textAlign: 'center', marginTop: "0px", padding: '2em' }}>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Button
            variant="outlined"
            color="primary"
            style={{ fontWeight: '900' }}
            onClick={handleReadClipboard}
          >
            Read from Clipboard </Button>
        </Grid>
        <Grid item xs={8}>
        </Grid>
      </Grid>
    </div>
  );
}