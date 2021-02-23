import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Container, Typography } from '@material-ui/core';


import ImportPanel from '../components/DataImport/ImportPanel'
import TablePanel from '../components/BaseTable/TablePanel'
import ChartPanel from '../components/Echart/ChartPanel'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'left'
  }
}));

export default function PvalueDistribution() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" maxWidth="lg">
        <Typography variant="h4" gutterBottom style={{ fontWeight: "100", marginBottom: '1.2em', textAlign: 'center' }}>
          P Value Distribution
        </Typography>

        <ImportPanel />
        <TablePanel />
        <ChartPanel />

      </Container>
    </div >
  );
}
