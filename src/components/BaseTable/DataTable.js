import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';

import BaseTable, { AutoResizer } from 'react-base-table';
import 'react-base-table/styles.css';
import './tableStyle.css';

import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({

}));

export default function DataTable() {
  const classes = useStyles();

  const { tableRow, tableColumn, loaded } = useSelector((state) => ({
    tableRow: state.TableData.tableRow,
    tableColumn: state.TableData.tableColumn,
    loaded: state.TableData.loaded
  }));

  const [sortBy, setSortBy] = useState({ key: '', order: 'asc' });

  const handleSetSort = (sortBy) => {
    setSortBy(sortBy);
  }

  const onColumnSort = (sortBy) => {
    if (loaded) {
      const order = sortBy.order === 'asc' ? 1 : -1;
      const tmpRow = [...tableRow];
      return tmpRow.sort((a, b) => (a[sortBy.key] > b[sortBy.key] ? order : -order));
    } else {
      return []
    }
  };

  return (
    <div style={{ overflowX: 'auto', textAlign: 'center', marginTop: "0px", paddingTop: '0px' }}>
      <div style={{ width: '100%', height: '30em' }}>
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
                data={onColumnSort(sortBy)}
                sortBy={sortBy}
                onColumnSort={handleSetSort}
                emptyRenderer={
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="20em">
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
  );
}