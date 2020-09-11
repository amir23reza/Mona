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
          <MDBCol lg="4">
            <div className="image-border">
              <img
                className="ArchPhoto"
                alt="/"
                src={require("../images/Arch/1.jpg")}
              />
            </div>
          </MDBCol>
          <MDBCol lg="4">
            <div className="image-border">
              <img
                className="ArchPhoto"
                alt="/"
                src={require("../images/Arch/3.jpg")}
              />
            </div>
          </MDBCol>
          <MDBCol lg="4">
            <div className="image-border">
              <img
                className="ArchPhoto"
                alt="/"
                src={require("../images/Arch/4.jpg")}
              />
            </div>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <div className="image-border">
              <img
                className="ArchPhoto"
                alt="/"
                src={require("../images/Arch/5.jpg")}
              />
            </div>
          </MDBCol>
          <MDBCol lg="4">
            <div className="image-border">
              <img
                className="ArchPhoto"
                alt="/"
                src={require("../images/Arch/6.jpg")}
              />
            </div>
          </MDBCol>
          <MDBCol lg="4">
            <div className="image-border">
              <img
                className="ArchPhoto"
                alt="/"
                src={require("../images/Arch/7.jpg")}
              />
            </div>
          </MDBCol>
          <MDBCol>
            <p>
              Qeshm which  is located in south of Iran  is like a shining demond  in khalije fars
              .Many tourists  yearly come here to explore the breathtaking nature and communicating with
              local people.after 2 months study i  figure out we need to combine the basic needs
              of tourist with cultural attractiveness. The main point is to design a ecofriendly
              building as we know today how energy consuming debate is important.This is one of the best approach for natural ventilatation.According to the optimal wind direction, some one-directed windcatchers are designed toward south. Court yard enhance the role of wind catchers.

            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <p>
            It is located in the southest part of Laleh Park.This park also has two contemperory musuems so it is important to design Iranian Art Gallery  responsing correctly  to the enviornment.This building has two main entrances, one from hejab street in south elevation the other in the north elevation which opens to green spaces.It also has three gardens:(music, painting and sclupture) These gardens provide sensational atmosphere for every one to enjoy artistic products.Art is available for appreciating in the shadows of building and trees.
          </p>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default ThesisProject;
