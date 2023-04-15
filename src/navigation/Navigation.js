import "./Navigation.css"
import React  from 'react';


function Navigation() {
  return (
    <div style={{background: "white"}}>
    <nav class="uk-navbar-container uk-container" uk-navbar="mode: click" style={{background: "white"}}>
            <div class="uk-navbar-left">
                <a class="uk-navbar-item uk-logo uk-visible@m" href="/" aria-label="Back to Home">Sravan Kumar</a>
                <a class="uk-navbar-item uk-logo uk-hidden@m" href="/" aria-label="Back to Home">Sravan Kumar</a>
            </div>
            <div class="uk-navbar-right uk-visible@l">
                <ul class="uk-navbar-nav">
                    <li><a href="/skills">Skills</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/experience">Experience</a></li>
                    <li><a href="/acheivements">Acheivements</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <div class="uk-navbar-right uk-hidden@l">
                <ul class="uk-navbar-nav">
                    <li>
                        <a class="uk-navbar-toggle uk-navbar-toggle-animate" uk-navbar-toggle-icon>
                            <span uk-navbar-toggle-icon uk-icon="menu"></span> <span class="uk-margin-small-left">Menu</span>
                        </a>
                        <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                <li><a href="/skills">Skills</a></li>
                                <li><a href="/projects">Projects</a></li>
                                <li><a href="/experience">Experience</a></li>
                                <li><a href="/acheivements">Acheivements</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  );
}

export default Navigation;
