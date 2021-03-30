
import './App.scss';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import StdFrom from './components/stdForm';
import PrintComponent from './components/print/PrintComponent';
import { useEffect, useState } from 'react';
function App() {
  const [result,setResult] = useState()
  useEffect(() => {
    fetch('http://localhost:4000/marks/marksStudent/6041269b87e5f13160bd76b7/604122fc12ad281dace9e4df')
			.then((js) => js.json())
      .then((res) => {
        console.log(res)
        setResult(res)
			});
  },[])
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <StdFrom />
        </Route>
        <Route exact path="/print">
          <PrintComponent result={result} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
