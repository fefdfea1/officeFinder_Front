import './css/App.css';
import Router from './router/Router';
import { QueryClientProvider, QueryClient } from 'react-query';
import Nav from './components/common/Nav';
import { Footer } from './components/common/Footer';
import { AddOffice } from './pages/agent/AddOffice';


function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Nav />
        <section id="container">
          <AddOffice />
          <Router />
        </section>
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default App;
