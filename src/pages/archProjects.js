import React from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import { Link } from "react-router-dom";
const ArchProjects = () => {
  return (
    <div id="architecture">
      <div>
        <MDBContainer>
          <MDBRow className="sectionTitle">
            <MDBCol lg="12" className="ArtSection">
              <h1>Academic Projects</h1>
            </MDBCol>
          </MDBRow>

          <MDBRow
            style={{ marginRight: "0px", marginLeft: "0px", marginTop: "60px" }}
          >
            <MDBCol lg="6" class="text-right">
              <Link to="/thesis">
                <div>
                  <img
                    alt="/"
                    class="ArchPhoto"
                    src={require("../images/Arch/2.jpg")}
                  />
                </div>
              </Link>
            </MDBCol>
            <MDBCol lg="6" className="descriptTow">
              <h3>Title:</h3>
              <p>
                Residential And Cultural Complex
                <span>with the approach in contextual architecture</span>
              </p>
              <h4>Location: </h4>
              <p>Qeshm Island,Iran </p>
              <h4>Date: </h4>
              <p>April-2019 </p>
            </MDBCol>
          </MDBRow>

          <MDBRow
            style={{ marginRight: "0px", marginLeft: "0px", marginTop: "60px" }}
          >
            <MDBCol lg="6" class="text-right">
              <Link to="/thesis">
                <div>
                  <img
                    alt="/"
                    class="ArchPhoto"
                    src={require("../images/Arch/13.jpg")}
                  />
                </div>
              </Link>
            </MDBCol>
            <MDBCol lg="6" className="descriptTow">
              <h3>Title:</h3>
              <p>Iranian Art Musuem</p>
              <h4>Location: </h4>
              <p>Kargar St. Tehran, Iran </p>
              <h4>Date: </h4>
              <p>April-2019 </p>
            </MDBCol>
          </MDBRow>

          <MDBRow
            style={{ marginRight: "0px", marginLeft: "0px", marginTop: "60px" }}
          >
            <MDBCol lg="6" class="text-right">
              <Link to="/thesis">
                <div className="image-border">
                  <img
                    alt="/"
                    class="ArchPhoto"
                    src={require("../images/Arch/17.jpg")}
                  />
                </div>
              </Link>
            </MDBCol>
            <MDBCol lg="6" className="descriptTow">
              <h3>Title:</h3>
              <p>
                Residential complex with the approach in enhancement of social
                intractions in public spaces
              </p>
              <h4>Location: </h4>
              <p>Golha Boulevard. Tehran </p>
              <h4>Date: </h4>
              <p>April-2019 </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
};

export default ArchProjects;
