import { Route, Routes } from "react-router-dom";
import './App.css';
import About from "./Componetns/About/About";
import Blog from "./Componetns/blog/Blog";
import CheckOut from "./Componetns/CheckOut/CheckOut";
import Home from "./Componetns/Home/Home";
import Login from "./Componetns/Login/Login";
import Navbar from "./Componetns/NavBar/Navbar";
import NotFound from "./Componetns/NotFound/NotFound";
import Signup from "./Componetns/Registration/Signup";
import RequireAuth from "./Componetns/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/Signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
