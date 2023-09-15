import { Route, Routes } from "react-router-dom";
import Main from "./page/Main/Main";
import Header from "./components/Header/Header";
import About from "./page/About/About";
import Service from "./page/Service/Service";
import Parnter from "./page/Partner/Parnter";
import Contact from "./page/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/partner" element={<Parnter />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
