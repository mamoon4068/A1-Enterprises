import { Navigate, Route, Routes } from "react-router-dom"
import UpperAnima from './components/TopAnnounceMent'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import WashingMachineRepair from './pages/WashingMachineR'
import MicrowaveRepair from "./pages/MicrowaveRepair"
import DishwasherRepair from "./pages/DishwasherRepair"
import DryerRepair from "./pages/DryerRepair"
import RORepair from "./pages/RoRepaire"
import ChimneyRepair from "./pages/ChimniRepaire"
import ServiceArea from "./pages/ServicesArea"
import ContactUs from "./pages/ContactUs"


const App = () => {
  return (
    <div>
      <UpperAnima />
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services/washing-machine-repair" element={<WashingMachineRepair />} />
        <Route path="/services/microwave-repair" element={<MicrowaveRepair />} />
        <Route path="/services/dishwasher-repair" element={<DishwasherRepair />} />
        <Route path="/services/dryer-repair" element={<DryerRepair />} />
        <Route path="/services/ro-repair" element={<RORepair />} />
        <Route path="/services/chimney-repair" element={<ChimneyRepair />} />
        <Route path="/services/microwaveRepair" element={<Navigate to="/services/microwave-repair" replace />} />
        <Route path="/servicesarea" element={<ServiceArea />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
     <Footer/>
    </div>
  )
}

export default App
