import React from 'react';
import ReactVivus from 'react-vivus';
import svg from './hi.svg';
import sravan from './sravan_1.svg';
import software from './SoftwareDeveloper.svg';

const MyComponent = () => (
    <div class="uk-container">
        <div class="uk-child-width-expand@s uk-text-center uk-grid">
            <div>
            <br></br><br></br>
            <br></br><br></br>
            <ReactVivus
                id="foo"
                option={{
                file: svg,
                type: 'delayed',
                animTimingFunction: 'EASE',
                duration: 300,
                onReady: console.log
                }}
                style={{ height: '3%', width: '9%' }}
            />
            <br></br>
            <br></br>
            <ReactVivus
                id="foo1"
                option={{
                file: sravan,
                type: 'delayed',
                animTimingFunction: 'EASE',
                duration: 700,
                onReady: console.log
                }}
                style={{ height: '3%', width: '50%' }}
            />
            <br></br>
            <br></br>
            <ReactVivus
                id="foo2"
                option={{
                file: software,
                type: 'delayed',
                animTimingFunction: 'EASE',
                duration: 1200,
                onReady: console.log
                }}
                style={{ height: 'auto', width: '50%' }}
            />

            </div>
            <div>
                <img class="uk-border-pill" src="./Sra1.JPG" width="200" height="200" alt="Border circle" />
            </div>
        </div>
        
    </div>
);
export default MyComponent;