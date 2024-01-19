import React from 'react'
import { Link } from 'react-router-dom'

function Back() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link to="/"> <span className="h1">
                    <i className="fa fa-angle-left color-dark"></i>
                </span>
                </Link>

            </div>
        </nav>
    )
}
export default Back