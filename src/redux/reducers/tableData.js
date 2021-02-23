import { SET_TABLEDATA, SET_TABLEDATA_SUCCESS, SET_TABLEDATA_FAIL } from '../types/tableData';

const initialState = {
  tableRow: [],
  tableColumn: [],
  loaded: false,
  error: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_TABLEDATA: {
      return {
        ...state,
        tableRow: [],
        tableColumn: [],
        loaded: false,
        error: false
      };
    }
    case SET_TABLEDATA_SUCCESS: {
      return {
        ...state,
        tableRow: action.payload.tableRow,
        tableColumn: action.payload.tableColumn,
        loaded: true,
      };
    }
    case SET_TABLEDATA_FAIL: {
      return {
        ...state,
        error: action.payload.data
      };
    }
    default:
      return state;
  }
}
