
import './App.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './containers/Home/Home';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      
      
        <Switch>

          <Route path='/' exact component={Home}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/register' exact component={Register}/>

        </Switch>
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
