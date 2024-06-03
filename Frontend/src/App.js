import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./context/AuthContext";
import NavbarWrapper from "./NavbarWrapper";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCustomer from "./Pages/Customer/AddCustomer";
import CustomerList from "./Pages/Customer/CustomerList";
import EditCustomers from "./Pages/Customer/editCustomer";
import ViewCustomer from "./Pages/Customer/ViewCustomer";
import AddProduct from "./Pages/Product/AddProduct"
import EditProduct from "./Pages/Product/EditProduct"
import Product from "./Pages/Product/ProductList"
import Login from "./Pages/Employee/login";
import Register from "./Pages/Employee/register";
import RegisteredEmployees from "./Pages/Employee/DisplayEmployees";
import HomePage from "./HomePage";
import Sidebar1 from "./sidebar";
import Review from "./reviews/Review";
import ReviewList from "./reviews/ReviewList";

function App() {

  return (
    <AuthProvider>
      <Router>
         <NavbarWrapper />
        <Routes>
          <Route exact path="/registerEmployee" element={<Register />} />
          <Route exact path="/allEmployees" element={<RegisteredEmployees />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/sidebar" element={<Sidebar1 />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/addCustomer" element={<AddCustomer />} />
          <Route exact path="/allCustomers" element={<CustomerList />} />
          <Route exact path="/editCustomer/:customerId" element={<EditCustomers />} />
          <Route exact path="/viewCustomer/:customerId" element={<ViewCustomer />} />
          <Route exact path="/productList" element={<Product/>}/>
          <Route exact path="/addProduct" element={<AddProduct/>}/>
          <Route exact path="/editProduct/:id" element={<EditProduct/>}/> 
          <Route exact path="/review" element={<Review/>}/>
          <Route exact path="/reviewList" element={<ReviewList/>}/>
        </Routes>
      </Router>
      </AuthProvider>
  );
}

export default App;
