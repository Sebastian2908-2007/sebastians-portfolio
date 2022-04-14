import Nav from "./components/Nav";
import { useState } from 'react';

function App() {
const [currentPage,setCurrentPage] = useState('about');
  return (
 <div>
   <Nav
   currentPage={currentPage}
   setCurrentPage={setCurrentPage}
   ></Nav>
   </div>
  );
}

export default App;
