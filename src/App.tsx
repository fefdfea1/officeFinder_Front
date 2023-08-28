import './css/App.css';
import { QueryClientProvider, QueryClient } from 'react-query';

import { Router } from './router/Router';
import { Nav } from './components/common/Nav';
import { Footer } from './components/common/Footer';
import { Chat } from './components/chating/Chat';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Nav />
        <Chat />
        <section id="container">
          <Router />
        </section>
        <Footer />
      </QueryClientProvider>
    </>
  );
};

export default App;
