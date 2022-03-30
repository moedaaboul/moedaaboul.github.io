import React from 'react';

const Form = () => {
  return (
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
  );
};

export default Form;
