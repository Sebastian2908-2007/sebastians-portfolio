import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import { useState } from 'react';

function App() {
const [currentPage,setCurrentPage] = useState('about');
  return (
 <div>
   <Nav
   currentPage={currentPage}
   setCurrentPage={setCurrentPage}
   ></Nav>
   {currentPage === 'about' &&  <About></About>}
   {currentPage === 'contact' &&<Contact></Contact>}  
   {currentPage === 'portfolio' && <Portfolio></Portfolio>}
   {currentPage === 'resume' &&   <Resume></Resume>}
 <Footer></Footer>
   </div>
  );
}

export default App;
