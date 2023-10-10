import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <h1><center>Data Siswa</center></h1>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>ID_Siswa</th>
              <th>Name</th>
              <th>NIS</th>
              <th>NIK</th>
              <th>No Kartu Keluarga</th>
              <th>Tempat/Tanggal Lahir</th>
              <th>Alamat</th>
              <th>Tahun Masuk SDIT</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.ID_Siswa}</td>
                <td>{user.name}</td>
                <td>{user.NIS}</td>
                <td>{user.NIK}</td>
                <td>{user.No_KartuKeluarga}</td>
                <td>{user.Tempat_TanggalLahir}</td>
                <td>{user.Alamat}</td>
                <td>{user.Tahun_MasukSDIT}</td>
                <td>
                  <Link
                    to={`edit/${user.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <center>
        <Link to={`add`} className="button is-success">
          Add New
        </Link><br/><br/>
        <Link to={"../"} className="button">
          Back
        </Link>
        </center>
      </div>
    </div>
    
  );
};

export default UserList;
