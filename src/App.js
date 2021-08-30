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
import Error from './component/Error/Error';
import Review from './component/Review/Review';
import Inventory from './component/Inventory/Inventory';
import ProductDetails from './component/ProductDetails/ProductDetails';

function App() {
  return (
    <div className="App">
      <div className="header-position">
        <Header></Header>
      </div>
      <Banner />

        <Router>
          <Switch>
              <Route exact path="/shop">
                <Shop />
              </Route>
              
              <Route exact path="/review">
                <Review />
              </Route>

              <Route exact path="/inventory">
                <Inventory />
              </Route>

              <Route exact path="/product/:productKey">
                <ProductDetails />
              </Route>

              <Route exact path="/">
                <Shop />
              </Route>

              <Route path="*">
                <Error />
              </Route>

            </Switch>
        </Router>
    </div>
  );
}

export default App;
