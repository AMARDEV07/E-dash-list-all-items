import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SignUpPage from "./components/SignUpPage";
import PrivateComp from "./components/PrivateComp";
import LoginPage from "./components/LoginPage";
import AddProduct from "./components/AddProduct";
import ProductsList from "./components/ProductsList";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Nav /> {/* Navigation visible on all pages */}
      <Routes>
        {/* Protected Routes */}
        <Route element={<PrivateComp />}>
          <Route path="/" element={<ProductsList/>} />
          <Route path="/add" element={<AddProduct/>} />
          <Route path="/update" element={<h1>update product Page</h1>} />
          <Route path="/profile" element={<h1>visit profile</h1>} />
          <Route path="/logout" element={<h1>page logout</h1>} />
        </Route>

        {/* Public Route */} 
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage/>} />

      </Routes>
      
      <Footer />
     
    
    </BrowserRouter>
  );
}

export default App;
