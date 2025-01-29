import { BrowserRouter , Routes , Route} from "react-router-dom";
import { LoginPage,SignupPage} from "./Routes.jsx";
import './App.css' ;
import Home from "./page/Home.jsx";
function App (){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/" element={<Home />} />
      
    </Routes>
    </BrowserRouter>
  );
}
export default App;