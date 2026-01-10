import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
            <div className="container">

                {/* Logo */}
                <NavLink to="/" className="navbar-brand d-flex align-items-center gap-2">
                    <img
                        src="/logo.png"
                        alt="Shivshakti Computer Academy"
                        height="36"
                    />
                    <span className="fw-bold text-dark d-none d-sm-inline">
                        Shivshakti Computer Academy
                    </span>
                </NavLink>

                {/* Toggle */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu */}
                <div className="collapse navbar-collapse" id="mainNavbar">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-1">

                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">
                                About
                            </NavLink>
                        </li>

                        {/* Courses Dropdown */}
                        <li className="nav-item dropdown">
                            <span
                                className="nav-link dropdown-toggle"
                                role="button"
                                data-bs-toggle="dropdown"
                            >
                                Courses
                            </span>
                            <ul className="dropdown-menu">
                                <li>
                                    <NavLink to="/courses" className="dropdown-item">
                                        All Courses
                                    </NavLink>
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <NavLink to="/courses/dca" className="dropdown-item">
                                        DCA
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/courses/adca" className="dropdown-item">
                                        ADCA
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/courses/tally" className="dropdown-item">
                                        Tally
                                    </NavLink>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/manyatain" className="nav-link">
                                Manyatain
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/gallery" className="nav-link">
                                Gallery
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/certificate-verify" className="nav-link">
                                Verify Certificate
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link">
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>

                    {/* Right Buttons */}
                    <div className="d-flex gap-2">
                        <NavLink to="/enquiry" className="btn btn-primary btn-sm">
                            Enquiry
                        </NavLink>
                        <NavLink to="/registration" className="btn btn-outline-primary btn-sm">
                            Register
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
