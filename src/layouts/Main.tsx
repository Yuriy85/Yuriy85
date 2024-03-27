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
      <Accordion defaultActiveKey={['0', '1', '2', '3']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Web Development</Accordion.Header>
          <Accordion.Body>
            JavaScript | TypeScript | HTML/HTML5 | CSS/CSS3 | SASS/SCSS | Figma | Bootstrap | REST
            API | Webpack/Vite | BEM
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
          <Accordion.Header>Version Control</Accordion.Header>
          <Accordion.Body>Git | GitHub</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Programming Principles</Accordion.Header>
          <Accordion.Body>OOP | KISS | DRY | YAGNI | SOLID</Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <hr />

      <h2 className="fs-3">Experience</h2>
      <Accordion defaultActiveKey={['0', '1', '2']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Frontend Developer / mar 2023 - present</Accordion.Header>
          <Accordion.Body>
            Freelance
            <ul>
              <li>
                Team organization: assigning roles and responsibilities to project participants in
                the field of fire alarm automation. Distributing tasks, ensuring teamwork,
                monitoring project progress, controlling task deadlines, solving emerging problems,
                and eliminating delays.
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Frontend Developer / dec 2022 - sep 2023</Accordion.Header>
          <Accordion.Body>
            RSSchool community
            <ul>
              <li>
                Team organization: assigning roles and responsibilities to project participants in
                the field of fire alarm automation. Distributing tasks, ensuring teamwork,
                monitoring project progress, controlling task deadlines, solving emerging problems,
                and eliminating delays.
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Project Manager / aug 2018 - aug 2022</Accordion.Header>
          <Accordion.Body>
            OOO &quot;Sfera security&quot; Mogilev
            <ul>
              <li>
                Team organization: assigning roles and responsibilities to project participants in
                the field of fire alarm automation. Distributing tasks, ensuring teamwork,
                monitoring project progress, controlling task deadlines, solving emerging problems,
                and eliminating delays.
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
