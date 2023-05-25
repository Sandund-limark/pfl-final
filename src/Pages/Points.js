import { useEffect, useState } from "react";
import pflText from "../Assets/pflt.png";
import Spinner from "react-bootstrap/Spinner";
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
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const storedTeamData = localStorage.getItem("teamData");
    if (storedTeamData) {
      const parsedTeamData = JSON.parse(storedTeamData);
      const sortedTeamData = parsedTeamData.sort((a, b) => {
        if (b.points !== a.points) {
          return b.points - a.points; // Sort by points
        } else {
          return b.gf - b.ga - (a.gf - a.ga); // Sort by goal difference (GD)
        }
      });

      // Simulate loading for 3 seconds
      setTimeout(() => {
        setTeamData(sortedTeamData);
        setLoading(false);
      }, 3000);
    }
  }, []);

  return (
    <div>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <Spinner animation="grow" variant="success" />
        </div>
      ) : (
        <>
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
                  <p className="card-header played">{team.mp}</p>
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
        </>
      )}
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
    default:
      return null;
  }
}
