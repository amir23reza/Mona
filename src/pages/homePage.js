import React from 'react'
import Nav from '../components/nav'
import ContactMe from '../sections/contactMe'
import Welcome from '../sections/welcome'

const HomePage = () => {
    return(
        <div>
            <Nav />
            <Welcome />
            <ContactMe />
        </div>
    )
}

export default HomePage