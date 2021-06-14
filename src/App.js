import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ProductDetails from './components/ProductDetails';
import ProductsList from './components/Products/ProductsList';
import Error404 from './error404/Error404';
function App() {
  return (
    <div className="grid-container">
      <Router>
        <header>
          shopping cart
        </header>
        <Switch>
          <main>
           <Route path="/" exact component={ProductsList}/>
           <Route path="product/:productId" component={ProductDetails}/>
           <Route path="*" component={Error404} />
          </main>
        </Switch>
      </Router>
      <footer>
        All reserved.
      </footer>
    </div>
  );
}

export default App;
