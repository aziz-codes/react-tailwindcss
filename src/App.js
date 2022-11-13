import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Equipment, Employees, Client, Statistics } from "./pages/index";
import SignIn from "./components/SignIn";
import { UserAuth } from "./context/AuthContext";
const App = () => {
  const { user } = UserAuth();
  return (
    <>
      {user ? (
        <BrowserRouter>
          <Navbar />
          <div className="ml-2">
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
        <SignIn />
      )}
    </>
  );
};

export default App;
