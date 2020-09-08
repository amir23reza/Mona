import React from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
const UIProjects = () => {
  return (
    <div>
      <MDBContainer>
        <MDBRow
          className="sectionTitle"
          style={{ marginRight: "0px", marginLeft: "0px" }}
        >
          <MDBCol className="ArtSection">
            <h1>UI-UX Projects</h1>
          </MDBCol>
        </MDBRow>

        <MDBRow
          style={{ marginRight: "0px", marginLeft: "0px", marginTop: "20px" }}
        >
          <MDBCol lg="9" style={{ padding: "0px 10px" }}>
            <div className="image-border">
              <img
                className="UiPhoto"
                src={require("../images/2.PNG")}
                alt="/"
              />
            </div>
          </MDBCol>

          <MDBCol lg="3">
            <MDBRow>
              <MDBCol lg="12">
                <h2 className="UiTitle">IBE Project</h2>
              </MDBCol>
              <MDBCol>
                <p className="descriptOne">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>

        <MDBRow
          style={{ marginRight: "0px", marginLeft: "0px", paddingTop: "20px" }}
        >
          <MDBCol lg="12" className="descript">
            <MDBRow
              style={{
                paddingTop: "10px",
              }}
            >
              <MDBCol lg="3">
                <img
                  className="UiLogo"
                  src={require("../images/client.png")}
                  alt="/"
                />
                <h4 className="UiTitle">Client:</h4>
                <p>Tehran University of Medical Science</p>
              </MDBCol>
              <MDBCol lg="3">
                <img
                  className="UiLogo"
                  src={require("../images/team.png")}
                  alt="/"
                />
                <h4 className="UiTitle">Team:</h4>
                <p>Rayan Pajouh Salamat, Ui/Ux team</p>
              </MDBCol>

              <MDBCol lg="3">
                <img
                  className="UiLogo"
                  src={require("../images/date.png")}
                  alt="/"
                />
                <h4 className="UiTitle">Date:</h4>
                <p>Rayan Pajouh Salamat, Ui/Ux team</p>
              </MDBCol>
              <MDBCol lg="3">
                <img
                  className="UiLogo"
                  src={require("../images/services.png")}
                  alt="/"
                />
                <h4 className="UiTitle">Services:</h4>
                <p>Rayan Pajouh Salamat, Ui/Ux team</p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default UIProjects;
