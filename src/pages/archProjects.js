import React from 'react'
import { MDBRow, MDBCol, MDBContainer, MDBNavbar, MDBNavbarBrand, MDBModal, MDBModalHeader, MDBModalBody } from "mdbreact";
import { Link } from 'react-router-dom'
const ArchProjects = () => {
    return (
        <div>
            <div id="architecture">
                <MDBContainer >

                    <MDBRow class="row mx-0">
                        <div class="col-lg-12 mt-2">
                            <h1>Academic Projects</h1>
                        </div>
                    </MDBRow>

                    <MDBRow>
                        <div class="col-lg-3">
                            <h3>Thesis Project:</h3>
                            <h4>
                                Residential And Cultural Complex
                         <span>with the approach in contextual architecture</span>
                            </h4>
                            <h4>
                                Location: <span>Qeshm Island,Iran </span>
                            </h4>
                        </div>
                        <div class="col-lg-9 text-right">


                            <Link to="/thesis">
                                <div >
                                    <img class="ArchPhoto" src={require("../images/Arch/2.jpg")} />
                                </div>
                            </Link>



                        </div>
                    </MDBRow>



                    <MDBRow>
                        <div class="col-lg-3">
                            <h3>Thesis Project:</h3>
                            <h4>
                                Residential And Cultural Complex
                         <span>with the approach in contextual architecture</span>
                            </h4>
                            <h4>
                                Location: <span>Qeshm Island,Iran </span>
                            </h4>
                        </div>
                        <div class="col-lg-9 text-right">
                            <a>
                                <img class="ArchPhoto" src={require("../images/Arch/13.jpg")} />
                            </a>
                        </div>
                    </MDBRow>

                    <MDBRow>
                        <div class="col-lg-3">
                            <h3>Thesis Project:</h3>
                            <h4>
                                Residential And Cultural Complex
                         <span>with the approach in contextual architecture</span>
                            </h4>
                            <h4>
                                Location: <span>Qeshm Island,Iran </span>
                            </h4>
                        </div>
                        <div class="col-lg-9 text-right">
                            <a>
                                <img class="ArchPhoto" src={require("../images/Arch/17.jpg")} />
                            </a>
                        </div>
                    </MDBRow>

                </MDBContainer>
            </div>
        </div>
    )
}

export default ArchProjects;
