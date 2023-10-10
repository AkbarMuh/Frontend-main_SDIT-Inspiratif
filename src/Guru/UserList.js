import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GuruList = () => {
  const [guru, setGuru] = useState([]);

  useEffect(() => {
    getGuru();
  }, []);

  const getGuru = async () => {
    const response = await axios.get("http://localhost:5000/Gurus");
    setGuru(response.data);
  };

  const deleteGuru = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/Gurus/${id}`);
      getGuru();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <h1><center>Data Guru</center></h1>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>NIK</th>
              <th>Tempat/Tanggal lahir</th>
              <th>Alamat</th>
              <th>Lulusan(S1/S2/S3)</th>
              <th>Jurusan</th>
              <th>Nama Perguruan Tinggi</th>
            </tr>
          </thead>
          <tbody>
            {guru.map((guru, index) => (
              <tr key={guru.id}>
                <td>{index + 1}</td>
                <td>{guru.Nama}</td>
                <td>{guru.NIK}</td>
                <td>{guru.Tempat_Tanggal_lahir}</td>
                <td>{guru.Alamat}</td>
                <td>{guru.Lulusan}</td>
                <td>{guru.Jurusan}</td>
                <td>{guru.Nama_Perguruan_Tinggi}</td>
                <td>
                  <Link
                    to={`edit/${guru.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteGuru(guru.id)}
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

export default GuruList;
