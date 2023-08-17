import './css/App.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Router } from './router/Router';

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </>
  );
}

export default App;
