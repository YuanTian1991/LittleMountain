import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Collapse, Button, Card, CardMedia, Grid } from '@material-ui/core';

import { useSelector } from 'react-redux';

import { CreatePvalueHist } from './js/CreatePvalueHist'

import Chart from './Chart'

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

export default function ChartPanel() {
  const classes = useStyles();
  const buttomIteams = ['Chart', 'Tune']
  const [value, setValue] = React.useState(0);

  const { tableRow, tableColumn, loaded } = useSelector((state) => ({
    tableRow: state.TableData.tableRow,
    tableColumn: state.TableData.tableColumn,
    loaded: state.TableData.loaded
  }));

  useEffect(() => {
    if (loaded) {
      RestParameters()
      try {
        var newPlot = CreatePvalueHist(tableColumn, tableRow, { name: 'P_Value', key: 'PValue' });

        setOption(newPlot.option);
        // setEventsDict(newPlot.EventsDict);
        setWarningMsg(newPlot.warningMsg);
        setErrorMsg(newPlot.errorMsg);
        setMSG(newPlot.msg);
        setPlotReady(newPlot.plotReady);
      }
      catch (err) {
        setErrorMsg('Generate Plot Failed');
      }


    }
  }, [loaded])

  // const [xAxis, setXAxis] = useState(null);
  // const [yAxis, setYAxis] = useState(null);
  const [plotReady, setPlotReady] = useState(false);
  // const [EventsDict, setEventsDict] = useState(null);
  const [msg, setMSG] = useState('');
  const [warningMsg, setWarningMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('Plot option is not detected...');
  const [option, setOption] = useState([]);

  const RestParameters = () => {
    setOption([]);
    // setEventsDict(newPlot.EventsDict);
    setWarningMsg('');
    setErrorMsg('Plot option is not detected...');
    setMSG('');
    setPlotReady(false);
  }

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
              3. Chart
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
        <Chart option={option} plotReady={plotReady} errorMsg={errorMsg} />
      </Collapse>

    </Card>
  );
}