import React from 'react';
import { Accordion } from 'react-bootstrap';

interface Props {
  isDarkTheme: boolean;
}

function Main({ isDarkTheme }: Props) {
  return (
    <div className={isDarkTheme ? 'main bg-dark' : 'main bg-light'}>
      <h2 className="fs-3">About</h2>
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Hi there!</Accordion.Header>
          <Accordion.Body>
            10+ years I worked in fire protection automation as setup engineer and project manager.
            I switched to frontend development in 2023, completing the RSSchool Frontend course.
            Now, I have over a year of hands-on experiences. <br />
            <br />
            I shifted to frontend development, blending engineering background with new skills, and
            continuously expanding expertise in this exciting field. <br />
            <br />I open to change and a quick learner, able to work both independently and in a
            group, highly responsible, dedicated and motivated.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <hr />

      <h2 className="fs-3">Skills</h2>
      <Accordion defaultActiveKey={['0', '1', '2', '3', '4']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Web Development</Accordion.Header>
          <Accordion.Body>
            JavaScript | TypeScript | HTML/HTML5 | CSS/CSS3 | SASS/SCSS | Figma | Bootstrap | REST
            API | Jest | Webpack/Vite | BEM
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>React</Accordion.Header>
          <Accordion.Body>
            Components | Routing | Context API | Redux | RTK | NextJS | SSR | SSG | Forms | GraphQL
            Client
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>NodeJS</Accordion.Header>
          <Accordion.Body>Basic knowledge</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Version Control</Accordion.Header>
          <Accordion.Body>Git | GitHub</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Programming Principles</Accordion.Header>
          <Accordion.Body>OOP | KISS | DRY | YAGNI | SOLID</Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <hr />

      <h2 className="fs-3">Experience</h2>
      <Accordion defaultActiveKey={['0', '1', '2']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Frontend Developer at Freelance / mar 2023 - present</Accordion.Header>
          <Accordion.Body>
            <a
              href="https://yuriy85.github.io/dima_pdr/"
              className="fs-5 text-decoration-none"
              target="blank"
            >
              PDR project - SPA website
            </a>
            <ul>
              <li>Stack: TS | SCSS | React | Routing | Bootstrap | Vite | Git</li>
              <li>
                Description: The website is made for a paintless dent removal service. Four pages
                have been implemented. Interaction with YouTube through API has been implemented.
                Also, sending messages with photos and videos to the service&apos;s Telegram chatbot
                for price requests has been implemented.
              </li>
            </ul>
            <a
              href="https://valantis-test-project.netlify.app/"
              className="fs-5 text-decoration-none"
              target="blank"
            >
              Valantis project - project for Valantis company
            </a>
            <ul>
              <li>Stack: TS | SCSS | React | Routing | Bootstrap | Vite | Git</li>
              <li>
                Description: The application was created at the request of company Valantis. Data
                exchange with the client server has been implemented, displaying the products,
                sorting the products by multiple parameters simultaneously. Theme customization and
                pagination have also been implemented using React-router...
              </li>
            </ul>
            <a
              href="https://development--pokeberry.netlify.app/"
              className="fs-5 text-decoration-none"
              target="blank"
            >
              Poke Berry project - pet application
            </a>
            <ul>
              <li>
                Stack: TS | SCSS | React | Routing | Context API | Redux | RTK | NextJS | SSR | SSG
                | Forms | Vite | ViteTest | Git
              </li>
              <li>Description: Client - server application.</li>
            </ul>
            <a
              href="https://ecommerce-trueorfalse-sprint4.netlify.app/"
              className="fs-5 text-decoration-none"
              target="blank"
            >
              eCommerce-Application - SPA eCommerce store
            </a>
            <ul>
              <li>Stack: TS | SCSS | Webpack | Jest | husky | Git</li>
              <li>
                Description: SPA application in native TS - is a team project. Validation of login
                and password forms. Implemented searches, sorting, sliders.Interaction with the
                Commercetoolse API server is implemented using the TypeScript SDK library.
              </li>
            </ul>
            <a
              href="https://rolling-scopes-school.github.io/yuriy85-JSFE2023Q1/rs-css/main/"
              className="fs-5 text-decoration-none"
              target="blank"
            >
              RS-CSS project - CSS Selectors learning game
            </a>
            <ul>
              <li>Stack: TS | SCSS | Webpack | Jest | Git</li>
              <li>
                Description: Implemented animation and syntax highlighting. The following features
                have been implemented: navigation through levels, prompting the user, resetting and
                saving the current state of the game in LocalStorage.
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Frontend Developer at RSSchool community / dec 2022 - sep 2023
          </Accordion.Header>
          <Accordion.Body>
            <a
              href="https://yuriy85.github.io/virtual-keyboard/"
              className="fs-5 text-decoration-none"
              target="blank"
            >
              Virtual Keyboard project - keyboard simulator
            </a>
            <ul>
              <li>Stack: JS | HTML5 | CSS3 | Eslint | Git</li>
              <li>
                Description: Implemented pressing a key on the physical keyboard to highlight a key
                on the virtual keyboard, switching the keyboard layout between languages.
              </li>
            </ul>

            <a
              href="https://rolling-scopes-school.github.io/yuriy85-JSFE2023Q1/minesweeper/main/"
              className="fs-5 text-decoration-none"
              target="blank"
            >
              Minesweeper project - game
            </a>
            <ul>
              <li>Stack: JS | HTML5 | CSS3 | Git</li>
              <li>
                Description: The game has the following features: saving the game in LocalStorage,
                resetting progress, changing the theme, adding sound effects, a list of winners, and
                adjusting the number of mines and the size of the playing area.
              </li>
            </ul>

            <a
              href="https://yuriy85.github.io/cssBayan/cssBayan/index.html"
              className="fs-5 text-decoration-none"
              target="blank"
            >
              CSS Bayan project - accordion with HTML and CSS only )
            </a>
            <ul>
              <li>Stack: HTML5 | CSS3 | Git</li>
              <li>
                Description: Implemented visual effects when the cursor is hovering over the memes,
                when the mouse is down on a meme.
              </li>
            </ul>

            <a
              href="https://rolling-scopes-school.github.io/yuriy85-JSFE2023Q1/shelter/"
              className="fs-5 text-decoration-none"
              target="blank"
            >
              Shelter project - website
            </a>
            <ul>
              <li>Stack: JS | HTML5 | CSS3 | Figma | Git</li>
              <li>
                Description: The multipage was designed using a Figma layout using the Pixel Perfect
                approach.
              </li>
            </ul>

            <a
              href="https://rolling-scopes-school.github.io/yuriy85-JSFEPRESCHOOL2022Q4/momentum/"
              className="fs-5 text-decoration-none"
              target="blank"
            >
              Momentum project - clone Google Chrome application
            </a>
            <ul>
              <li>Stack: JS | HTML | CSS | REST API | Git</li>
              <li>
                Description: Implemented its own audio player, weather display using the Weather
                API, the ability to search and set a background image using requests to Unsplash and
                Flicker API or use the background depending on the time of day, the current state of
                the application is saved in LocalStorage, changing the application language. and
                displaying quotes in the current language.
              </li>
            </ul>

            <a
              href="https://rolling-scopes-school.github.io/yuriy85-JSFEPRESCHOOL2022Q4/plants/"
              className="fs-5 text-decoration-none"
              target="blank"
            >
              Plants project - website
            </a>
            <ul>
              <li>Stack: JS | HTML | CSS | Figma | Git</li>
              <li>
                Description: The multipage was designed using a Figma layout using the Pixel Perfect
                approach.
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Project Manager at OOO &quot;Sfera security&quot; / aug 2018 - aug 2022
          </Accordion.Header>
          <Accordion.Body>
            Team organization
            <ul>
              <li>
                assigning roles and responsibilities to project participants in the field of fire
                alarm automation. Distributing tasks, ensuring teamwork, monitoring project
                progress, controlling task deadlines, solving emerging problems, and eliminating
                delays.
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <hr />
    </div>
  );
}

export default Main;
