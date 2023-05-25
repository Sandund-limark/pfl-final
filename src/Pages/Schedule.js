import pflText from "../Assets/text.png";
import "./schedule.css";
import logo9 from "../Assets/football.png";
import logo10 from "../Assets/timer.png";
import logo11 from "../Assets/court.png";
import matchSchedule from "./matchSchedule.json";

export default function Create() {
  return (
    <div style={{ marginBottom: "20px" }}>
      <img
        src={pflText}
        alt="Logo"
        style={{
          display: "block",
          margin: "auto",
          width: "300px",
          marginTop: "90px",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            marginTop: "40px",
            backgroundColor: "#138ce8",
            width: "300px",
            textAlign: "center",
            height: "70px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Group Matches
        </h1>
      </div>
      {matchSchedule.map((x) => {
        return (
          <>
            <div
              style={{
                backgroundColor: "#0d446f",
                maxWidth: "1400px",
                margin: "0 auto",
                borderRadius: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "30px",
                  backgroundColor: "#0d446f",
                  padding: "20px",
                  borderRadius: "20px",
                }}
              >
                <div className="home-club">
                  <img
                    src={x.homeLogo}
                    style={{
                      width: "80px",
                      backgroundColor: x.hColor,
                      borderRadius: "20px",
                      padding: "5px",
                    }}
                    alt="Logo"
                  />
                  <p>{x.homeClub}</p>
                  <img
                    src={logo9}
                    style={{
                      width: "70px",
                      marginLeft: "140px",
                      marginBottom: "2px",
                    }}
                    alt="Logo"
                  />
                </div>
                <h1 style={{ color: "white" }}>Vs</h1>
                <div
                  className="away-club"
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <img
                    src={logo9}
                    style={{
                      width: "70px",
                      marginRight: "137px",
                      marginBottom: "2px",
                    }}
                    alt="Logo"
                  />
                  <p>{x.awayClub}</p>
                  <img
                    src={x.awayLogo}
                    style={{
                      width: "80px",
                      backgroundColor: x.aColor,
                      borderRadius: "20px",
                      padding: "5px",
                    }}
                    alt="Logo"
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src={logo10}
                  style={{
                    width: "40px",
                    height: "40px",
                    marginRight: "10px",
                  }}
                  alt="Logo"
                />
                <p
                  style={{
                    color: "white",
                    marginTop: "6px",
                    marginRight: "100px",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {x.time}
                </p>
                <img
                  src={logo11}
                  style={{
                    width: "50px",
                    height: "50px",
                    marginTop: "-2px",
                  }}
                  alt="Logo"
                />
                <p
                  style={{
                    color: "white",
                    marginTop: "6px",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {x.court}
                </p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

// import pflText from "../Assets/text.png";
// import React, { useState } from "react";
// export default function Create() {
//   const [formData, setFormData] = useState({ name: "", email: "" });
//   const [tableData, setTableData] = useState([]);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setTableData((prevTableData) => [...prevTableData, formData]);
//     setFormData({ name: "", email: "" });
//   };
//   return (
//     <div>
//       <img
//         src={pflText}
//         alt="Logo"
//         style={{
//           display: "block",
//           margin: "auto",
//           width: "300px",
//           marginTop: "20px",
//         }}
//       />
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//           />
//         </label>
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tableData.map((rowData, index) => (
//             <tr key={index}>
//               <td>{rowData.name}</td>
//               <td>{rowData.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
