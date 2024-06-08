import Navbar from "./components/Navbar/Navbar";
import Acceuil from "./pages/Acceuil";
import { Routes,Route} from 'react-router-dom'
import './App.css';
import Apropos from "./pages/Apropos";
import Services from "./pages/Services";
import Nospartenaire from "./pages/Nospartenaire";
import Footer from "./components/Footer/Footer";
import Contact_nous from "./pages/Contact_nous";
import Vente_Integration from "./components/Vente&Integration/Vente&Integration";
import Location from "./components/Location/Location";
function App() {
  return (
    <div className="App flex flex-col min-h-screen selection:bg-purple-400/50">
       <div className="flex-grow">
        
        <Navbar/>
        <Routes>
          <Route path={'/'} element={<Acceuil/>}/>
          <Route path={'/services/'} element={<Services/>}/>
          <Route path={'/a-propos/'} element={<Apropos/>}/>
          <Route path={'/nos-partenaire/'} element={<Nospartenaire/>}/>
          <Route path={'/contact-nous/'} element={<Contact_nous/>}/>
          <Route path={'/services/vente-integration'} element={<Vente_Integration/>}/>
          <Route path={'/services/Location'} element={<Location/>}/>
        </Routes>
      </div> 

      <Footer className="flex-none"/>
      
    </div>

        
      
      );
}

export default App;
