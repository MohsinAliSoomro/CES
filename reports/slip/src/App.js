import React from "react";
import "./App.css";
import Logo from "./logo.png";

function App() {
  return (
    <div className="slip-container">
      <img src={Logo} className="slip-logo" />
      <span>
        <p className="unitext">The Shaikh Ayaz Univeristy Shikarpur,Sindh</p>
      </span>
      <h3 className="examwing"> (Examination Wing)</h3>
      <h3
        className="examwing"
        style={{
          top: "82px",
          left: "290px",
          color: "red",
          textDecoration: "underline",
        }}
      >
        {" "}
        Admit Card
      </h3>
      <div className="details">
        <p>Status : Fresh</p>
        <p>Roll No : 17-BSIT-010</p>
        <p>Full Name : Muhammad Aasim</p>
        <p>Department : Computer Science</p>
        <p>Session : 2021</p>
        <p>Semester : 8th</p>
      </div>
      <div className="subjects-table">
        <table>
          <thead>
            <th>Subject</th>
            <th  className="crhr">Credit Hours</th>
          </thead>
          <tr>
            <td>1. Programming Fundamentals</td>
            <td className="crhr">4</td>
          </tr>
          <tr>
            <td>2. Introduction to Computing</td>
            <td  className="crhr">4</td>
          </tr>
          <tr>
            <td>3. Elementary Maths</td>
            <td  className="crhr">3</td>
          </tr>
          <tr>
            <td>4. English Compoistion</td>
            <td  className="crhr">4</td>
          </tr>
          <tr>
            <td>5. Islamiat</td>
            <td  className="crhr">3</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default App;
