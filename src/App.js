
import './App.css';
import './assets/carolina/base.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './components/layout/layout'

import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Layout >
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
