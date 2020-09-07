import React from 'react'
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact'


const Photography = () => {
    return (
        <div id="photography">
             <MDBCol>
              <MDBRow style={{marginRight : '0px', marginLeft: '0px'}}>
                  <h1>photography</h1>
              </MDBRow>
          </MDBCol>
          <MDBRow style={{marginRight : '0px', marginLeft: '0px'}}>
      <MDBCol lg="3" md="6" sm="12">
        <img class="photo" src={require("../images/photography/7.jpg")} />
       
      </MDBCol>

      <MDBCol lg="3" md="6" sm="12">
      <img class="photo" src={require("../images/photography/3.jpg")} />
      </MDBCol>

      <MDBCol lg="3" md="6" sm="12" >
      <img class="photo" src={require("../images/photography/8.jpg")} />
    
      </MDBCol>

      <MDBCol lg="3" md="6" sm="12" >
      <img class="photo" src={require("../images/photography/6.jpg")} />
    
      </MDBCol>
    </MDBRow>

    <MDBRow style={{marginRight : '0px', marginLeft: '0px', paddingTop:'20px'}}>
     
      <MDBCol lg="3" md="6" sm="12">
      <img class="photo" src={require("../images/photography/9.jpg")} />
      </MDBCol>

      <MDBCol lg="6" md="6" sm="12">
      <img  class="photo" src={require("../images/photography/12.jpg")} />
    
      </MDBCol>
      <MDBCol lg="3" md="6" sm="12">
      <img class="photo" src={require("../images/photography/11.jpg")} />
    
      </MDBCol>
    </MDBRow>
        </div>
    )
}

export default Photography;