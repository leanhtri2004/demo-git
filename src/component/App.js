
import { Route, Routes } from 'react-router-dom';
import '../App.css';
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';
import { Navbar } from './Navbar';
import { About } from './About';
import { Login } from '../login/Login';



function App() {

  return (
    
    
     <div>
      
      <Navbar/>
       <Header/> 
     <Routes>
      <Route path= "/login" element={<About/>}/>
     </Routes> 
     <Main/>
     <Footer/>
     
     </div>
  );
}

export default App;
