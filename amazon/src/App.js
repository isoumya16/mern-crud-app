import './App.css';
import Homepage from './pages/homepage';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Registrationpage from './pages/registrationpage';
import Contactpage from './pages/contactpage';
import Userlistpage from './pages/userlistpage';
import Editpage from './pages/editpage';
import Loginpage from './pages/loginpage';
import Profilepage from './pages/profilepage';
import Reactreduxpage from './pages/reactreduxpage';
import Contextapipage from './pages/contextapipage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/registration' element={<Registrationpage/>}/>
      <Route path='/login' element={<Loginpage/>}/>
      <Route path='/contact' element={<Contactpage/>}/>
      <Route path='/userlist' element={<Userlistpage/>}/>
      <Route path='/edit/:id' element={<Editpage/>}/>
      <Route path='/profile' element={<Profilepage/>}/>
      <Route path='/redux' element={<Reactreduxpage/>}/>
      <Route path='/contextapi' element={<Contextapipage/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
