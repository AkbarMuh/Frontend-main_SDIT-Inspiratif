import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Landing = () =>{
  return <>
  <center>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  <h1>Landing Page</h1>
  <h2>
    <a href="./siswa">Siswa</a>
    <br />
    <a href="./guru">Guru</a>
  </h2>
  <a href="http://localhost:3000/">Back</a>
  </center>
  
  
  </>
}

export default Landing;
