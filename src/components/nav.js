import React from 'react'
import { MDBNavbar,MDBNavbarBrand } from 'mdbreact'
import { BrowserRouter as Router } from 'react-router-dom';
import {
  Link , Element
} from 'react-scroll';
import { elastic as Menu } from 'react-burger-menu'

const Nav = () => {
    return (
        <div>
            <header>
                <Router id="outer-container">
                    <MDBNavbar color="myNavBar" fixed="top" dark scrolling transparent >
                        <MDBNavbarBrand href="/">
                            <img src={require('../images/logo.png')} className="fluid logo_img" alt="logo" />
                        </MDBNavbarBrand>
                            <Menu right  pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }  >
                                {/* <main id="page-wrap"> */}
                                    <a id="home" className="aTag" href="/">Home</a>
                                    <a id="about" className="aTag" href="/about">About</a>
                                    <a id="contact" className="aTag" href="/contact">Contact</a>
                                {/* </main> */}
                            </Menu>
                    </MDBNavbar>
                </Router>
            </header>
        </div>
    )
}

export default Nav;