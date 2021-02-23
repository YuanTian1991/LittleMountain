import { SET_TABLEDATA, SET_TABLEDATA_SUCCESS, SET_TABLEDATA_FAIL } from '../types/tableData';

import Service from '../service';
import { Column } from 'react-base-table';
import { readString } from 'react-papaparse'

export const ReadFromClipboard = () => {
  return (dispatch) => {
    dispatch({ type: SET_TABLEDATA });
    Service.ReadFromClipboard()
      .then((longString) => {

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

        const tmpRow = result.data.map((row, rowIndex) => ({ ...row, rowKey: rowIndex }))

        dispatch({ type: SET_TABLEDATA_SUCCESS, payload: { tableColumn: tmpColumn, tableRow: tmpRow } });
      })
      .catch((error) => {
        dispatch({ type: SET_TABLEDATA_FAIL, payload: { error: error.response } });
      });
  };
};