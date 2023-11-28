import "./main.css";
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Cambio a HashRouter
import { CartProvider } from './context/CartContext';
import { Cart } from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <Router basename="/Pet-Paradise-react-final"> {/* Configuración del basename */}
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/productos/:categoria' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<h1> Página no encontrada </h1>} />
          </Routes>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;