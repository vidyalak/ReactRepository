import React, { Component } from 'react';
import Logo from './Logo';
import Menu from './Menu';


class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false, // Flag to track if the page has been scrolled
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { scrolled } = this.state;
    if (!scrolled && window.pageYOffset > 0) {
      // If page is scrolled and the navbar color hasn't changed yet
      this.setState({ scrolled: true });
    } else if (scrolled && window.pageYOffset === 0) {
      // If page is at the top and the navbar color has changed
      this.setState({ scrolled: false });
    }
  };

  render() {
    const { scrolled } = this.state;
    const navbarClassName = `navbar fixed-top nav-scroll navbar-expand-lg ${scrolled ? 'scrolled' : ''}`;

    return (
      <div>
        <div>
          <nav className={navbarClassName}>
            <div className="container-fluid justify-content-between">
              <Logo />
              <Menu />
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;
