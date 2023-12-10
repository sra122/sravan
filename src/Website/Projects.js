import React from "react";
import { useTranslation } from "react-i18next";

function Projects() {
    const { t } = useTranslation();
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
                        <p>{t('good_carbon_description')}</p>
                        <ul class="uk-text-left">
                            <li>{t('good_carbon_point1')}</li>
                            <li>{t('good_carbon_point2')}</li>
                            <li>{t('good_carbon_point3')}</li>
                            <li>{t('good_carbon_point4')}</li>
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
                        <p>{t('eu4_digital_description')}</p>
                        <ul class="uk-text-left">
                            <li>{t('eu4_digital_point1')}</li>
                            <li>{t('eu4_digital_point2')}</li>
                            <li>{t('eu4_digital_point3')}</li>
                            <li>{t('eu4_digital_point4')}</li>
                            <li>{t('eu4_digital_point5')}</li>
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
                        <p>{t('porsche_digital_description')}</p>
                        <ul class="uk-text-left">
                            <li>{t('porsche_digital_point1')}</li>
                            <li>{t('porsche_digital_point2')}</li>
                            <li>{t('porsche_digital_point3')}</li>
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
                        <p>{t('tradein_description')}</p>
                        <ul class="uk-text-left">
                            <li>{t('tradein_point1')}</li>
                            <li>{t('tradein_point2')}</li>
                            <li>{t('tradein_point3')}</li>
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