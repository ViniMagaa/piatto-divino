import { useEffect } from 'react';
import { BrowserRouter, useLocation } from "react-router-dom";

import { Header, Main, Footer } from "./shared/components/layout";
import { AppContextProvider } from "./shared/contexts";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
  }, [pathname]);

  return null;
};

export default function App() {
	return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContextProvider>
        <Header />
        <Main />
        <Footer />
      </AppContextProvider>
    </BrowserRouter>
  );
}
