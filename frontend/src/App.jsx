import { BrowserRouter,Routes,Route } from "react-router-dom";
import { LoginPage,SignupPage } from './Routes.jsx'

import './App.css';

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/Login" element={<LoginPage/>}/>
      <Route path="/Signup" element={<SignupPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;