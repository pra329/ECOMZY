import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import "./App.css"
const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
       <div className="bg-slate-900">
        <Navbar/>
       </div>
       <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
       </Routes>
    </div>
  );
};

export default App;
