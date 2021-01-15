
import './App.scss';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import StdFrom from './components/stdForm';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <StdFrom />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
