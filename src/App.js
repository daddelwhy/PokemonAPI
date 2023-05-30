import "./App.css";
import Head from "./Components/Head";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import Blogs from "./Components/Blogs";
import Contacts from "./Components/Contacts";
import Notfound from "./Components/Notfound";
import Detail from "./Components/Detail"

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Head />
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/blogs" element={<Blogs />}></Route>
      <Route path="/contacts" element={<Contacts />}></Route>
      <Route path="*" element={<Notfound />}></Route>
      <Route path="/home" element={<Navigate to="/"/>}></Route>
      <Route path="/blogs" element={<Navigate to="/about"/>}></Route>
      <Route path="/blog/:id" element={<Detail/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
