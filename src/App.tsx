import "./css/App.css";
import { QueryClientProvider, QueryClient } from "react-query";

import { Router } from "./router/Router";
import { Nav } from "./components/common/Nav";
import { Footer } from "./components/common/Footer";
import { Chat } from "./components/chating/Chat";
import { MyProvider } from "./contexts/MyContext";
import { CookiesProvider } from "react-cookie";
import { SseAlert } from "./components/sseAlert/SseAlertCompo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const App = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <CookiesProvider>
        <MyProvider>
          <QueryClientProvider client={queryClient}>
            <Nav />
            <section id="container">
              <Chat />
              <SseAlert />
              <Router />
            </section>
            <Footer />
          </QueryClientProvider>
        </MyProvider>
      </CookiesProvider>
    </>
  );
};
