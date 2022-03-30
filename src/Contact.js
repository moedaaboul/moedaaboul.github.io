import React from 'react';
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaStackOverflow,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="section contact center-row py-5" id="contact">
      <div className="container hero is-fullheight">
        <section className="columns is-8 is-variable">
          <section className="column is-half-tablet is-three-fifths-desktop has-text-left">
            <div className="label" id="portfolio">
              <h3 className="title is-2">Contact Me</h3>
            </div>
            {/* <p className="is-size-4 label">
              Please get in touch with anything JavaScript.
            </p> */}
            <ul className="social-media is-flex">
              <li>
                <a
                  href="https://www.linkedin.com/in/m-d-027032228/"
                  target="_blank"
                >
                  <span className="button icon is-light is-large mr-2">
                    <i>
                      <FaLinkedin />
                    </i>
                  </span>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/mdaaboul3" target="_blank">
                  <span className="button icon is-light is-large mr-2">
                    <i>
                      <FaTwitter />
                    </i>
                  </span>
                </a>
              </li>
              <li>
                <a href="https://github.com/moedaaboul" target="_blank">
                  <span className="button icon is-light is-large mr-2">
                    <i>
                      <FaGithub />
                    </i>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.com/users/14984871/m-daaboul"
                  target="_blank"
                >
                  <span className="button icon is-light is-large mr-2">
                    <i>
                      <FaStackOverflow />
                    </i>
                  </span>
                </a>
              </li>
            </ul>
          </section>
          <section className="column is-half-tablet is-two-fifths-desktop has-text-left">
            <form action="https://formspree.io/f/xpzbznng" method="POST">
              <div className="field">
                <label className="label" for="full-name">
                  Name
                </label>
                <div className="control">
                  <input
                    className="input is-medium"
                    id="full-name"
                    type="text"
                    name="full-name"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label" for="email">
                  Your Email
                </label>
                <div className="control">
                  <p className="control has-icons-left has-icons-right">
                    <input
                      className="input"
                      name="email"
                      type="email"
                      id="email"
                      placeholder="Email"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </p>
                </div>
              </div>
              <div className="field">
                <label className="label" for="message">
                  Message
                </label>
                <div className="control">
                  <textarea
                    className="textarea is-medium"
                    name="message"
                    id="message"
                  ></textarea>
                </div>
              </div>
              <div className="control">
                <button
                  type="submit"
                  className="
                    submit
                    button
                    is-link is-fullwidth
                    has-text-weight-medium
                    is-medium is-success
                  "
                >
                  Submit message
                </button>
              </div>
            </form>
          </section>
        </section>
      </div>
    </section>
  );
};

export default Contact;
