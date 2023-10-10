import {BrowserRouter, Routes, Route} from "react-router-dom";
import Landing from "./Landing";

import UserList from "./Siswa/UserList";
import AddUser from "./Siswa/AddUser";
import EditUser from "./Siswa/EditUser";

import UserGuru from "./Guru/UserList";
import AddGuru from "./Guru/AddUser";
import EditGUru from "./Guru/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Dashboard */}
        <Route path="/" element={<Landing/>}/>

        {/* Siswa */}
        <Route path="/siswa" element={<UserList/>}/>
        <Route path="/siswa/add" element={<AddUser/>}/>
        <Route path="/siswa/edit/:id" element={<EditUser/>}/>

        {/* Guru */}
        <Route path="/Guru" element={<UserGuru/>}/>
        <Route path="/Guru/add" element={<AddGuru/>}/>
        <Route path="/Guru/edit/:id" element={<EditGUru/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
