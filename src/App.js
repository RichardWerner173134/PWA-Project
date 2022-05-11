import HelloWorld from './Components/HelloWorld';
import CounterExample from './Components/CounterExample';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <HelloWorld name='Richard' />



      <Router>
        <ul>
          <li>
            <Link to="/" className='text-blue-500'>Home</Link>
          </li>
          <li>
            <Link to="/about" className='text-blue-500'>About</Link>
          </li>
        </ul>
        <Routes>
          <Route 
            path="/"
            element={<h1 className='font-bold text-2xl'>This is a Homepage</h1>}> 
          </Route>
          <Route 
            path="/about"
            element={<h1 className='font-bold text-2xl'>About us</h1>}>
          </Route>
        </Routes>
      </Router>


      <CounterExample />
      <Footer />
    </div>  
  );
}

export default App;
