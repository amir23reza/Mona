import React, { useState } from "react";
import Typing from "react-typing-animation";
import { MDBContainer, MDBRow, MDBCol, MDBProgress, MDBAnimation } from "mdbreact";

const Skills = () => {

    const [activeTab, setActiveTab] = useState("1")

    const toggleActiveTab = (tab) => {
        if (tab != activeTab) {
            setActiveTab(tab)
        }
    }

  return (
    <section className="section" id="skillsSection">
      <Typing speed={100} cursor={null}>
        <h1 className="sectionTitle">Skills</h1>
      </Typing>
      <MDBContainer>
          <MDBRow>
              <MDBCol lg="4" md="4" sm="12" >
                  {
                      activeTab == "1" ? (
                        <div className="tabContainer activeTabContainer" onClick={()=>{toggleActiveTab("1")}}>
                            <p className="tabTitle activeTabTitle">IELTS</p>
                        </div>
                      ) : (
                        <div className="tabContainer" onClick={()=>{toggleActiveTab("1")}}>
                            <p className="tabTitle">IELTS</p>
                        </div>
                      )
                  }
              </MDBCol>
              <MDBCol lg="4" md="4" sm="12">
                {
                      activeTab == "2" ? (
                        <div className="tabContainer activeTabContainer" onClick={()=>{toggleActiveTab("2")}}>
                            <p className="tabTitle activeTabTitle">skillGroup2</p>
                        </div>
                      ) : (
                        <div className="tabContainer" onClick={()=>{toggleActiveTab("2")}}>
                            <p className="tabTitle">skillGroup2</p>
                        </div>
                      )
                  }
              </MDBCol>
              <MDBCol lg="4" md="4" sm="12">
                {
                      activeTab == "3" ? (
                        <div className="tabContainer activeTabContainer" onClick={()=>{toggleActiveTab("3")}}>
                            <p className="tabTitle activeTabTitle">skillGroup3</p>
                        </div>
                      ) : (
                        <div className="tabContainer" onClick={()=>{toggleActiveTab("3")}}>
                            <p className="tabTitle">skillGroup3</p>
                        </div>
                      )
                  }
              </MDBCol>
          </MDBRow>
          <MDBRow>
              <MDBCol lg="2" md="2" sm="0"></MDBCol>
              <MDBCol lg="8" md="8" sm="12">
                  <div className="marginTop" />
                  {
                      activeTab == "1" ? (
                          <div>
                                <MDBAnimation reveal type="fadeInLeft" duration="1500ms" delay="0ms">
                                    <p className="skillLabel">Listening</p>
                                    <MDBProgress value={83} heigth="40px" color="progress">
                                        <span className="progressText">7.5</span>
                                    </MDBProgress>
                                </MDBAnimation>
                                <MDBAnimation reveal type="fadeInLeft" duration="1500ms" delay="500ms">
                                    <p className="skillLabel">Reading</p>
                                    <MDBProgress value={88} heigth="40px" color="progress">
                                        <span className="progressText">8</span>
                                    </MDBProgress>
                                </MDBAnimation>
                                <MDBAnimation reveal type="fadeInLeft" duration="1500ms" delay="1000ms">
                                    <p className="skillLabel">Speaking</p>
                                    <MDBProgress value={72} heigth="40px" color="progress">
                                        <span className="progressText">6.5</span>
                                    </MDBProgress>
                                </MDBAnimation>
                                <MDBAnimation reveal type="fadeInLeft" duration="1500ms" delay="1500ms">
                                    <p className="skillLabel">Speaking</p>
                                    <MDBProgress value={72} heigth="40px" color="progress">
                                        <span className="progressText">6.5</span>
                                    </MDBProgress>
                                </MDBAnimation>
                                <MDBAnimation reveal type="fadeInLeft" duration="1500ms" delay="2000ms">
                                    <p className="skillLabel">Overall Score</p>
                                    <MDBProgress value={77} heigth="40px" color="progress">
                                        <span className="progressText">7</span>
                                    </MDBProgress>
                                </MDBAnimation>
                          </div>
                      ) : activeTab == "2" ? (
                        <div>
                            <MDBAnimation reveal type="fadeInDown" duration="1500ms" delay="0ms">
                                <p className="skillLabel">Skill2-1</p>
                                <MDBProgress value={83} heigth="40px" color="progress">
                                    <span className="progressText">83</span>
                                </MDBProgress>
                            </MDBAnimation>
                            <MDBAnimation reveal type="fadeInDown" duration="1500ms" delay="500ms">
                                <p className="skillLabel">skill2-2</p>
                                <MDBProgress value={88} heigth="40px" color="progress">
                                    <span className="progressText">88</span>
                                </MDBProgress>
                            </MDBAnimation>
                            <MDBAnimation reveal type="fadeInDown" duration="1500ms" delay="1000ms">
                                <p className="skillLabel">skill2-3</p>
                                <MDBProgress value={72} heigth="40px" color="progress">
                                    <span className="progressText">72</span>
                                </MDBProgress>
                            </MDBAnimation>
                        </div>
                      ) : (
                        <div>
                            <MDBAnimation reveal type="fadeInRight" duration="1500ms" delay="0ms">
                                <p className="skillLabel">Skill3-1</p>
                                <MDBProgress value={83} heigth="40px" color="progress">
                                    <span className="progressText">83</span>
                                </MDBProgress>
                            </MDBAnimation>
                            <MDBAnimation reveal type="fadeInRight" duration="1500ms" delay="500ms">
                                <p className="skillLabel">skill3-2</p>
                                <MDBProgress value={88} heigth="40px" color="progress">
                                    <span className="progressText">88</span>
                                </MDBProgress>
                            </MDBAnimation>
                            <MDBAnimation reveal type="fadeInRight" duration="1500ms" delay="1000ms">
                                <p className="skillLabel">skill3-3</p>
                                <MDBProgress value={72} heigth="40px" color="progress">
                                    <span className="progressText">72</span>
                                </MDBProgress>
                            </MDBAnimation>
                        </div>
                      )
                  }
              </MDBCol>
              <MDBCol lg="2" md="2" sm="0"></MDBCol>
          </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default Skills;
