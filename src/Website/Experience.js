import React from "react";
import { useTranslation } from "react-i18next";

function Projects() {
    const { t } = useTranslation();
    return (
        <div class="uk-container">
            <br></br>
            <br></br>
            <div class="uk-child-width-1-1">
                <div>
                    <div class="uk-card uk-card-default uk-card-hover">
                        <div class="uk-card-media-top uk-visible@s">
                            <img src="/Experience/concept-reply.png" alt="" style={{width: "30%", maxWidth: "25%"}}/>
                        </div>
                        <div class="uk-card-media-top uk-hidden@s">
                            <img src="/Experience/concept-reply.png" alt="" style={{width: "50%", maxWidth: "50%"}}/>
                        </div>
                        <div class="uk-card-body">
                            <h3><span class="uk-button-text">IOT {t('developer')}</span></h3>
                            <h5 class="uk-margin-remove">Feb 2023 - {t('tillnow')}</h5>
                            <p>{t('conceptreply_description')}</p>
                            <ul class="uk-text-left">
                                <li>{t('conceptreply_point1')}</li>
                                <li>{t('conceptreply_point2')}</li>
                                <li>{t('conceptreply_point3')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div>
                    <div class="uk-card uk-card-default uk-card-hover">
                        <div class="uk-card-media-top uk-visible@s">
                            <img src="/Experience/iways.png" alt="" style={{width: "30%", maxWidth: "25%"}}/>
                        </div>
                        <div class="uk-card-media-top uk-hidden@s">
                            <img src="/Experience/iways.png" alt="" style={{width: "50%", maxWidth: "50%"}}/>
                        </div>
                        <div class="uk-card-body">
                            <h3><span class="uk-button-text">Senior Software {t('developer')}/ Full Stack {t('developer')} (Java / PHP / Blockchain)</span></h3>
                            <h5 class="uk-margin-remove">March 2019 - Jan 2023</h5>
                            <p>{t('iways_fulltime_description')}</p>
                            <ul class="uk-text-left">
                                <li>{t('iways_fulltime_point1')}</li>
                                <li>{t('iways_fulltime_point2')}</li>
                                <li>{t('iways_fulltime_point3')}</li>
                                <li>{t('iways_fulltime_point4')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div>
                    <div class="uk-card uk-card-default uk-card-hover">
                    <div class="uk-card-media-top uk-visible@s">
                            <img src="/Experience/iways.png" alt="" style={{width: "30%", maxWidth: "25%"}}/>
                        </div>
                        <div class="uk-card-media-top uk-hidden@s">
                            <img src="/Experience/iways.png" alt="" style={{width: "50%", maxWidth: "50%"}}/>
                        </div>
                        <div class="uk-card-body">
                            <h3><span class="uk-button-text">{t('workstudent')} - Software {t('developer')}</span></h3>
                            <h5 class="uk-margin-remove">Nov 2017 - March 2019</h5>
                            <p>{t('iways_werkstudent_description')}</p>
                            <ul class="uk-text-left">
                                <li>{t('iways_werkstudent_point1')}</li>
                                <li>{t('iways_werkstudent_point2')}</li>
                                <li>{t('iways_werkstudent_point3')}</li>
                                <li>{t('iways_werkstudent_point4')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div>
                    <div class="uk-card uk-card-default uk-card-hover">
                        <div class="uk-card-media-top uk-visible@s">
                            <img src="/Experience/influry.png" alt="" style={{width: "30%", maxWidth: "30%"}}/>
                        </div>
                        <div class="uk-card-media-top uk-hidden@s">
                            <img src="/Experience/influry.png" alt="" style={{width: "50%", maxWidth: "50%"}}/>
                        </div>
                        <div class="uk-card-body">
                            <h3><span class="uk-button-text">Internship - Software {t('developer')}</span></h3>
                            <h5 class="uk-margin-remove">May 2017 - Aug 2017</h5>
                            <p>{t('influry_internship_description')}</p>
                            <ul class="uk-text-left">
                                <li>{t('influry_internship_point1')}</li>
                                <li>{t('influry_internship_point2')}</li>
                                <li>{t('influry_internship_point3')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div>
                    <div class="uk-card uk-card-default uk-card-hover">
                        <div class="uk-card-media-top">
                            <img src="/Experience/igate.png" alt="" />
                        </div>
                        <div class="uk-card-body">
                            <h3><span class="uk-button-text">Software {t('developer')}</span></h3>
                            <h5 class="uk-margin-remove">June 2014 - Aug 2015</h5>
                            <p>{t('igate_description')}</p>
                            <ul class="uk-text-left">
                                <li>{t('igate_point1')}</li>
                                <li>{t('igate_point2')}</li>
                            </ul>
                        </div>
                    </div>
                </div>            
            </div>
            <br></br>
            <br></br>
        </div>
    );
}

export default Projects;