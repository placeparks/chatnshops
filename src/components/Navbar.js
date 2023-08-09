import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const handlesignup = () => {
    navigate('/signup');
  }
  const handlelogin = () => {
    navigate('/login');
  }
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top"> {/* Added fixed-top for sticky navbar */}
      <div className="container-fluid" style={{ padding: '0 7%' }}> {/* Moved padding to the inner container */}
        <img src="https://chatnshops.com/assets/img/logos/cns-logo-2.png" width="150" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 ">
            <li className="nav-item" style={{ marginRight: '15px' }}>
              <a className="nav-link" aria-current="page" href="/">
                ChatnShops
              </a>
            </li>
              <li className="nav-item" style={{ marginRight: '15px' }}>
                         <a className="nav-link" href="/#about">
                 About Us
                </a>
              </li>
              <li className="nav-item" style={{ marginRight: '15px' }}>
                <a className="nav-link" href="/#pricing">
                 Package
                </a>
              </li>
              <li className="nav-item" style={{ marginRight: '15px' }}>
                <a className="nav-link" href="/#blog">
               Message
                </a>
              </li>
              <li className="nav-item" style={{ marginRight: '15px' }}>
                <a className="nav-link" onClick={handlelogin}>
              Login
                </a>
              </li>
              <li className="nav-item">
          <button className='btn btn-primary' type='btn' onClick={handlesignup}>Apply For Services</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
