import AdcancedFeatured from "./assets/components/AdvancedFeatured/AdvancedFeatured"
import Banner from "./assets/components/Banner/Banner"
import Logo from "./assets/components/Logo/Logo"
import Monitoring from "./assets/components/Monitoring/Monitoring"
import NavBar from "./assets/components/NavBar/NavBar"
import Social from '../src/assets/components/Conect-Socially/Social'
import Testimonials from "./assets/components/testimonials/Testimonials"
import MobileShow from "./assets/components/mobile show/MobileShow"
import Pricing from "./assets/components/Pricing/Pricing"

function App() {

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
      <Pricing/>
    </>
  )
}

export default App
