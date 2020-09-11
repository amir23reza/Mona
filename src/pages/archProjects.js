import React from "react";
import { MDBRow, MDBCol, MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdbreact";
import { Link } from "react-router-dom";
import Typing from "react-typing-animation";
import ArchProject from '../components/archProject'

const ArchProjects = () => {
  return (
    <div id="architecture">

      <MDBNavbar color="myNavBar" fixed="top" dark scrolling transparent>
        <MDBNavbarBrand href="/">
          <img
            src={require("../images/logo.png")}
            className="fluid logo_img"
            alt="logo"
          />
        </MDBNavbarBrand>
        <Typing speed={100} cursor={null}>
          <h3 className="sectionTitle" style={{ marginTop: "15px" }}>
            Academic Projects
          </h3>
        </Typing>
      </MDBNavbar>

        <MDBContainer style={{paddingTop : "120px"}}>

          <ArchProject 
            linkTo="/thesis"
            img={require("../images/Arch/2.jpg")}
            title='Residential And Cultural Complex with the approach in contextual architecture'
            location="Qeshm Island,Iran"
            date="April-2019"
            delay="0ms"
          />

<         ArchProject 
            linkTo="/thesis"
            img={require("../images/Arch/13.jpg")}
            title='Iranian Art Musuem'
            location="Kargar St. Tehran, Iran"
            date="April-2019"
            delay="500ms"
          />

          <ArchProject 
            linkTo="/thesis"
            img={require("../images/Arch/17.jpg")}
            title='Residential complex with the approach in enhancement of social intractions in public spaces'
            location="Golha Boulevard. Tehran "
            date="April-2019"
            delay="1000ms"
          />

        </MDBContainer>
    </div>
  );
};

export default ArchProjects;
