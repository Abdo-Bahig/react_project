import {React} from 'react';
import Header from "./components/Header";
import Landing from "./components/Landing";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Works from "./components/Works"
import Contact from "./components/Contact"
function App() {
  return (
    <div className="App">
      <div id='box'>
        <BrowserRouter>
          <Header/>
          <Landing/>
          <Skills/>
          <Projects/>
          <Routes>
              <Route path="*" element={<Works/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/desc" element={<><p className='desc'>Contact With Me</p> <Contact/></>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;
