import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { store } from './store';
import HomePage from './pages/Home';
import { GloblaCss } from './styles';
import CartItems from './components/Cart';

const queryClient = new QueryClient(); 

function App() {
  return (
    <Provider store={store}>
      <Router>
        <QueryClientProvider client={queryClient}> 
          <GloblaCss />
          <div className="container">
            <HomePage />
            <CartItems />
          </div>
        </QueryClientProvider>
      </Router>
    </Provider>
  );
}

export default App;
