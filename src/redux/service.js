import api from './api';
// import axios from 'axios';

const clipboardy = require('clipboardy');

function ReadFromClipboard() {
  return clipboardy.read()
}

export default {
  ReadFromClipboard
};
