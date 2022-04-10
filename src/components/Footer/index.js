import React from 'react';
import { socialMediaLinks } from '../../data';

const Footer = () => {
  return (
    <section className="section contact center-row py-5">
      <ul className="social-media is-flex" style={{ justifyContent: 'center' }}>
        {socialMediaLinks.map((item) => {
          const { url, icon, id, text } = item;
          const isGmail = text === 'gmail';
          return (
            <li key={id}>
              <a
                href={url}
                target="_blank"
                rel={`noreferrer ${isGmail && 'noopener'}`}
              >
                <span className="button icon is-light is-large mr-2">
                  <i>{icon}</i>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Footer;
