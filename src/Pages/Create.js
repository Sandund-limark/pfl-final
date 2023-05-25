import { useState } from "react";
import "../App.css";
import pflText from "../Assets/text.png";

export default function Create() {
  const [clubName, setClubName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`${clubName}! Welcome to PFL 2023. GoodLuck!`);
  };

  const isDisabled = clubName.trim() === "";
  return (
    <div>
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
          Create Team
        </h1>
      </div>
      <div className="createTeamBox">
        <div className="box">
          <form onSubmit={handleSubmit}>
            <div className="createTeam">
              <input
                type="text"
                value={clubName}
                onChange={(e) => setClubName(e.target.value)}
                required="required"
              />
              <span>Club Name</span>
              <i></i>
            </div>
            <div className="createTeam">
              <input type="text" required="required" />
              <span>Color</span>
              <i></i>
            </div>
            <div className="createTeam">
              <input type="text" required="required" />
              <span>Home Ground</span>
              <i></i>
            </div>
            <input type="submit" value="Create Team" disabled={isDisabled} />
          </form>
        </div>
      </div>
    </div>
  );
}
