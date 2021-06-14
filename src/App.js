import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ProductDetails from './components/ProductDetails';
import Products from './components/Products';
import ProductsList from './components/Products/Product';
import Error404 from './error404/Error404';
function App() {
  return (
    <div className="grid-container">
      <Router>
        <header>
          shopping cart
        </header>
        
          <main>
          <Switch>
           <Route path="/" exact component={Products}/>
           <Route path="product/:productId" component={ProductDetails}/>
           <Route path="*" component={Error404} />
           </Switch>
          </main>
        
      </Router>
      <footer>
        All reserved.
      </footer>
    </div>
  );
}

export default App;
