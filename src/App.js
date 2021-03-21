import './App.scss';
import PageHeader from './Components/PageHeader';
import HomePage from './Pages/Homepage';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import BookDetail from './Pages/DetailPage';
import { QueryClient, QueryClientProvider} from "react-query";
import BookContextProvider from './context/BookContext';
import CartContextProvider from './context/CartContext';

const queryClient = new QueryClient();


function App() { 
  return (
    <div className="App">
      <CartContextProvider>
        <Router>
          <BookContextProvider>
            <QueryClientProvider client={queryClient}>
              <PageHeader />
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/books/:bookId">
                  <BookDetail />
                </Route>
              </Switch>
            </QueryClientProvider>
          </BookContextProvider>
        </Router>
    </CartContextProvider>
    </div>
  );
}

export default App;
