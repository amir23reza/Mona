import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBListGroup } from 'mdbreact'


const OtherProjects = () => {
    return (

        <MDBContainer>
            <MDBRow>
                <h1>Artistic Works</h1>
            </MDBRow>
            <MDBRow>
                <p>In a professional context it often happens that private
                      clients order a publication to be made.</p>
            </MDBRow>

            <MDBRow>
                <MDBCol lg="12" md="12" sm="12">
                    <ul>
                        <li><a>posters</a></li>
                        <li><a>drawings</a></li>
                        <li><a>Installation Art</a></li>
                    </ul>

                </MDBCol>
            </MDBRow>

            <MDBRow >

                <MDBCol lg="4">
                    <div class="image-border">
                    <p>hello</p>
                    <img class="img-fluid" src={require("../images/photography/7.jpg")} />
                    </div>
                
                </MDBCol>
                <MDBCol lg="4">
                <p>hello</p>
                </MDBCol>
                <MDBCol lg="4">
                <p>hello</p>
                </MDBCol>

            </MDBRow>

        </MDBContainer>

    )
}

export default OtherProjects;
