import React from 'react'
import Nav from '../components/nav'
import ContactMe from '../sections/contactMe'
import Welcome from '../sections/welcome'
import Testimonials from '../sections/testimonials'
import Skills from '../sections/skills'
import AboutMe from '../sections/aboutMe'

const HomePage = () => {
    return(
        <div>
            <Nav />
            <AboutMe />
        </div>
    )
}

export default HomePage