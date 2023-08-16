import './css/App.css';
import Router from './router/Router';
import { QueryClientProvider, QueryClient } from 'react-query';
import Nav from './components/common/Nav';
import { Footer } from './components/common/Footer';

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Nav />
        <section id="container">
          <Router />
        </section>
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default App;
