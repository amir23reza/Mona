import React from "react";
import { MDBRow, MDBCol, MDBContainer, MDBAnimation } from "mdbreact";
const UIProjects = () => {
  return (

    <MDBContainer>

      <MDBRow
        className="sectionTitle"
        style={{ marginRight: "0px", marginLeft: "0px" }}
      >
        <MDBCol className="ArtSection">
          <h1>UI-UX Projects</h1>
        </MDBCol>
      </MDBRow>

      <MDBAnimation type="fadeInLeft" duration="1500ms" delay="0ms" >
        <MDBRow
          style={{ marginRight: "0px", marginLeft: "0px", marginTop: "20px" }}
        >

          <MDBCol lg="9" style={{ padding: "0px 10px" }}>
            <div className="image-border">
              <a href="http://virtualservice.tums.ac.ir/">
                <img
                  className="UiPhoto"
                  src={require("../images/2.PNG")}
                  alt="/"
                />
              </a>
            </div>
          </MDBCol>



          <MDBCol lg="3">
            <MDBRow>
              <MDBCol lg="12">
                <h2 className="UiTitle">IBE Project</h2>
              </MDBCol>
              <MDBCol>
                <p className="descriptOne">
                  According to international standards of e-learning and
                  educational needs, Tehran University of Medical Sciences has
                  managed to present part of its educational programs in the
                  form of online courses.In this project, I have attended
                  several meeting to comperhend what exactly our costumers
                  want.As a member of front-end web developer, I was corporating
                  for applying their claims to interactive visual design.
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
                <p>2020/March/20 - 2020/June/30 </p>
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
      </MDBAnimation>

      <MDBAnimation type="fadeInLeft" duration="1500ms" delay="1000ms">

     
      <MDBRow
        style={{ marginRight: "0px", marginLeft: "0px", marginTop: "60px" }}
      >
        <MDBCol lg="9" style={{ padding: "0px 10px" }}>
          <div className="image-border">
            <a href="https://arman.vums.ac.ir/">
              <img
                className="UiPhoto"
                src={require("../images/arman.png")}
                alt="/"
              />
            </a>
          </div>
        </MDBCol>

        <MDBCol lg="3">
          <MDBRow>
            <MDBCol lg="12">
              <h2 className="UiTitle">ARMAN Project</h2>
            </MDBCol>
            <MDBCol>
              <p className="descriptOne">
                According to international standards of e-learning and
                educational needs, Tehran University of Medical Sciences has
                managed to present part of its educational programs in the
                form of online courses.In this project, I have attended
                several meeting to comperhend what exactly our costumers
                want.As a member of front-end web developer, I was corporating
                for applying their claims to interactive visual design.
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
              <p>2020/March/20 - 2020/June/30 </p>
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
      </MDBAnimation>


      <MDBAnimation type="fadeInLeft" duration="1500ms" delay="1500ms">
      <MDBRow
        style={{ marginRight: "0px", marginLeft: "0px", marginTop: "60px" }}
      >
        <MDBCol lg="9" style={{ padding: "0px 10px" }}>
          <div className="image-border">
            <a href="http://iranpedcong.tums.ac.ir/">
              <img
                className="UiPhoto"
                src={require("../images/iranped.png")}
                alt="/"
              />
            </a>
          </div>
        </MDBCol>

        <MDBCol lg="3">
          <MDBRow>
            <MDBCol lg="12">
              <h2 className="UiTitle">IRANPED Project</h2>
            </MDBCol>
            <MDBCol>
              <p className="descriptOne">
                According to international standards of e-learning and
                educational needs, Tehran University of Medical Sciences has
                managed to present part of its educational programs in the
                form of online courses.In this project, I have attended
                several meeting to comperhend what exactly our costumers
                want.As a member of front-end web developer, I was corporating
                for applying their claims to interactive visual design.
                </p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
      <MDBRow
        style={{
          marginRight: "0px",
          marginLeft: "0px",
          paddingTop: "20px",
          marginBottom: "60px",
        }}
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
              <p>2020/March/20 - 2020/June/30 </p>
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
      </MDBAnimation>

     

    </MDBContainer>

  );
};

export default UIProjects;
