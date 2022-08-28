import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import SignUp from "./Components/Pages/Login/SignUp";
import RequireAuth from "./Components/Shared/RequireAuth";
import Inventories from "./Components/Pages/Inventories/Inventories";
import NotFound from "./Components/Shared/NotFound";
import ItemsDetails from "./Components/Pages/Inventories/ItemsDetails";
import ManageInventories from "./Components/Pages/ManageInventories/ManageInventories";
import AddNewProduct from "./Components/Pages/AddNewItems/AddNewProduct";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventories" element={<Inventories />} />

        <Route
          path="/inventories/:id"
          element={
            <RequireAuth>
              <ItemsDetails />
            </RequireAuth>
          }
        />

        <Route
          path="/ManageInventories"
          element={
            <RequireAuth>
              <ManageInventories />
            </RequireAuth>
          }
        />

        <Route
          path="/addNewItems"
          element={
            <RequireAuth>
              <AddNewProduct />
            </RequireAuth>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
