import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Pages/Login'
import SignUp from './Pages/SignUp';
import AdminDashboard from "./Pages/AdminDashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/AdminDashboard" element={<AdminDashboard/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
