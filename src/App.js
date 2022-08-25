import "./App.css";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";
import Home from "./Components/Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
