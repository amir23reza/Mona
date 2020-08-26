import React from 'react'
import Typing from 'react-typing-animation'
import { MDBContainer, MDBCard, MDBRow, MDBCol, MDBIcon } from 'mdbreact'

const Testimonials = () => {
    return (
        <section id="testimonials" className="section">
            <Typing speed={100} cursor={null}>
                <h1 className="sectionTitle">Testimonials</h1>
            </Typing>
            <MDBContainer>
                <MDBRow>
                    <MDBCol lg="4" md="4" sm="12">
                        <MDBCard className="testimonials_card">
                            <div className="avatarContainer">
                                <img className="avatar" src={require("../images/avatar.jpg")} />
                            </div>
                            <div className="testimonial_card_content">
                                <p className="Testimonials_fullName">
                                    Mahdi Taheri
                                </p>
                                <p className="Testimonials_position">
                                    CEO of Rayan Pajouh Salamat
                                </p>
                                <div className="testimonials_devider" />
                                <MDBIcon icon="quote-left" className="testimonials_icon" />
                                <p className="testimonials_quote">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <MDBIcon icon="quote-right" className="testimonials_icon" />
                            </div>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="4" md="4" sm="12">
                        <MDBCard className="testimonials_card">
                            <div className="avatarContainer">
                                <img className="avatar" src={require("../images/avatar.jpg")} />
                            </div>
                            <div className="testimonial_card_content">
                                <p className="Testimonials_fullName">
                                    Mahdi Taheri
                                </p>
                                <p className="Testimonials_position">
                                    CEO of Rayan Pajouh Salamat
                                </p>
                                <div className="testimonials_devider" />
                                <MDBIcon icon="quote-left" className="testimonials_icon" />
                                <p className="testimonials_quote">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <MDBIcon icon="quote-right" className="testimonials_icon" />
                            </div>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="4" md="4" sm="12">
                        <MDBCard className="testimonials_card">
                            <div className="avatarContainer">
                                <img className="avatar" src={require("../images/avatar.jpg")} />
                            </div>
                            <div className="testimonial_card_content">
                                <p className="Testimonials_fullName">
                                    Mahdi Taheri
                                </p>
                                <p className="Testimonials_position">
                                    CEO of Rayan Pajouh Salamat
                                </p>
                                <div className="testimonials_devider" />
                                <MDBIcon icon="quote-left" className="testimonials_icon" />
                                <p className="testimonials_quote">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <MDBIcon icon="quote-right" className="testimonials_icon" />
                            </div>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    )
}

export default Testimonials;