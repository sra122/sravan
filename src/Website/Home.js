import React from "react";
import { SocialIcon } from 'react-social-icons';
import { useTranslation } from "react-i18next";


function Home() {
    const { t } = useTranslation();
    return (
        <div class="uk-container">
            <div class="uk-child-width-expand@s uk-text-center uk-grid">
                <div>
                    <div>
                        <br></br><br></br>
                        <h1>{t('hello')}</h1>
                        <h4>{t('description')}</h4>
                        <div>
                            <SocialIcon url="https://www.linkedin.com/in/sravan-kumar-30862078/" target="_blank" rel="noopener noreferrer"/>
                            <span> </span>
                            <SocialIcon url="https://github.com/sra122" target="_blank" rel="noopener noreferrer"/>
                            <span>     </span>
                            <SocialIcon url="https://medium.com/@sravanece222" target="_blank" rel="noopener noreferrer"/>
                        </div>
                        <br></br>
                        <div>
                            <a class="uk-button uk-button-default uk-border-pill" href="/contact">{t('contactMe')}</a>
                            <span>     </span>
                            <a class="uk-button uk-button-default uk-border-pill" href="/Resume.pdf" download>Resume</a>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="/Home/background_1.png" alt="background"></img>
                </div>
            </div>
            <br></br><br></br>
        </div>
    );
}

export default Home;