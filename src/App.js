import { BrowserRouter as Router , Route,Routes } from "react-router-dom"
import "./App.css"
import { Header,Experiences,Formations,Hero ,Galerie, Card, Footer, Certifications} from "./components/index"
const App = () => {
  return (
  <>
  <Router>
    <Hero/>
    <Header/>
         <Routes>
            <Route path="/" element={<Card/>} />
            <Route path="/formations" element={<Formations/>} />
            <Route path="/formations" element={<Formations/>} />
            <Route path="/experiences" element={<Experiences/>} />
            <Route path="/certifications" element={<Certifications/>} />
            <Route path="/galerie" element={<Galerie/>} />
         </Routes>
    <Footer/>
  </Router>

  </>
  )
}
export default App