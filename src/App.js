import './App.css';
import NavBar from './containers/navbar';
import Organization from './containers/organization';
import Services from './containers/services';
import Politics from './containers/politics';
import Works from './containers/works';
import Machinery from './containers/machinery';
import Contact from './containers/contact';
import ViewMoreWorks from './containers/viewMoreWorks'
import { ToastContainer } from "react-toastify";
import { Routes, Route, } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Organization/>
      <Services/>
      <Politics/>
      <Routes>
        <Route path="/works" element={<ViewMoreWorks/>}/> 
        <Route path="/" element={<Works/>}/> 
      </Routes>
      <Machinery/>
      <Contact/>
      <ToastContainer/>
    </div>
  );
}

export default App;
