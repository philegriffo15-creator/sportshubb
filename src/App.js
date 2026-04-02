import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Mpesapayment from './components/Mpesapayment';
import Getproduct from './components/Getproduct';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Addproduct from './components/Addproduct';
import {Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Carousel from './components/Carousel';
function App() {
  return (
   
<Router>
    <div className="App">
     <div className='App-header'>
     <div className="text-center my-4">
  <h1 className="main-heading">
    Welcome to <span>SportsHub</span>
  </h1>
  <p className="sub-heading">Your one-stop shop for the best sports gear ⚡</p>
  </div>
 <Carousel/>
 <nav className="navbar navbar-expand-md navbar-light bg-light px-4">

  {/* Brand (optional but makes it look 🔥) */}
  <span className="navbar-brand fw-bold">MyStore</span>

  {/* Links */}
  <div className="ms-auto d-flex gap-2">

    <Link to="/signup" className="nav-btn">Signup</Link>
    <Link to="/signin" className="nav-btn">Signin</Link>
    <Link to="/addproduct" className="nav-btn">Add Product</Link>
    <Link to="/getproduct" className="nav-btn">GetProducts</Link>
  </div>

</nav>

     </div>
     <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/addproduct' element={<Addproduct/>}/>
      <Route path='/getproduct' element={<Getproduct/>}/>
      <Route path='/makepayment' element={<Mpesapayment/>}/>
     </Routes>
    </div>
    </Router>

  );
}

export default App;
