import { useEffect } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skills = [
  { href: '#git_', title: 'Git' },
  { href: '#json_', title: 'JSON' },
  { href: '#solidity_', title: 'Solidity' },
  { href: '#html_', title: 'HTML' },
  { href: '#html_', title: 'CSS' },
  { href: '#react_', title: 'React' },
  { href: '#php_', title: 'PHP 7+' },
  { href: '#java_', title: 'Java' },
  { href: '#java_', title: 'SpringBoot' },
  { href: '#javascript_', title: 'Javascript' },
  { href: '#flutter_', title: 'Flutter' },
  { href: '#angular', title: 'Angular' },
  { href: '#typescript_', title: 'Typescript' },
  { href: '#truffle', title: 'Truffle' },
  { href: '#aws', title: 'AWS' },
  { href: '#mysql', title: 'MySQL' },
  { href: '#postgress', title: 'Postgress' },
  { href: '#mongodb', title: 'MongoDB' },
  { href: '#elasticsearch', title: 'ElasticSearch' },
  { href: '#graphQl', title: 'GraphQL' },
  { href: '#rabbitmq', title: 'RabbitMQ' },
  { href: '#sns', title: 'SNS' },
];

const Skills = ({ ...rest }) => {
  useEffect(() => {
    console.log('Loading TagCanvas...');
    const TagCanvas = window.TagCanvas;
    const tagCanvasOptions = {
      textColour: '#d32c90',
      outlineThickness: 0.9,
      outlineColour: '#d32c90',
      maxSpeed: 0.03,
      freezeActive: true,
      shuffleTags: true,
      shape: 'sphere',
      zoom: 1,
      wheelZoom: false,
      noSelect: true,
      textFont: null,
      freezeDecel: true,
      fadeIn: 0,
      initial: [0.3, -0.1],
      depth: 1,
    };
    try {
      TagCanvas.Start('tagcanvas', 'taglist', tagCanvasOptions);
    } catch (e) {
      console.log('Canvas error.');
      console.log(e);
    }
  }, []);

  return (
    <div class="uk-container">
      <br></br>
      <div class="uk-child-width-expand@m uk-text-center uk-grid">
        <div>
          <canvas
            id='tagcanvas'
            width='1050'
            height='900'
            style={{
              maxWidth: '1000px',
              width: '100%',
              position: 'relative',
              margin: '0 auto',
            }}
            className='to-fade-in fast-anim'
          ></canvas>
          <div id='taglist' style={{ display: 'none' }}>
            <ul>
              {skills.map((skill) => (
                <li key={skill.title}>
                  <a href={skill.href}>{skill.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div class="uk-hidden@m"><br></br><br></br></div>
        </div>

        <div>
          <div class="uk-child-width-expand uk-text-center uk-grid">
            <br></br>
            <div>
              <div>
                <h3>Backend </h3>
              </div>
              <CircularProgressbarWithChildren value={83}>
                <div style={{ fontSize: 12, marginTop: -5 }}>
                  <strong>83%</strong>
                </div>
              </CircularProgressbarWithChildren>
            </div>
            <div>
              <div>
                  <h5>Java </h5>
                </div>
                <CircularProgressbarWithChildren value={85}>
                  <div style={{ fontSize: 12, marginTop: -5 }}>
                    <strong>85%</strong>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            <div>
              <div>
                  <h5>Php </h5>
                </div>
                <CircularProgressbarWithChildren value={80}>
                  <div style={{ fontSize: 12, marginTop: -5 }}>
                    <strong>80%</strong>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
          </div>
          <br></br><br></br><br></br>
          <div class="uk-child-width-expand uk-text-center uk-grid">
            <br></br>
            <br></br>
            <div>
              <div>
                <h3>Frontend </h3>
              </div>
              <CircularProgressbarWithChildren value={60}>
                <div style={{ fontSize: 12, marginTop: -5 }}>
                  <strong>60%</strong>
                </div>
              </CircularProgressbarWithChildren>
            </div>
            <div>
              <div>
                  <h5>Javascript </h5>
                </div>
                <CircularProgressbarWithChildren value={60}>
                  <div style={{ fontSize: 12, marginTop: -5 }}>
                    <strong>60%</strong>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            <div>
              <div>
                  <h5>React </h5>
                </div>
                <CircularProgressbarWithChildren value={60}>
                  <div style={{ fontSize: 12, marginTop: -5 }}>
                    <strong>60%</strong>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
          </div>
      </div>
      </div>
      <br></br><br></br>
    </div>
  );
};

export default Skills;