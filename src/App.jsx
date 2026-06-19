import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import GlobalInvestments from "./GlobalInvestments/GlobalInvestments";
import About from "./About/About";
import Services from "./Services/Services";
import Hero from "./Hero/Hero";
import Footer from "./Footer/Footer";
import ContactPage from "./ContactPage/ContactPage";
import LoginPage from "./LoginPage/LoginPage";

function Home() {
  return ( 
    <>
      <GlobalInvestments />
      <About />
      <Hero />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        
        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
