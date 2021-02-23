import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Collapse, Button, Card, CardMedia, Grid } from '@material-ui/core';

import { useSelector } from 'react-redux';

import DataTable from './DataTable'

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

export default function TablePanel() {
  const classes = useStyles();
  const buttomIteams = ['Table', 'Filter']
  const [value, setValue] = React.useState(0);

  const { tableRow, tableColumn, loaded } = useSelector((state) => ({
    tableRow: state.TableData.tableRow,
    tableColumn: state.TableData.tableColumn,
    loaded: state.TableData.loaded
  }));

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
              1. Data Table
          </Typography>
          </Grid>
          <Grid item xs={7}>
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
          <Grid item xs={3}>
            <div style={{ padding: '12px 12px', float: 'right', fontSize: '0.85em' }}>
              <b style={{ color: 'black' }}>
                {tableRow.length}
                {/* <CountUp end={table.rowLength} /> */}
              </b>
        &nbsp;
        <span style={{ color: 'grey' }}> rows </span>
         &nbsp;
        <b style={{ color: 'black' }}>
                {tableColumn.length}
                {/* <CountUp end={props.columnLength} /> */}
              </b>
        &nbsp;
        <span style={{ color: 'grey' }}> cols </span>
            </div>
          </Grid>
        </Grid>
      </CardMedia>

      <Collapse in={value === 0}>
        <DataTable />
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