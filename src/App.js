import Header from './Components/Header';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Views/Home';
import About from './Components/Views/About';
import HelloWorld from './Components/Views/HelloWorld';
import CounterExample from './Components/Views/CounterExample';
import BeitragList from './Components/Views/BeitragList';
import Beitrag from './Components/Views/Beitrag';
import Login from './Components/Views/UserAuth/Login';
import Autoren from './Components/Views/Autoren';

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
              path="/beitraege/:id"
              element={<Beitrag />}>
            </Route>
            <Route
              path="/beitraege"
              element={<BeitragList />}>
            </Route>
            <Route
              path="/login"
              element={<Login />}>
            </Route>
            <Route
              path="/autoren"
              element={<Autoren />}>
            </Route>
          </Routes>
        </div>
        <Footer />
      </Router>


     
    </div>  
  );
}

export default App;
