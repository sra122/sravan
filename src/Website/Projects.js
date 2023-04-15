import React from "react";

function Projects() {
    return (
        <div class="uk-container">
            <br></br>
            <div class="uk-card uk-card-default uk-card-hover uk-grid-collapse uk-child-width-1-2@m uk-margin uk-grid">
                <div class="uk-card-media-left uk-visible@s uk-cover-container" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <img src="/Projects/good_carbon.png" alt="good-carbon" style={{maxWidth:"51%"}} />
                </div>
                <div class="uk-card-media-left uk-hidden@s uk-cover-container" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <img src="/Projects/good_carbon.png" alt="good-carbon" style={{maxWidth:"60%"}} />
                </div>
                <div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title"><span class="uk-button-text">Good Carbon - Blockchain</span></h3>
                        <p>Developing virtual Carbon coins using Blockchain technology by deploying it on Polygon Network.</p>
                        <ul class="uk-text-left">
                            <li>Research on connecting Java with Blockchain network.</li>
                            <li>Developed contracts using the Solidity programming language.</li>
                            <li>Understanding and maintaining the life cycle of Carbon coins.</li>
                            <li>Designed Microservice Architecture to integrate its service units.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="uk-card uk-card-default uk-card-hover uk-grid-collapse uk-child-width-1-2@m uk-margin uk-grid">
                <div class="uk-card-media-left uk-visible@s uk-cover-container" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <img src="/Projects/eu4_digital.jpg" alt="eu4-digital" style={{maxWidth:"59%"}} />
                </div>
                <div class="uk-card-media-left uk-hidden@s uk-cover-container" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <img src="/Projects/eu4_digital.jpg" alt="eu4-digital" style={{maxWidth:"70%", marginTop: "5%"}} />
                </div>
                <div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title"><span class="uk-button-text">Eu4Digital</span></h3>
                        <p>Developing a Cross Border Ecommerce that connects with eBay for countries like Azerbaijan, Georgia and Armenia.</p>
                        <ul class="uk-text-left">
                            <li>Set up a distribution system for collecting data from different sources.</li>
                            <li>Authorizing the user with the eBay system.</li>
                            <li>Handling payment system.</li>
                            <li>Managing the Products and Orders.</li>
                            <li>Deployment services to AWS (EC2) instance using Jenkins.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="uk-card uk-card-default uk-card-hover uk-grid-collapse uk-child-width-1-2@m uk-margin uk-grid">
                <div class="uk-card-media-left uk-cover-container" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <img src="/Projects/porsche.png" alt="porsche" style={{maxWidth:"55%"}} />
                </div>
                <div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title"><span class="uk-button-text">Porsche Digital</span></h3>
                        <p>A marketing campaign for Porsche Digital</p>
                        <ul class="uk-text-left">
                            <li>Extracting the data from GraphQL.</li>
                            <li>Adapting the data according to the Marketing portals.</li>
                            <li>Synchronizing the inventory information.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="uk-card uk-card-default uk-card-hover uk-grid-collapse uk-child-width-1-2@m uk-margin uk-grid">
                <div class="uk-card-media-left uk-cover-container" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <img src="/Projects/ebay.png" alt="ebay" style={{maxWidth:"50%"}} />
                </div>
                <div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title"><span class="uk-button-text">TradeIn</span></h3>
                        <p>Trading in electronic devices within eBay.</p>
                        <ul class="uk-text-left">
                            <li>Develop TradeIn Application within the eBay ecosystem.</li>
                            <li>Integrate external APIs for trade-in calculation for electronic devices.</li>
                            <li>Tracking user activity within the application.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
        </div>
    );
}

export default Projects;