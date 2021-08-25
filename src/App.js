import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import './App.css';
import Shop from './component/Shop/Shop';
import Header from './component/Header/Header';
import MainManu from './component/MainManu/MainManu';
import Order from './component/Order/Order';
import Product from './component/Product/Product';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Banner from './component/Banner/Banner';

function App() {
  return (
    <div className="App">
      <div className="header-position">
        <Header></Header>
      </div>
      <Banner />
      <Shop></Shop>

        <Router>

          {/* <Switch>
              <Route path="/review">
                <Product />
              </Route>
              <Route path="/order">
                <Order />
              </Route>
              <Route path="/">
                <Shop />
              </Route>
            </Switch> */}
        </Router>
    </div>
  );
}

export default App;
