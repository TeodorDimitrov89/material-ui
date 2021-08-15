import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notes from './pages/Notes';
import Create from './pages/Create';
// import blueGrey from '@material-ui/core/colors/';
import cyan from '@material-ui/core/colors/cyan';
import purple from '@material-ui/core/colors/purple';
import { createTheme, ThemeProvider } from '@material-ui/core';
import Layout from './components/Layout';

const theme = createTheme({
  palette: {
    primary: {
      main: cyan[500],
    },
    secondary: {
      main: purple[500],
    },
  },
  typography: {
    fontFamily: 'Noto Sans',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/'>
              <Notes />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
