import React from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
const UIProjects = () => {
  return (
    <div>
      <MDBContainer>
        <MDBRow style={{ marginRight: "0px", marginLeft: "0px" }}>
          <h1>Ui-Ux Projects</h1>
        </MDBRow>
        <MDBRow style={{ marginRight: "0px", marginLeft: "0px" }}>
          <MDBCol lg="12" style={{ padding: "20px 0" }}>
            <h2>ibe project</h2>
          </MDBCol>

          <MDBCol lg="9" style={{ padding: "10px 10px" }}>
            <img className="UiPhoto" src={require("../images/2.PNG")} alt="/" />
          </MDBCol>

          <MDBCol lg="3" className="descript">
            <MDBRow style={{ marginRight: "0px", marginLeft: "0px" }}>
              <MDBCol lg="12" className="descriptOne">
                <h2>Client</h2>

                <h2>Team</h2>

                <h2>Date</h2>

                <h2>Services</h2>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default UIProjects;
