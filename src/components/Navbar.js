import React from 'react';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">\
        <div className="d-flex align-items-center">
          <a className="navbar-brand" href="#">{props.title}</a>
          <a
            className={`nav-link active ms-3 text-${props.mode === 'light' ? 'dark' : 'white'}`}
            aria-current="page"
            href="#"
          >
            Home
          </a>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} ms-auto`}>
            <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}
