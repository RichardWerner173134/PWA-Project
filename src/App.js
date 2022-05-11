import Header from './Components/Header';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Views/Home';
import About from './Components/Views/About';
import HelloWorld from './Components/Views/HelloWorld';
import CounterExample from './Components/Views/CounterExample';
import ProductList from './Components/Views/ProductList';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className='p-3'>
          <Routes>
            <Route 
              path="/"
              element={<Home />}> 
            </Route>
            <Route 
              path="/about"
              element={<About />}>
            </Route>
            <Route
              path="/hello-world"
              element={<HelloWorld />}>
            </Route>
            <Route
              path="/counter-example"
              element={<CounterExample />}>
            </Route>
            <Route
              path="/products"
              element={<ProductList />}>
            </Route>
          </Routes>
        </div>
        <Footer />
      </Router>


     
    </div>  
  );
}

export default App;
