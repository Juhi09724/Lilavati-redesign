import './App.css';
import ButtonAppBar from './Components/AppBar.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js'
import Form from './Pages/Form.js'
import Confirmation from './Pages/Confirmation.js'
import Profile from './Pages/Profile.js'
import PrimarySearchAppBar from './Components/AppBarSearch';
import Appointments from './Pages/Appointments.js'


function App() {
  return (
    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">
      <PrimarySearchAppBar/>
      </header>
      
      {/* Router - Pages */}
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/home'} > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/form'}  > <Form/> </Route>
            <Route path={process.env.PUBLIC_URL + '/confirmation'}  > <Confirmation/> </Route>
            <Route path={process.env.PUBLIC_URL + '/profile'}  > <Profile/> </Route>
            <Route path={process.env.PUBLIC_URL + '/appointments'}  > <Appointments/> </Route>
          </Switch>

      <footer className="App-footer">
        This is a footer
      </footer>
    </div>
  );
  }

export default App;
