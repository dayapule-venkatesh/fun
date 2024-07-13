import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App(){
 return<div>
  <div> <Home/>
  </div><div>
 <BrowserRouter>
           <Routes>
             
             
             
             <Route path="/Login" element={<Login />}></Route>
             <Route path="/Signup" element={<Signup />}></Route>
           </Routes>
         </BrowserRouter>
       </div>
       </div>
 
}
export default App;