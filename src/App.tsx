import './css/App.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import Router from './router/Router';
import Nav from './components/common/Nav';
import { Footer } from './components/common/Footer';
import { Join } from './pages/Join';
import { Login } from './pages/Login';
import { Main } from './pages/Main';
import { useState } from 'react';


const App = () => {
  const queryClient = new QueryClient();

  return (
    <>
     <QueryClientProvider client={queryClient}>

        <Nav />
        <section id="container">
          <Join />
        </section>
        <Footer />
     </QueryClientProvider>

    </>
  );
}

export default App;
