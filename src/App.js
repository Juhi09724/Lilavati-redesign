import './App.css';
import ButtonAppBar from './Components/AppBar.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js'
import Form from './Pages/Form.js'
import Confirmation from './Pages/Confirmation.js'
import Profile from './Pages/Profile.js'
import PrimarySearchAppBar from './Components/AppBarSearch';
import Appointments from './Pages/Appointments.js'
import Box from '@material-ui/core/Box';
import GlobalAppBar from './Components/GlobalAppBar';
import { makeStyles } from '@material-ui/core/styles';
import HotlinesPopup from './Components/HotlinesPopup';
import Grid from '@material-ui/core/Grid';
import SimpleDialogDemo from './Components/EmergencyOpen';


function App() {
  return (
    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">
        <GlobalAppBar />
      </header>

      {/* Router - Pages */}
      <Switch>
        <Route path={process.env.PUBLIC_URL + '/'} exact > <Home/> </Route>
        <Route path={process.env.PUBLIC_URL + '/home'} > <Home /> </Route>
        <Route path={process.env.PUBLIC_URL + '/form'}  > <Form /> </Route>
        <Route path={process.env.PUBLIC_URL + '/confirmation'}  > <Confirmation /> </Route>
        <Route path={process.env.PUBLIC_URL + '/profile'}  > <Profile /> </Route>
        <Route path={process.env.PUBLIC_URL + '/appointments'}  > <Appointments /> </Route>
      </Switch>

      <Grid container spacing={-8} justifyContent="flex-end">
        <SimpleDialogDemo />
      </Grid>

      <Box>
        This the AppFooter
      </Box>


    </div>
  );
}

export default App;
