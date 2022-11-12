import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Equipment, Employees, Client, Statistics } from "./pages/index";
const App = () => {
  const isLoggedIn = true;
  return (
    <>
      {isLoggedIn ? (
        <BrowserRouter>
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/equipment" element={<Equipment />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/client" element={<Client />} />
              <Route path="/statistics" element={<Statistics />} />
            </Routes>
          </div>
        </BrowserRouter>
      ) : (
        "please login to continue"
      )}
    </>
  );
};

export default App;
