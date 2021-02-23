import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Card, CardContent, Grid, Box, Typography, Button } from '@material-ui/core';

import ReactEcharts from 'echarts-for-react';

const Chart = (props) => {
  const classes = useStyles();

  return (
    <div style={{ textAlign: 'center', marginTop: "0px", paddingTop: '0px' }}>
      {
        props.plotReady ? (
          <ReactEcharts
            id="fullChart"
            option={props.option}
            notMerge={true}
            lazyUpdate={true}
            style={{ height: '40em' }}
          />
        ) : (
            <div>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="40em">
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{ color: 'grey', fontWeight: '900' }}>
                  {props.errorMsg}
                </Typography>
              </Box>
            </div>
          )
      }

    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxHeight: 800,
    overflowY: 'auto',
  },
  rotateSelect: {
    position: 'relative',
    top: '40%',
  },
}));

export default Chart;