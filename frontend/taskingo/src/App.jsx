import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Home/home";
import Signup from "./SignUp/signup";
import Login from "./Login/login";
import About from "./About/about";
import Contact from "./Contact/contact";
import Error from "./Error/error";

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<Error/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
