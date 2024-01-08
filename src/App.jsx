import Header from "./components/Header/Header";
import About from "./components/About/About";
import AboutUs from "./components/About/AboutUs";
import Services from "./components/Services/Services";
import Patients from "./components/Patients/Patients";
import Prices from "./components/Prices/Prices";
import Tools from "./components/Tools/Tools";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/StyleForAllPage/GlobalStyle";


function App() {
  const theme = {
    colors: {
      lightGreen: "#91b4a5",
      lightGreen2: "#edf5f2",
      darkGreen: "#0b8c54",
      darkGreen2: "#83a898",
      textColor: "#3d795f",
      lightPink: "#eee4de",
      white: "#ffff",
      black: "#000000",
    },
  };

  return (
    <ThemeProvider theme={theme} class="scroll">
      <GlobalStyle />
      <Header />
      <About />
      <AboutUs />
      <Services />
      <Patients />
      <Prices />
      <Tools />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}


export default App;
