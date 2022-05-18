import Header from './Components/Header';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import AppContent from './Components/AppContent';
import Cookiebar from './Components/Cookiebar';

function App() {
  return (
    <Router>
      <Header />
      <AppContent />
      <Footer />
      <Cookiebar />
    </Router>
  );
}

export default App;
