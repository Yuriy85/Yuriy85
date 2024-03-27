import { photo } from '../assets/img';
import {
  efIcon,
  gitIcon,
  homeIcon,
  inIcon,
  mailIcon,
  phoneIcon,
  reactIcon,
  rsIcon,
  skypeIcon,
  tgIcon,
} from '../assets/svg';
import { Image } from 'react-bootstrap';

interface Props {
  isDarkTheme: boolean;
  setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

function Aside({ isDarkTheme, setIsDarkTheme }: Props) {
  return (
    <div className={isDarkTheme ? 'aside' : 'aside aside--light'}>
      <section className="aside__title">
        <h1 className="fs-2 mb-0 text-light text-center">
          Yuriy Panteleev
          <Image
            className="aside__icon ms-2"
            title="Change theme"
            width={50}
            src={reactIcon}
            onClick={() => setIsDarkTheme(!isDarkTheme)}
          />
        </h1>

        <p className="fs-4 text-light text-center">Frontend developer</p>
        <Image className="mx-auto" width={190} src={photo} roundedCircle />
        <hr className="text-light" />
      </section>

      <section className="aside__skills">
        <h2 className="fs-3 text-light">Main skills</h2>
        <p className="fs-5 text-light mb-0">JS | TS | React | Redux</p>
        <hr className="text-light" />
      </section>

      <section className="aside__contacts">
        <h2 className="fs-3 text-light">Contacts</h2>
        <div className="aside__contacts-wrapper">
          <p className="fs-5 text-light m-0 text-decoration-none">
            <Image className="me-2 mb-2" src={homeIcon} width={25} />
            Belarus / Mogilev
          </p>
          <a
            href="tel:+375296362751"
            className="fs-5 text-light text-decoration-none"
            target="blank"
          >
            <Image className="me-2 mb-2" src={phoneIcon} width={25} />
            +375 29 636 27 51
          </a>
          <a
            href="https://www.linkedin.com/in/yuriy-panteleev-9666532b0/"
            className="fs-5 text-light text-decoration-none"
            target="blank"
          >
            <Image className="me-2 mb-2" src={inIcon} width={25} />
            Linkedin
          </a>
          <a
            href="https://t.me/Yuriy8585"
            className="fs-5 text-light text-decoration-none"
            target="blank"
          >
            <Image className="me-2 mb-2" src={tgIcon} width={25} />
            @Yuriy8585
          </a>
          <a
            href="https://github.com/Yuriy85"
            className="fs-5 text-light text-decoration-none"
            target="blank"
          >
            <Image className="me-2 mb-2" src={gitIcon} width={25} />
            Yuriy85
          </a>
          <a
            href="mailto:yurik8585@gmail.com"
            className="fs-5 text-light text-decoration-none"
            target="blank"
          >
            <Image className="me-2 mb-2" src={mailIcon} width={25} />
            yurik8585@gmail.com
          </a>
          <a
            href="skype:live:.cid.13a0b3ff00679ed3?chat"
            className="fs-5 text-light text-decoration-none"
            target="blank"
          >
            <Image className="me-2 mb-2" src={skypeIcon} width={25} />
            Skype
          </a>
        </div>
        <hr className="text-light" />
      </section>

      <section className="aside__educations">
        <h2 className="fs-3 text-light">Educations</h2>
        <p className="fs-5 text-light mb-0">
          2007 - Mogilev state university of food | automation engineer
        </p>
        <hr className="text-light" />
      </section>

      <section className="aside__courses">
        <h2 className="fs-3 text-light">Courses</h2>
        <p className="fs-5 text-light mb-0">2022 - The Rolling Scopes - JS / FRONT-END PRE</p>
        <p className="fs-5 text-light mb-0">2023 - The Rolling Scopes - JS / FRONT-END</p>
        <p className="fs-5 text-light mb-0">2023 - The Rolling Scopes - REACT</p>
        <hr className="text-light" />
      </section>

      <section className="aside__languages">
        <h2 className="fs-3 text-light">Languages</h2>
        <p className="fs-5 text-light mb-0">English: B1 | BY/RU: native</p>
        <hr className="text-light" />
      </section>

      <section className="aside__certifications">
        <h2 className="fs-3 text-light">Certifications</h2>
        <div className="aside__certifications-wrapper">
          <a
            href="https://app.rs.school/certificate/if3kp7q1"
            className="link fs-5 text-light text-decoration-none"
            target="blank"
          >
            <Image className="me-2 mb-2" src={rsIcon} height={25} />
            JS/Front-end Pre
          </a>
          <a
            href="https://app.rs.school/certificate/m9udt2et"
            className="fs-5 text-light text-decoration-none"
            target="blank"
          >
            <Image className="me-2 mb-2" src={rsIcon} height={25} />
            JS/Front-end
          </a>
          <a
            href="https://cert.efset.org/5ndhc6"
            className="fs-5 text-light text-decoration-none"
            target="blank"
          >
            <Image className="me-2 mb-2" src={efIcon} height={20} />
            English: B1
          </a>
        </div>
        <hr className="text-light" />
      </section>
    </div>
  );
}

export default Aside;
