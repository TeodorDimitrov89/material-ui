import { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useLocation,
  useHistory,
} from 'react-router-dom';
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
  // let location = useLocation();
  // const history = useHistory();
  // console.log(history);
  // const [displayLocation, setDisplayLocation] = useState(location);
  // const [transitionStage, setTransistionStage] = useState('fadeIn');

  // useEffect(() => {
  //   if (location !== displayLocation) setTransistionStage('fadeOut');
  // }, [location, displayLocation]);
  return (
    // <ThemeProvider theme={theme}>
    //   <Router>
    //     <Layout>
    //       <Switch location={displayLocation}>
    //         <Route exact path='/'>
    //           <Notes />
    //         </Route>
    //         <Route path='/create'>
    //           <Create />
    //         </Route>
    //       </Switch>
    //     </Layout>
    //   </Router>
    // </ThemeProvider>
    <Router>
      <div className={`App`}>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/other'>Other</Link>
        </nav>
        <Content />
      </div>
    </Router>
  );
}

function Content() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState('fadeIn');

  useEffect(() => {
    if (location !== displayLocation) {
      console.log('ueEffect');
      setTransistionStage('fadeOut');
    }
  }, [location, displayLocation]);

  return (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === 'fadeOut') {
          setTransistionStage('fadeIn');
          setDisplayLocation(location);
        }
      }}
    >
      <Switch location={displayLocation}>
        <Route path='/other'>
          <section>other</section>
        </Route>
        <Route path='/'>
          <section>home</section>
        </Route>
      </Switch>
    </div>
  );
}
export default App;
