import Home from './components/Home';
import Login from './components/Login';
import './App.css';
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div >
      <Switch>
        <Route path='/' exact>
          <Login />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
