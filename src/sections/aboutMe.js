import React, { useState } from "react";
import { MDBRow, MDBCol, MDBContainer, MDBAnimation } from "mdbreact";
import Typing from "react-typing-animation";

const AboutMe = () => {
  const [activeSegment, setActiveSegment] = useState("1");

  const toggleSegment = (segment) => {
    if (segment != activeSegment) {
      setActiveSegment(segment);
    }
  };
  return (
    <section
      id="aboutMeSection"
      className="section"
      style={{
        backgroundImage: `url(${require("../images/aboutMe/" +
          activeSegment +
          ".jpg")})`,
      }}
    >
      <div className="aboutMeOverlay" />
      <Typing speed={100} cursor={null}>
        <h1
          className="sectionTitle"
          style={{ position: "absolute", width: "100%" }}
        >
          About Me
        </h1>
      </Typing>
      <div className="marginTop" />
      <MDBContainer>
        <MDBRow>
          <MDBCol lg="4" md="4" sm="12">
            <div className="marginTop" />
            {activeSegment == "1" ? (
              <h4
                className="segmentTitle activeSegmentTitle"
                onMouseOver={() => {
                  toggleSegment("1");
                }}
              >
                Title 1
              </h4>
            ) : (
              <h4
                className="segmentTitle"
                onMouseOver={() => {
                  toggleSegment("1");
                }}
              >
                Title 1
              </h4>
            )}
            {activeSegment == "2" ? (
              <h4
                className="segmentTitle activeSegmentTitle"
                onMouseOver={() => {
                  toggleSegment("2");
                }}
              >
                Title 2
              </h4>
            ) : (
              <h4
                className="segmentTitle"
                onMouseOver={() => {
                  toggleSegment("2");
                }}
              >
                Title 2
              </h4>
            )}
            {activeSegment == "3" ? (
              <h4
                className="segmentTitle activeSegmentTitle"
                onMouseOver={() => {
                  toggleSegment("3");
                }}
              >
                Title 3
              </h4>
            ) : (
              <h4
                className="segmentTitle"
                onMouseOver={() => {
                  toggleSegment("3");
                }}
              >
                Title 3
              </h4>
            )}
            {activeSegment == "4" ? (
              <h4
                className="segmentTitle activeSegmentTitle"
                onMouseOver={() => {
                  toggleSegment("4");
                }}
              >
                Title 4
              </h4>
            ) : (
              <h4
                className="segmentTitle"
                onMouseOver={() => {
                  toggleSegment("4");
                }}
              >
                Title 4
              </h4>
            )}
          </MDBCol>
          <MDBCol lg="8" md="8" sm="12">
            {activeSegment == 1 ? (
              <MDBAnimation reveal type="fadeInDown" duration="1000ms" className="descriptionContainer">
                <div className="marginTop" />
                <p className="descriptionP">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Feugiat nisl pretium fusce id velit ut tortor pretium. Enim
                  lobortis scelerisque fermentum dui faucibus in ornare. Mi
                  tempus imperdiet nulla malesuada pellentesque elit eget. Sed
                  viverra tellus in hac habitasse platea dictumst vestibulum.
                  Vulputate mi sit amet mauris commodo quis. Vestibulum sed arcu
                  non odio euismod. Posuere morbi leo urna molestie at elementum
                  eu facilisis. Imperdiet proin fermentum leo vel orci porta non
                  pulvinar neque. In arcu cursus euismod quis viverra nibh cras
                  pulvinar. Et odio pellentesque diam volutpat commodo. Viverra
                  justo nec ultrices dui. Dolor purus non enim praesent. Morbi
                  tristique senectus et netus et. Amet facilisis magna etiam
                  tempor orci eu.
                </p>
                <p className="eventDate">August 11,2011</p>
              </MDBAnimation>
            ) : activeSegment == 2 ? (
              <MDBAnimation reveal type="fadeInUp" duration="1000ms" className="descriptionContainer">
                <div className="marginTop" />
                <p className="descriptionP">
                  Eros donec ac odio tempor orci dapibus ultrices in iaculis.
                  Malesuada fames ac turpis egestas integer eget aliquet nibh.
                  Sodales neque sodales ut etiam sit amet nisl purus in.
                  Malesuada proin libero nunc consequat interdum varius.
                  Imperdiet proin fermentum leo vel orci. Amet dictum sit amet
                  justo donec. Sed vulputate odio ut enim blandit volutpat
                  maecenas. Sed viverra ipsum nunc aliquet. Arcu felis bibendum
                  ut tristique et. Tellus orci ac auctor augue mauris augue. Ac
                  tincidunt vitae semper quis. Mauris augue neque gravida in
                  fermentum et sollicitudin ac orci.
                </p>
                <p className="eventDate">January 1,2013</p>
              </MDBAnimation>
            ) : activeSegment == "3" ? (
              <MDBAnimation reveal type="fadeInDown" duration="1000ms" className="descriptionContainer">
                <div className="marginTop" />
                <p className="descriptionP">
                  Cursus turpis massa tincidunt dui ut ornare lectus sit. Ut
                  morbi tincidunt augue interdum velit euismod. Dui ut ornare
                  lectus sit amet est placerat in egestas. Arcu vitae elementum
                  curabitur vitae. Nec feugiat in fermentum posuere urna nec.
                  Morbi tempus iaculis urna id. Bibendum enim facilisis gravida
                  neque convallis a. Morbi tempus iaculis urna id volutpat lacus
                  laoreet non curabitur. Elit sed vulputate mi sit amet mauris
                  commodo quis. Cras adipiscing enim eu turpis egestas pretium
                  aenean pharetra magna. Magna eget est lorem ipsum dolor sit
                  amet. Tincidunt praesent semper feugiat nibh sed pulvinar
                  proin gravida. Cras semper auctor neque vitae. Tortor
                  condimentum lacinia quis vel eros. Fames ac turpis egestas
                  integer. Tortor condimentum lacinia quis vel eros donec ac
                  odio tempor. Turpis tincidunt id aliquet risus feugiat.
                  Sagittis nisl rhoncus mattis rhoncus urna neque. Scelerisque
                  fermentum dui faucibus in ornare.
                </p>
                <p className="eventDate">October 10,2015</p>
              </MDBAnimation>
            ) : (
              <MDBAnimation reveal type="fadeInUp" duration="1000ms" className="descriptionContainer">
                <div className="marginTop" />
                <p className="descriptionP">
                  Dui accumsan sit amet nulla facilisi morbi. Urna neque viverra
                  justo nec ultrices dui sapien. Vitae sapien pellentesque
                  habitant morbi tristique. Tincidunt lobortis feugiat vivamus
                  at augue eget arcu dictum. Vehicula ipsum a arcu cursus vitae
                  congue mauris rhoncus. Nulla pharetra diam sit amet nisl
                  suscipit adipiscing bibendum. Interdum consectetur libero id
                  faucibus nisl. A diam maecenas sed enim ut sem. Eget magna
                  fermentum iaculis eu. Eros in cursus turpis massa tincidunt.
                  Et tortor at risus viverra. Vitae auctor eu augue ut lectus
                  arcu. Magnis dis parturient montes nascetur. Et malesuada
                  fames ac turpis egestas maecenas pharetra convallis. Amet
                  consectetur adipiscing elit ut aliquam purus sit. Amet dictum
                  sit amet justo donec enim. Vitae sapien pellentesque habitant
                  morbi tristique. Elementum tempus egestas sed sed risus
                  pretium quam vulputate dignissim. Cras tincidunt lobortis
                  feugiat vivamus at. Auctor neque vitae tempus quam
                  pellentesque nec nam aliquam.
                </p>
                <p className="eventDate">September 19,2018</p>
              </MDBAnimation>
            )}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default AboutMe;
