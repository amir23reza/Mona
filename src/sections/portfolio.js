import React from 'react'
import { MDBRow, MDBCol } from 'mdbreact'
import Typing from 'react-typing-animation'
import { BrowserRouter as Router } from "react-router-dom";
import Photography from './Photography'
import { Link, Element } from "react-scroll";

const Portfolio = () => {
    return (
        <section id="portfolioSection" className="section">
            <Typing speed={100} cursor={null}>
                <h1
                className="sectionTitle"
                >
                Portfolio
                </h1>
            </Typing>
            <Router>
            <MDBRow style={{marginRight : '0px', marginLeft: '0px'}}>
                <MDBCol lg="3" md="6" sm="12" style={{padding : '0px'}}>
                    <div className="categoryContainer" style={{backgroundImage: `url(${require("../images/porfolio/1.jpg")})`}}>
                        <a className="categoryTitle">
                            Architectural Projects
                        </a>
                    </div>
                </MDBCol>
                <MDBCol lg="3" md="6" sm="12" style={{padding : '0px'}}>
                    <div className="categoryContainer" style={{backgroundImage: `url(${require("../images/porfolio/2.jpg")})`}}>
                        <h3 className="categoryTitle">
                            UI/UX Projects
                        </h3>
                    </div>
                </MDBCol>
                <MDBCol lg="3" md="6" sm="12" style={{padding : '0px'}}>
                    <div className="categoryContainer" style={{backgroundImage: `url(${require("../images/porfolio/3.jpg")})`}}>
                        {/* <h3 className="categoryTitle">
                            Photographies
                        </h3> */}
                        <Link to=" Photography" spy={true} smooth={true} >
                <a id="Photography" className="categoryTitle" href="/" >
                Photographies
                </a>
              </Link>
                    </div>
                </MDBCol>
                <MDBCol lg="3" md="6" sm="12" style={{padding : '0px'}}>
                    <div className="categoryContainer" style={{backgroundImage: `url(${require("../images/porfolio/4.jpg")})`}}>
                        <h3 className="categoryTitle">
                            Others
                        </h3>
                    </div>
                </MDBCol>
            </MDBRow>
            </Router>
            <Photography/>
        </section>
    )
}

export default Portfolio