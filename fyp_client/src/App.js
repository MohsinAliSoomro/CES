
import './App.scss';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import StdFrom from './components/stdForm';
import PrintComponent from './components/print/PrintComponent';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <StdFrom />
        </Route>
        <Route exact path="/print">
          <PrintComponent />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
