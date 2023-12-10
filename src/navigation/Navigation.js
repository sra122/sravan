import "./Navigation.css"
import React  from 'react';
import { useTranslation } from "react-i18next";

function Navigation() {
  const { t, i18n } = useTranslation();
  const changeLanguageHandler = (e) => {
    const lang = e.target.value
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", e.target.value);
  }
  return (
    <div style={{background: "white"}}>
    <nav class="uk-navbar-container uk-container" uk-navbar="mode: click" style={{background: "white"}}>
            <div class="uk-navbar-left">
                <a class="uk-navbar-item uk-logo uk-visible@m" href="/" aria-label="Back to Home"><img class="uk-width-1-2" src="/logo.png"></img></a>
                <a class="uk-navbar-item uk-logo uk-hidden@m" href="/" aria-label="Back to Home"><img class="uk-position-center-left uk-width-1-2" src="/logo.png"></img></a>
            </div>
            <div class="uk-navbar-right uk-visible@l">
                <ul class="uk-navbar-nav">
                    <li><a href="/skills">{t('skill')}</a></li>
                    <li><a href="/projects">{t('projects')}</a></li>
                    <li><a href="/experience">{t('experience')}</a></li>
                    <li><a href="/acheivements">{t('achievements')}</a></li>
                    <li><a href="/contact">{t('contact')}</a></li>
                </ul>
                <select class="uk-select" style={{width: 50}} aria-label="Select" onChange={changeLanguageHandler} value={i18n.language}>
                    <option value="en">🇺🇸&emsp;</option>
                    <option value="de">🇩🇪&emsp;</option>
                </select>
            </div>
            <div class="uk-navbar-right uk-hidden@l">
                <ul class="uk-navbar-nav">
                    <li>
                        <a class="uk-navbar-toggle uk-navbar-toggle-animate" uk-navbar-toggle-icon>
                            <span uk-navbar-toggle-icon uk-icon="menu"></span> <span class="uk-margin-small-left">Menu</span>
                        </a>
                        <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                <li><a href="/skills">{t('skill')}</a></li>
                                <li><a href="/projects">{t('projects')}</a></li>
                                <li><a href="/experience">{t('experience')}</a></li>
                                <li><a href="/acheivements">{t('achievements')}</a></li>
                                <li><a href="/contact">{t('contact')}</a></li>
                            </ul>
                            <select class="uk-select" style={{width: 50}} aria-label="Select" onChange={changeLanguageHandler} value={i18n.language}>
                                <option value="en">🇺🇸&emsp;</option>
                                <option value="de">🇩🇪&emsp;</option>
                            </select>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  );
}

export default Navigation;
