import './App.scss';
import PageHeader from './Components/PageHeader';
import HomePage from './Pages/Homepage';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import BookDetail from './Pages/DetailPage';
import BookContextProvider from './context/BookContext';
import CartContextProvider from './context/CartContext';

const queryClient = new QueryClient();


function App() { 
  return (
    <div className="App">
      <CartContextProvider>
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
