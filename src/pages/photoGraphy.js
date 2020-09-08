import React from "react";
import { MDBRow, MDBCol } from "mdbreact";

const Photography = () => {
  return (
    <div id="photography">
      <MDBRow
        className="sectionTitle"
        style={{ marginRight: "0px", marginLeft: "0px" }}
      >
        <MDBCol className="ArtSection">
          <h1>photography</h1>
        </MDBCol>
      </MDBRow>

      <MDBRow
        style={{ marginRight: "0px", marginLeft: "0px", paddingTop: "30px" }}
      >
        <MDBCol lg="3" md="6" sm="12">
          <div class="image-border">
            <img
              class="photo"
              src={require("../images/photography/7.jpg")}
              alt="/"
            />
          </div>
        </MDBCol>

        <MDBCol lg="3" md="6" sm="12">
          <div class="image-border">
            <img
              class="photo"
              src={require("../images/photography/3.jpg")}
              alt="/"
            />
          </div>
        </MDBCol>

        <MDBCol lg="3" md="6" sm="12">
          <div class="image-border">
            <img
              class="photo"
              src={require("../images/photography/8.jpg")}
              alt="/"
            />
          </div>
        </MDBCol>

        <MDBCol lg="3" md="6" sm="12">
          <div class="image-border">
            <img
              class="photo"
              src={require("../images/photography/6.jpg")}
              alt="/"
            />
          </div>
        </MDBCol>
      </MDBRow>

      <MDBRow
        style={{
          marginRight: "0px",
          marginLeft: "0px",
          paddingTop: "20px",
          paddingBottom: "30px",
        }}
      >
        <MDBCol lg="3" md="6" sm="12">
          <div class="image-border">
            <img
              class="photo"
              src={require("../images/photography/9.jpg")}
              alt="/"
            />
          </div>
        </MDBCol>

        <MDBCol lg="6" md="6" sm="12">
          <div class="image-border">
            <img
              class="photo"
              src={require("../images/photography/12.jpg")}
              alt="/"
            />
          </div>
        </MDBCol>
        <MDBCol lg="3" md="6" sm="12">
          <div class="image-border">
            <img
              class="photo"
              src={require("../images/photography/11.jpg")}
              alt="/"
            />
          </div>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Photography;
