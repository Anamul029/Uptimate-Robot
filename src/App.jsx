import AdcancedFeatured from "./assets/components/AdvancedFeatured/AdvancedFeatured"
import Banner from "./assets/components/Banner/Banner"
import Logo from "./assets/components/Logo/Logo"
import Monitoring from "./assets/components/Monitoring/Monitoring"
import NavBar from "./assets/components/NavBar/NavBar"
import Social from '../src/assets/components/Conect-Socially/Social'
import Testimonials from "./assets/components/testimonials/Testimonials"
import MobileShow from "./assets/components/mobile show/MobileShow"
import Pricing from "./assets/components/Pricing/Pricing"
import FreeAccount from "./assets/components/FreeAccount/FreeAccount"
import Footer from "./assets/components/Footer/Footer"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,  // Adjust as needed
      once: true,      // Animation runs only once
      offset: 100,     // Start animation 100px before reaching element
    });
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Logo></Logo>
      <Monitoring></Monitoring>
      <AdcancedFeatured></AdcancedFeatured>
      <Social />
      <MobileShow />
      <Testimonials />
      <Pricing />
      <FreeAccount />
      <Footer />
    </>
  )
}

export default App
