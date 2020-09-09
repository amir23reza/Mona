import React from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";

const ThesisProject = () => {
    return (
        <div>
            <MDBContainer>
                <MDBRow>
                    <h1>Title</h1>
                </MDBRow>

                <MDBRow>
                    <MDBCol lg="6">
                        <div className="image-border">
                            <img className="ArchPhoto" alt="/" src={require("../images/Arch/1.jpg")} />
                        </div>
                    </MDBCol>
                    <MDBCol lg="6">
                        <div className="image-border">
                            <img className="ArchPhoto" alt="/" src={require("../images/Arch/3.jpg")} />
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol lg="6">
                        <div className="image-border">
                            <img className="ArchPhoto" alt="/" src={require("../images/Arch/4.jpg")} />
                        </div>
                    </MDBCol>
                    <MDBCol lg="6">
                        <div className="image-border">
                            <img className="ArchPhoto" alt="/" src={require("../images/Arch/5.jpg")} />
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol lg="6">
                        <div className="image-border">
                            <img className="ArchPhoto" alt="/" src={require("../images/Arch/6.jpg")} />
                        </div>
                    </MDBCol>
                    <MDBCol lg="6">
                        <div className="image-border">
                            <img className="ArchPhoto" alt="/" src={require("../images/Arch/7.jpg")} />
                        </div>
                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </div>
    );
};

export default ThesisProject;
