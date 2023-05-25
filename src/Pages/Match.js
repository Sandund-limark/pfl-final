import { useState, useEffect } from "react";
import pflText from "../Assets/text.png";

export default function Match() {
  const [homeClub, setHomeClub] = useState("");
  const [homeClubGoals, setHomeClubGoals] = useState(null);
  const [awayClub, setAwayClub] = useState("");
  const [awayClubGoals, setAwayClubGoals] = useState(null);
  const [teams, setTeams] = useState(() => {
    const storedTeamData = localStorage.getItem("teamData");
    return storedTeamData ? JSON.parse(storedTeamData) : [];
  });

  useEffect(() => {
    localStorage.setItem("teamData", JSON.stringify(teams));
  }, [teams]);

  useEffect(() => {
    const storedTeamData = localStorage.getItem("teamData");
    if (storedTeamData) {
      setTeams(JSON.parse(storedTeamData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("teamData", JSON.stringify(teams));
  }, [teams]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newMatch = {
      homeClub,
      homeClubGoals: Number(homeClubGoals),
      awayClub,
      awayClubGoals: Number(awayClubGoals),
    };

    const updatedTeams = teams.map((team) => {
      if (team.name === homeClub) {
        return {
          ...team,
          gf: team.gf + newMatch.homeClubGoals,
          ga: team.ga + newMatch.awayClubGoals,
        };
      } else if (team.name === awayClub) {
        return {
          ...team,
          gf: team.gf + newMatch.awayClubGoals,
          ga: team.ga + newMatch.homeClubGoals,
        };
      }
      return team;
    });

    setTeams(updatedTeams);

    setHomeClub("");
    setHomeClubGoals(null);
    setAwayClub("");
    setAwayClubGoals(null);

    alert(
      `${homeClub} scored ${homeClubGoals} goals and ${awayClub} scored ${awayClubGoals} goals`
    );
  };

  const handleHomeOption = (event) => {
    setHomeClub(event.target.value);
  };

  const handleAwayOption = (event) => {
    setAwayClub(event.target.value);
  };

  const isDisabled =
    homeClubGoals === null ||
    awayClubGoals === null ||
    homeClub === "" ||
    homeClub === awayClub;

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
          Add Match
        </h1>
      </div>
      <div className="addMatchBox">
        <div className="matchBox">
          <form onSubmit={handleSubmit}>
            <div className="addMatch">
              <select
                style={{ marginLeft: "-15px" }}
                value={homeClub}
                onChange={handleHomeOption}
              >
                <option value="">Choose Home Club</option>
                {teams.map((team) => (
                  <option key={team.name} value={team.name}>
                    {team.name}
                  </option>
                ))}
              </select>
              <i></i>
            </div>
            <div className="addMatch">
              <input
                type="number"
                required="required"
                value={homeClubGoals}
                onChange={(e) => setHomeClubGoals(e.target.value)}
              />
              <span>Goals</span>
              <i></i>
            </div>
            <h1>VS</h1>
            <div className="addMatch" style={{ marginTop: "-10px" }}>
              <select
                style={{ marginLeft: "-15px" }}
                value={awayClub}
                onChange={handleAwayOption}
              >
                <option value="">Choose Away Club</option>
                {teams.map((team) => (
                  <option key={team.name} value={team.name}>
                    {team.name}
                  </option>
                ))}
              </select>
              <i></i>
            </div>
            <div className="addMatch">
              <input
                type="number"
                required="required"
                value={awayClubGoals}
                onChange={(e) => setAwayClubGoals(e.target.value)}
              />
              <span>Goals</span>
              <i></i>
            </div>
            <input type="submit" value="Add Match" disabled={isDisabled} />
          </form>
        </div>
      </div>
    </div>
  );
}
