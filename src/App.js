import './App.scss';
import PageHeader from './Components/PageHeader';
import HomePage from './Pages/Homepage';
import {AnimatePresence} from 'framer-motion';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import BookDetail from './Pages/DetailPage';
import BookContextProvider from './context/BookContext';
import CartContextProvider from './context/CartContext';




function App() { 
  return (
    <div className="App">
      <CartContextProvider>
        <AnimatePresence>
        </AnimatePresence>
        <Router>
          <BookContextProvider>
              <PageHeader />
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
    </CartContextProvider>
    </div>
  );
}

export default App;
