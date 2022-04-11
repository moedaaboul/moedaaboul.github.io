import React from 'react';
import { socialMediaLinks } from '../../data';
import Form from '../../components/Form';
import './index.css';

const Contact = () => {
  return (
    <section className="section contact center-row mt-5">
      <div className="container hero is-fullheight">
        <section className="columns is-8 is-variabler">
          <section className="column is-half-tablet is-three-fifths-desktop has-text-left">
            <div className="label">
              <h3 className="title is-2">Contact Me</h3>
            </div>
            <ul className="social-media is-flex">
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
          <section className="column is-half-tablet is-two-fifths-desktop has-text-left">
            <Form />
          </section>
        </section>
      </div>
    </section>
  );
};

export default Contact;
