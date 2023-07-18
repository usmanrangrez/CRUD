import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import User from "./user/User";
import AddUser from "./user/AddUser";
import Edit from "./user/Edit";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users/:id" element={<User />} />
        <Route path="add-user" element={<AddUser />} />
        <Route path="edit-user/:id" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
