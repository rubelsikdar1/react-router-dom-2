import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="header-navbar">
        <>
          {/* Navbar */}
          <nav className="navbar navbar-expand-lg bg-info navbar-dark">
            {/* Container wrapper */}
            <div className="container">
              {/* Navbar brand */}
              <a className="navbar-brand" href="#">
                Brand
              </a>
              {/* Icons */}
              <ul className="navbar-nav d-flex flex-row me-1">
                <li className="nav-item me-3 me-lg-0">
                  <Link className="nav-link text-white" to="">
                    <i className="fas fa-envelope mx-1" /> Home
                  </Link>
                </li>
                <li className="nav-item me-3 me-lg-0">
                  <Link className="nav-link text-white" to="about">
                    <i className="fas fa-envelope mx-1" /> About
                  </Link>
                </li>
                <li className="nav-item me-3 me-lg-0">
                  <Link className="nav-link text-white" to="contact">
                    <i className="fas fa-cog mx-1" /> Contact
                  </Link>
                </li>
                <li className="nav-item me-3 me-lg-0">
                  <Link className="nav-link text-white" to="api">
                    <i className="fas fa-cog mx-1" /> Api Data
                  </Link>
                </li>
                <li className="nav-item me-3 me-lg-0">
                  <Link className="nav-link text-white" to="service">
                    <i className="fas fa-cog mx-1" /> Service
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-white"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {" "}
                    <i className="fas fa-user mx-1" /> Profile{" "}
                  </a>
                  {/* Dropdown menu */}
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        My account
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Log out
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* Container wrapper */}
          </nav>
          {/* Navbar */}
        </>
      </div>
    </div>
  );
};

export default Navbar;
