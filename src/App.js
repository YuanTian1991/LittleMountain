
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './components/layout/layout'

import Home from './pages/Home'

import PvalueDistribution from './pages/PvalueDistribution'

function App() {
  return (
    <div className="App">
      <Router>
        <Layout >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/PvalueDistribution" component={PvalueDistribution} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
