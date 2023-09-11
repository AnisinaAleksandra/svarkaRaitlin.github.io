import { Header } from "./widgets/Header";
import { ChakraProvider } from "@chakra-ui/react";
import { MainPage } from "./pages/MainPage/index";
import { ServicesPage } from "./pages/ServicesPage";
import { AboutPage } from "./pages/AboutPage";
import { MapY } from "./widgets/MapY/index";
import { Footer } from "./widgets/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Header />
        <MainPage />
        <ServicesPage />
        <AboutPage />
        <MapY />
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
