import React from "react";
import "./style.scss";
import data from "./data.json";
export class ComponentToPrint extends React.PureComponent {
  render() {
    function calcgp(marks) {
		if((marks*100/100)>=87) {return 4.00}
		else if((marks*100/100)>=85.5){ return 3.90;}
		else if((marks*100/100)>=84){return 3.80;}
		else if((marks*100/100)>=82.5){ return 3.70}
		else if((marks*100/100)>=81){ return 3.60}
		else if((marks*100/100)>=79.5){ return 3.50}
		else if((marks*100/100)>=78){ return 3.40}
		else if((marks*100/100)>=76.5){ return 3.30}
		else if((marks*100/100)>=75){ return 3.20}
		else if((marks*100/100)>=73.5){ return 3.10}
		else if((marks*100/100)>=72){ return 3.00}
		else if((marks*100/100)>=70.5){ return 2.87}
		else if((marks*100/100)>=69){ return 2.75}
		else if((marks*100/100)>=67.5){ return 2.62}
		else if((marks*100/100)>=66){ return 2.50}
		else if((marks*100/100)>=64.5){ return 2.37}
		else if((marks*100/100)>=63){ return 2.25}
		else if((marks*100/100)>=61.5){ return 2.12}
		else if((marks*100/100)>=60){ return 2.00} 
		else { return 0.0}
    }
    function grade(marks) {
      if (marks > 86) {
        return "A";
      } else if (marks > 71) {
        return "B";
      } else if (marks > 59) {
        return "C";
      } else {
        return "Fail";
      }
    }
    return (
      <div>
        {/* Term back formula and grading formula */}
        <div style={{ display: "flex" }}>
          <div style={{ border: "1px solid black", marginRight: "100px" }}>
            <p
              style={{
                textAlign: "center",
                backgroundColor: "#c7c7c7",
                border: "1px solid black",
              }}
            >
              Term back formula
            </p>
            <p style={{ padding: "3px" }}>
              A student who is fail in four courses in any semester or did not
              maintain G.P.A. 1.33 in a semester or did not maintain continuity
              in appearing in tde Examinations but avails semester break he/she
              shall be placed on term back from tde rolls of tde department.
            </p>
          </div>
          <div>
            <table>
              <tbody>
                <tr>
                  <td
                    colSpan="3"
                    className="tdata"
                    style={{ textAlign: "center", backgroundColor: "#c7c7c7" }}
                  >
                    Grading Formula
                  </td>
                </tr>
                <tr>
                  <td className="tdata">87-100</td>
                  <td className="tdata">A</td>
                  <td className="tdata">GP 4.00</td>
                </tr>
                <tr>
                  <td className="tdata">72-86</td>
                  <td className="tdata">B</td>
                  <td className="tdata">GP 3.00 to 3.90</td>
                </tr>
                <tr>
                  <td className="tdata">60-71</td>
                  <td className="tdata">C</td>
                  <td className="tdata">GP 2.00 to 2.90</td>
                </tr>
                <tr>
                  <td
                    style={{ textAlign: "center" }}
                    colSpan="3"
                    className="tdata"
                  >
                    Blow 60 --- Fail
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Heading of department and name*/}
        <div>
          <h1
            style={{
              textAlign: "center",
              fontWeight: "bolder",
              fontSize: "30px",
            }}
          >
            {data.ptype} Studies ({data.department}) {data.program} (
            {data.pduration} Years)
          </h1>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Department of {data.department}</p>
            <p>Session {data.session}</p>
          </div>
          {/* Name  */}
          <p>
            {data.gender == 0 ? <span>Mr.</span> : <span>Miss.</span>}{" "}
            {data.studentName}
          </p>
        </div>
        <table>
          <tbody>
            <tr>
              <td>
                {data.semester} semester {data.session} {data.papertype}
              </td>
              <td rowSpan="2">Credit hours</td>
              <td rowSpan="2">Obt</td>
              <td rowSpan="2">Grade</td>
              <td rowSpan="2">GP</td>
              <td rowSpan="2">Remarks</td>
            </tr>
            {data.subjects.map((m) => (
              <tr>
                {" "}
                <td>{m.name}</td> <td>{m.credithr}</td> <td>{m.marks}</td> <td>{grade(m.marks)}</td><td>{calcgp(m.marks)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
