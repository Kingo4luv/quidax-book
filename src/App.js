import { useState } from 'react';
import './App.scss';
import Cart from './Components/Cart';
import PageHeader from './Components/PageHeader';
import HomePage from './Pages/Homepage';
import {AnimatePresence} from 'framer-motion';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import BookDetail from './Pages/DetailPage';
import BookContextProvider from './context/BookContext';




function App() {
  const [cartBarIsOpen, setCartBarIsOpen] = useState(false);
  const toggleCart = () => {
    setCartBarIsOpen(!cartBarIsOpen);
  }
  
  return (
    <div className="App">
      <AnimatePresence>
       {cartBarIsOpen && (
        <Cart toggleCart={toggleCart} />
       )}
      </AnimatePresence>
      <Router>
        <BookContextProvider>
          <PageHeader toggleCart={toggleCart} />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/books/:bookId">
              <BookDetail />
            </Route>
          </Switch>
        </BookContextProvider>
      </Router>
    </div>
  );
}

export default App;
