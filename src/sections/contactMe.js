import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBAnimation,
  MDBInput,
  MDBBtn,
} from "mdbreact";
import Typing from 'react-typing-animation';

const ContactMe = () => {
  return (
    <section id="contactMe" className="section">
      <MDBContainer>
        <Typing speed={100} cursor={null}>
            <h1 className="sectionTitle">Contact Me</h1>
        </Typing>
        <MDBRow>
          <MDBCol lg="5" md="5" sm="12">
            <MDBAnimation type="fadeInUp" duration="1200ms" delay="500ms">
              <h2 className="location-h2">
                <MDBIcon icon="map-marker" />
                <span className="distinct-color"> Tehran, </span>Iran
              </h2>
            </MDBAnimation>
            <MDBAnimation type="fadeInUp" duration="1200ms" delay="1500ms">
              <h4 className="email-h4">
                <a className="aTag" href="mailto:monaseyf25@gmail.com">
                  <MDBIcon icon="at" />
                  <span>
                    {" "}
                    Monaseyf25<span className="distinct-color">@</span>gmail.com
                  </span>
                </a>
              </h4>
            </MDBAnimation>
            <MDBAnimation type="fadeInUp" duration="1200ms" delay="2500ms">
              <h4 className="phone-h4">
                <a className="aTag" href="tel:+ 98 935 436 5170">
                  <MDBIcon icon="phone" />
                  <span>
                    {" "}
                    <span className="distinct-color">+98</span> 935 436 5170
                  </span>
                </a>
              </h4>
            </MDBAnimation>
          </MDBCol>

          <MDBCol lg="7" md="7" sm="12" className="contactForm">
            <MDBAnimation type="fadeInDown" duration="1800ms" delay="3500ms">
              <MDBRow>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="text"
                      id="form-contact-name"
                      label="Name *"
                      autocomplete="off"
                    />
                  </div>
                </MDBCol>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="email"
                      id="form-contact-email *"
                      label="Email *"
                      autocomplete="off"
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12" lg="12" sm="12">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="text"
                      id="form-contact-email *"
                      label="Subject (Optional)"
                      autocomplete="off"
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="textarea"
                      id="form-contact-message"
                      label="Message *"
                      rows="5"
                    />
                    <MDBBtn
                      block
                      className="sendBtn"
                      type="submit"
                      color="send"
                    >
                      <MDBIcon icon="paper-plane" />
                    </MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBAnimation>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default ContactMe;
