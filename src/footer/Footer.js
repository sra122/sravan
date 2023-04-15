import React from "react";

function Footer() {
    return (
        <div class="uk-position-bottom uk-position-relative uk-overlay uk-overlay-default uk-text-center uk-container-fluid uk-position-z-index" style={{backgroundColor: "whitesmoke", padding: "0 100px", position: "relative !important"}}>
            <ul class="uk-navbar-nav">
                <li><a href="/impressum">Impressum</a></li>
                <li><a href="/datenschutz">Datenschutz</a></li>
            </ul>
        </div> 
    );
}

export default Footer;