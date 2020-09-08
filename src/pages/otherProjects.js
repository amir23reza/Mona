import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBListGroup } from 'mdbreact'


const OtherProjects = () => {
    return (

        <MDBContainer>
            <div className="ArtSection">
            <MDBRow className="sectionTitle">
                <h1 >Artistic Works</h1>
            </MDBRow>
            <MDBRow style={{justifyContent:'center'}}>
                <p>In a professional context it often happens that private
                      clients order a publication to be made.</p>
            </MDBRow>

            <MDBRow>
                <MDBCol lg="12" md="12" sm="12">
                    <ul>
                        <li className="button-border">
                            <a >posters</a>
                            </li>
                        <li className="button-border">
                            <a>drawings</a>
                            </li>
                        <li className="button-border">
                            <a>Installation Art</a>
                            </li>
                    </ul>

                </MDBCol>
            </MDBRow >
            </div>
            <MDBRow style={{paddingTop: '30px'}}>

                <MDBCol lg="4">
                    <div class="image-border">
                        <img class="img-fluid" src={require("../images/Art/1.png")} />
                    </div>
                </MDBCol>

                <MDBCol lg="4">
                    <div class="image-border">
                        <img class="img-fluid" src={require("../images/Art/2.png")} />
                    </div>
                </MDBCol>

                <MDBCol lg="4">
                    <div class="image-border">
                        <img class="img-fluid" src={require("../images/Art/3.png")} />
                    </div>
                </MDBCol>

            </MDBRow>

            <MDBRow style={{paddingTop: '30px'}} >

                <MDBCol lg="4">
                    <div class="image-border">
                        <img class="img-fluid" src={require("../images/Art/4.png")} />
                    </div>
                </MDBCol>

                <MDBCol lg="4">
                    <div class="image-border">
                        <img class="img-fluid" src={require("../images/Art/5.png")} />
                    </div>
                </MDBCol>

                <MDBCol lg="4">
                    <div class="image-border">
                        <img class="img-fluid" src={require("../images/Art/6.png")} />
                    </div>
                </MDBCol>

            </MDBRow>

            <MDBRow style={{paddingTop: '30px'}}>

                <MDBCol lg="4">
                    <div class="image-border">
                        <img class="img-fluid" src={require("../images/Art/7.png")} />
                    </div>
                </MDBCol>

                <MDBCol lg="4">
                    <div class="image-border">
                        <img class="img-fluid" src={require("../images/Art/8.png")} />
                    </div>
                </MDBCol>

                <MDBCol lg="4">
                    <div class="image-border">
                        <img class="img-fluid" src={require("../images/Art/14.png")} />
                    </div>
                </MDBCol>

            </MDBRow>

            <MDBRow style={{paddingTop: '30px', paddingBottom:'30px'}}>

                <MDBCol lg="4">
                    <div class="image-border">
                        <img class="img-fluid" src={require("../images/Art/10.png")} />
                    </div>
                </MDBCol>

                <MDBCol lg="4">
                    <div class="image-border">
                        <img class="img-fluid" src={require("../images/Art/11.png")} />
                    </div>
                </MDBCol>

                <MDBCol lg="4">
                    <div class="image-border">
                        <img class="img-fluid" src={require("../images/Art/12.png")} />
                    </div>
                </MDBCol>

            </MDBRow>

        </MDBContainer>

    )
}

export default OtherProjects;
