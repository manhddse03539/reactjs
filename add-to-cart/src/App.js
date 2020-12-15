import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TopMenu from './components/TopMenu';
import Home from './pages/Home';
import Products from './pages/Products';
import { CartProvider } from './contexts/Cart';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <TopMenu />
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
