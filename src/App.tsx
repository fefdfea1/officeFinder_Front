import './css/App.css';
import Router from './router/Router';
import { QueryClientProvider, QueryClient } from 'react-query';
import Nav from './components/common/Nav';
import { Footer } from './components/common/Footer';
import { SalesAnalysis } from './pages/agent/SalesAnalysis';


function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Nav />
        <section id="container">
          <SalesAnalysis />
          <Router />
        </section>
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default App;
