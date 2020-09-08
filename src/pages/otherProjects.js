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
                        <img class="img-fluid" src={require("../images/Art/1.jpg")} />
                    </div>
                </MDBCol>

                <MDBCol lg="4">
                    <div class="image-border">
                        <img class="img-fluid" src={require("../images/Art/2.jpg")} />
                    </div>
                </MDBCol>

                <MDBCol lg="4">
                    <div class="image-border">
                        <img class="img-fluid" src={require("../images/Art/3.jpg")} />
                    </div>
                </MDBCol>

            </MDBRow>

            <MDBRow style={{paddingTop: '30px'}} >

                <MDBCol lg="4">
                    <div class="image-border">
                        <img class="img-fluid" src={require("../images/Art/4.jpg")} />
                    </div>
                </MDBCol>

                <MDBCol lg="4">
                    <div class="image-border">
                        <img class="img-fluid" src={require("../images/Art/5.jpg")} />
                    </div>
                </MDBCol>

                <MDBCol lg="4">
                    <div class="image-border">
                        <img class="img-fluid" src={require("../images/Art/6.jpg")} />
                    </div>
                </MDBCol>

            </MDBRow>

            <MDBRow style={{paddingTop: '30px'}}>

                <MDBCol lg="4">
                    <div class="image-border">
                        <img class="img-fluid" src={require("../images/Art/7.jpg")} />
                    </div>
                </MDBCol>

                <MDBCol lg="4">
                    <div class="image-border">
                        <img class="img-fluid" src={require("../images/Art/8.jpg")} />
                    </div>
                </MDBCol>

                <MDBCol lg="4">
                    <div class="image-border">
                        <img class="img-fluid" src={require("../images/Art/14.jpg")} />
                    </div>
                </MDBCol>

            </MDBRow>

            <MDBRow style={{paddingTop: '30px', paddingBottom:'30px'}}>

                <MDBCol lg="4">
                    <div class="image-border">
                        <img class="img-fluid" src={require("../images/Art/10.jpg")} />
                    </div>
                </MDBCol>

                <MDBCol lg="4">
                    <div class="image-border">
                        <img class="img-fluid" src={require("../images/Art/11.jpg")} />
                    </div>
                </MDBCol>

                <MDBCol lg="4">
                    <div class="image-border">
                        <img class="img-fluid" src={require("../images/Art/12.jpg")} />
                    </div>
                </MDBCol>

            </MDBRow>

        </MDBContainer>

    )
}

export default OtherProjects;
