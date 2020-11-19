import logo from './logo.svg';
import './App.css';

import './assets/carolina/base.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/layout/layout'

function App() {
  return (
    <div className="App">
      <Router>
        <Layout >
        </Layout>
      </Router>
    </div>
  );
}

export default App;
