import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [ID_Siswa,setID_Siswa] = useState("");
  const [name, setName] = useState("");
  const [NIS, setNIS] = useState("");
  const [NIK, setNIK] = useState("");
  const [No_KartuKeluarga, setNo_KartuKeluarga] = useState("");
  const [Tempat_TanggalLahir, setTempat_TanggalLahir] = useState("");
  const [Alamat, setAlamat] = useState("");
  const [Tahun_MasukSDIT, setTahun_MasukSDIT] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        ID_Siswa,
        name,
        NIS,
        NIK,
        No_KartuKeluarga,
        Tempat_TanggalLahir,
        Alamat,
        Tahun_MasukSDIT
      });
      navigate("/siswa");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">ID Siswa</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={ID_Siswa}
                onChange={(e) => setID_Siswa(e.target.value)}
                placeholder="ID Siswa"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">NIS</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={NIS}
                onChange={(e) => setNIS(e.target.value)}
                placeholder="NIS"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">NIK</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={NIK}
                onChange={(e) => setNIK(e.target.value)}
                placeholder="NIK"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">No. Kartu Keluarga</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={No_KartuKeluarga}
                onChange={(e) => setNo_KartuKeluarga(e.target.value)}
                placeholder="No_KartuKeluarga"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Tempat/Tanggal Lahir</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={Tempat_TanggalLahir}
                onChange={(e) => setTempat_TanggalLahir(e.target.value)}
                placeholder="Tempat/Tanggal Lahir"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Alamat</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={Alamat}
                onChange={(e) => setAlamat(e.target.value)}
                placeholder="Alamat"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Tahun Masuk SDIT</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={Tahun_MasukSDIT}
                onChange={(e) => setTahun_MasukSDIT(e.target.value)}
                placeholder="Tahun Masuk SDIT"
              />
            </div>
          </div>
          {/* <div className="field">
            <label className="label">Gender</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div> */}
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
