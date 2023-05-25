import { useEffect, useState } from "react";
import pflText from "../Assets/pflt.png";
import Table from "../Table.js";
import "./points.css";
import logo1 from "../Assets/akela.PNG";
import logo2 from "../Assets/ceros.PNG";
import logo3 from "../Assets/grizzly.PNG";
import logo4 from "../Assets/hydra.PNG";
import logo5 from "../Assets/raptors.PNG";
import logo6 from "../Assets/stags.PNG";
import logo7 from "../Assets/tusker.PNG";
import logo8 from "../Assets/valiente.PNG";

export default function Points() {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    const storedTeamData = localStorage.getItem("teamData");
    if (storedTeamData) {
      setTeamData(JSON.parse(storedTeamData));
    }
  }, []);

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
      <div style={{ marginTop: "50px" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="main-table">
            <p className="card-header pos">Pos</p>
            <p className="card-header name">Club Name</p>
            <p className="card-header played">MP</p>
            <p className="card-header win">W</p>
            <p className="card-header name">D</p>
            <p className="card-header name">L</p>
            <p className="card-header name">GF</p>
            <p className="card-header name">GA</p>
            <p className="card-header name">+/-</p>
            <p className="card-header name">Points</p>
          </div>
        </div>
        {teamData.map((team, index) => (
          <div
            style={{ display: "flex", justifyContent: "center" }}
            key={index}
          >
            <div className="table">
              <p className="card-header pos">{index + 1}</p>
              <p className="card-header name">
                <img
                  src={getLogoByIndex(index + 1)}
                  style={{
                    width: "44px",
                    marginRight: "10px",
                    backgroundColor: team.color,
                    borderRadius: "50px",
                    padding: "5px",
                  }}
                  alt="Logo"
                />
                {team.clubName}
              </p>
              <p className="card-header played">{team.played}</p>
              <p className="card-header win">{team.win}</p>
              <p className="card-header draw">{team.draw}</p>
              <p className="card-header lost">{team.lose}</p>
              <p className="card-header gf">{team.gf}</p>
              <p className="card-header ga">{team.ga}</p>
              <p className="card-header gd">{team.gf - team.ga}</p>
              <p className="card-header points">{team.points}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function getLogoByIndex(index) {
  switch (index) {
    case 1:
      return logo1;
    case 2:
      return logo2;
    case 3:
      return logo3;
    case 4:
      return logo4;
    case 5:
      return logo5;
    case 6:
      return logo6;
    case 7:
      return logo7;
    case 8:
      return logo8;
  }
}