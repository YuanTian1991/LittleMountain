import './App.css';

import { HashRouter, Route, Switch } from 'react-router-dom';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { grey, amber } from '@material-ui/core/colors';

import Layout from './components/layout/layout'

import Home from './pages/Home'
import PvalueDistribution from './pages/PvalueDistribution'

const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: grey[800],
    },
    secondary: {
      main: '#f2cc8f',
    },
  },
});


function App() {
  return (
    <div className="App">
      <HashRouter>
        <ThemeProvider theme={outerTheme}>
          <Layout >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/PvalueDistribution" component={PvalueDistribution} />
            </Switch>
          </Layout>
        </ThemeProvider>
      </HashRouter>
    </div>
  );
}

export default App;
