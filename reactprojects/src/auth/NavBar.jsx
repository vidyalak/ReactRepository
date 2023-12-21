import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div>
                <section className="mainSection">
                    <nav className="navbar navbar-expand-lg navbar-dark navbar-login shadow-5-strong">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">Dance App</a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-mdb-toggle="collapse"
                                data-mdb-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <i className="fas fa-bars"></i>
                            </button>
                           
                        </div>
                    </nav>
                </section>
            </div>
        );
    }
}

export default NavBar;
