import React, {useState , useEffect} from "react";
import { Products, Navbar, Cart} from './components'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { commerce } from './lib/commerce';

function App() {
  // const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})

  // const fetchProducts = async () => {
  //   const { data } = await commerce.products.list();

  //   setProducts(data);
  // };

  // const fetchCart = async () => {
  //   setCart(await commerce.cart.retrieve());
  // };

  // const handleAddToCart = async (productId, quantity) => {
  //   const item = await commerce.cart.add(productId, quantity);

  //   setCart(item.cart);
  // };

// useEffect(() => {
//   fetchProducts();
//   // fetchCart();

// }, []);


  return ( 
    <Router>
      <div className="App">
        <Navbar/>

        <Switch>

        <Route path="/" exact component={Products}/>


        <Route path="/cart" exact component={Cart}/>


           
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
