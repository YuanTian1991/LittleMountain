import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Container, Typography, Paper, Tabs, Tab, Box, TextField, Button, Card, CardMedia, Grid } from '@material-ui/core';

import BaseTable, { Column, AutoResizer } from 'react-base-table';
import 'react-base-table/styles.css';
import './tableStyle.css';

import { readString } from 'react-papaparse'

import ImportPanel from '../components/DataImport/ImportPanel'

const clipboardy = require('clipboardy');




const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'left',
  },
  resize: {
    fontSize: '12px',
    whiteSpace: 'nowrap'
  },
}));

export default function PvalueDistribution() {
  const classes = useStyles();
  const [tableColumn, setTableColumn] = React.useState([])
  const [tableData, setTableData] = React.useState([])
  const [DataReady, setDataReady] = useState(false);
  const [sortBy, setSortBy] = useState({ key: '', order: 'asc' });

  const handleReadClipboard = () => {
    clipboardy.read()
      .then((content) => {
        handlePapaparse(content)
      })
  }

  const handlePapaparse = (longString) => {
    const result = readString(longString, {
      header: true,
      dynamicTyping: true,
      beforeFirstChunk: (chunk) => {
        var rows = chunk.split(/\r\n|\r|\n/);
        var headings = rows[0].replace(/[.]/gi, '_');
        rows[0] = headings;
        return rows.join("\r\n");
      }
    })
    const tmpColumn = result.meta.fields.map((col, colIndex) => {
      return (
        {
          name: col,
          title: col,
          key: col,
          dataKey: col,
          width: 100,
          height: 40,
          resizable: true,
          align: Column.Alignment.CENTER,
          sortable: true,
        }
      )
    })

    const tmpData = result.data.map((row, rowIndex) => ({ ...row, rowKey: rowIndex }))

    setTableColumn(tmpColumn)
    setTableData(tmpData)
    setDataReady(true)
  }

  const onColumnSort = (sortBy) => {
    const order = sortBy.order === 'asc' ? 1 : -1;
    const tmpdata = [...tableData];
    tmpdata.sort((a, b) => (a[sortBy.key] > b[sortBy.key] ? order : -order));

    setTableData(tmpdata);
    setSortBy(sortBy);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" maxWidth="lg">
        <Typography variant="h4" gutterBottom style={{ fontWeight: "300", marginBottom: '1.2em' }}>
          P Value Distribution
        </Typography>

        <ImportPanel />

        <Card style={{ marginBottom: '4em', border: '1px solid #9e9e9e' }}>
          <CardMedia style={{ padding: '1em 2em 1em 2em' }}>
            <Typography variant="subtitle2" color="primary" style={{ fontWeight: "900" }}>
              2. Data Table
        </Typography>
          </CardMedia>
          <div style={{ backgroundColor: '#f8f9ff', overflowX: 'auto', }}>
            <div style={{ width: '100%', height: '50vh' }}>
              <AutoResizer>
                {({ width, height }) => {
                  return (
                    <BaseTable
                      width={width}
                      height={height}
                      fixed
                      rowKey="rowKey"
                      // estimatedRowHeight={({ rowData, rowIndex }) => estRowHight(rowData, rowIndex)}
                      // estimatedRowHeight={61}
                      columns={tableColumn}
                      data={tableData}
                      sortBy={sortBy}
                      onColumnSort={onColumnSort}
                      emptyRenderer={
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          minHeight="40vh">
                          <Typography
                            variant="h5"
                            gutterBottom
                            style={{ color: 'grey', fontWeight: '900' }}>
                            No data imported...
                        </Typography>
                        </Box>
                      }
                    />
                  );
                }}
              </AutoResizer>
            </div>
          </div>
        </Card>

        <Card style={{ marginBottom: '4em', border: '1px solid #9e9e9e' }}>
          <CardMedia style={{ padding: '1em 2em 1em 2em' }}>
            <Typography variant="subtitle2" color="primary" style={{ fontWeight: "900" }}>
              3. Draw P value distribution
        </Typography>
          </CardMedia>
        </Card>

        <Card style={{ border: '1px solid #9e9e9e' }}>
          <CardMedia style={{ padding: '1em 2em 1em 2em' }}>
            <Typography variant="subtitle2" color="primary" style={{ fontWeight: "900" }}>
              4. ggplot2 code
        </Typography>
          </CardMedia>
        </Card>
      </Container>
    </div >
  );
}
