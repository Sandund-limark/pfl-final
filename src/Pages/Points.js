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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="table" >
            <p className="card-header pos">1</p>
            <p className="card-header name">
              <img
                src={logo1}
                style={{
                  width: "44px",
                  marginRight: "10px",
                  backgroundColor: "#6b2e7d",
                  borderRadius: "50px",
                  padding: "5px",
                }}
                alt="Logo"
              />
              Akela
            </p>
            <p className="card-header played">6</p>
            <p className="card-header win">4</p>
            <p className="card-header draw">8</p>
            <p className="card-header lost">3</p>
            <p className="card-header gf">30</p>
            <p className="card-header ga">23</p>
            <p className="card-header gd">29</p>
            <p className="card-header points">80</p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="table">
            <p className="card-header pos">2</p>
            <p className="card-header name">
              <img
                src={logo2}
                style={{
                  width: "44px",
                  marginRight: "10px",
                  backgroundColor: "#34ed5c",
                  borderRadius: "50px",
                  padding: "5px",
                }}
                alt="Logo"
              />
              Ceros
            </p>
            <p className="card-header played">0</p>
            <p className="card-header win">0</p>
            <p className="card-header draw">0</p>
            <p className="card-header lost">0</p>
            <p className="card-header gf">0</p>
            <p className="card-header ga">0</p>
            <p className="card-header gd">0</p>
            <p className="card-header points">0</p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="table">
            <p className="card-header pos">3</p>
            <p className="card-header name">
              <img
                src={logo3}
                style={{
                  width: "44px",
                  marginRight: "10px",
                  backgroundColor: "#546357",
                  borderRadius: "50px",
                  padding: "5px",
                }}
                alt="Logo"
              />
              Grizzly
            </p>
            <p className="card-header played">0</p>
            <p className="card-header win">0</p>
            <p className="card-header draw">0</p>
            <p className="card-header lost">0</p>
            <p className="card-header gf">0</p>
            <p className="card-header ga">0</p>
            <p className="card-header gd">0</p>
            <p className="card-header points">0</p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center"}}>
          <div className="table">
            <p className="card-header pos">4</p>
            <p className="card-header name">
              <img
                src={logo4}
                style={{
                  width: "44px",
                  marginRight: "10px",
                  backgroundColor: "#db6b0f",
                  borderRadius: "50px",
                  padding: "5px",
                }}
                alt="Logo"
              />
              Hydra
            </p>
            <p className="card-header played">0</p>
            <p className="card-header win">0</p>
            <p className="card-header draw">0</p>
            <p className="card-header lost">0</p>
            <p className="card-header gf">0</p>
            <p className="card-header ga">0</p>
            <p className="card-header gd">0</p>
            <p className="card-header points">0</p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="table">
            <p className="card-header pos">5</p>
            <p className="card-header name">
              <img
                src={logo5}
                style={{
                  width: "44px",
                  marginRight: "10px",
                  backgroundColor: "#1a20d9",
                  borderRadius: "50px",
                  padding: "5px",
                }}
                alt="Logo"
              />
              Raptors
            </p>
            <p className="card-header played">0</p>
            <p className="card-header win">0</p>
            <p className="card-header draw">0</p>
            <p className="card-header lost">0</p>
            <p className="card-header gf">0</p>
            <p className="card-header ga">0</p>
            <p className="card-header gd">0</p>
            <p className="card-header points">0</p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="table">
            <p className="card-header pos">6</p>
            <p className="card-header name">
              <img
                src={logo6}
                style={{
                  width: "44px",
                  marginRight: "10px",
                  backgroundColor: "#cf0dd6",
                  borderRadius: "50px",
                  padding: "5px",
                }}
                alt="Logo"
              />
              Stags
            </p>
            <p className="card-header played">0</p>
            <p className="card-header win">0</p>
            <p className="card-header draw">0</p>
            <p className="card-header lost">0</p>
            <p className="card-header gf">0</p>
            <p className="card-header ga">0</p>
            <p className="card-header gd">0</p>
            <p className="card-header points">0</p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="table">
            <p className="card-header pos">7</p>
            <p className="card-header name">
              <img
                src={logo7}
                style={{
                  width: "44px",
                  marginRight: "10px",
                  backgroundColor: "#cfe627",
                  borderRadius: "50px",
                  padding: "5px",
                }}
                alt="Logo"
              />
              Tusker
            </p>
            <p className="card-header played">0</p>
            <p className="card-header win">0</p>
            <p className="card-header draw">0</p>
            <p className="card-header lost">0</p>
            <p className="card-header gf">0</p>
            <p className="card-header ga">0</p>
            <p className="card-header gd">0</p>
            <p className="card-header points">0</p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="table">
            <p className="card-header pos">8</p>
            <p className="card-header name">
              <img
                src={logo8}
                style={{
                  width: "44px",
                  marginRight: "10px",
                  backgroundColor: "#eb1c23",
                  borderRadius: "50px",
                  padding: "5px",
                }}
                alt="Logo"
              />
              Valiente
            </p>
            <p className="card-header played">0</p>
            <p className="card-header win">0</p>
            <p className="card-header draw">0</p>
            <p className="card-header lost">0</p>
            <p className="card-header gf">0</p>
            <p className="card-header ga">0</p>
            <p className="card-header gd">0</p>
            <p className="card-header points">0</p>
          </div>
        </div>
        {/* <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="sr-only" id="loading"></span>
          </div>
        </div> */}
      </div>
    </div>
  );
}
