import React from 'react'

const Layout = (props) => {
    return (
        <div>
            <nav className="blue-grey darken-2">
                <div className="nav-wrapper">
                <a href="#!" class="brand-logo center">Starwars</a>
                
                </div>
            </nav>
            <div>
                {props.children}
            </div>
        </div>
        
    )
}

export default Layout