import React, { useState } from 'react'
import { Link } from 'gatsby'
import logo from '../../images/logo.svg'
import { FaCartArrowDown } from 'react-icons/fa'

const links = [
    {
        id: 1,
        path: '/',
        text: 'Home',
    },
    {
        id: 2,
        path: '/about',
        text: 'About',
    },
]

const Navbar = () => {
    const [navbarOpen, setNavbar] = useState(false)
    const [css, setCss] = useState('collapse navbar-collapse')

    const navbarHandler = () => {
        setNavbar(!navbarOpen)
        !navbarOpen
            ? setCss('collapse navbar-collapse show')
            : setCss('collapse navbar-collapse')
    }

    return (
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
            <Link to="/" className="navbar-brand">
                <img src={logo} alt="logo" />
            </Link>
            <button
                type="button"
                onClick={navbarHandler}
                className="navbar-toggler"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className={css}>
                <ul className="navbar-nav mx-auto">
                    {links.map(link => {
                        return (
                            <li className="nav-item" key={link.id}>
                                <Link
                                    to={link.path}
                                    className="nav-link text-capitalize"
                                >
                                    {link.text}
                                </Link>
                            </li>
                        )
                    })}
                    <li className="nav-item ml-sm-5">
                        <FaCartArrowDown className="cart-icon" />
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
