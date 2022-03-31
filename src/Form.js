import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Form = () => {
  const [state, handleSubmit] = useForm('xknyvvlj');
  if (state.succeeded) {
    return <p>Thanks for messaging. I will respond to you shortly!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label" htmlFor="full-name">
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
          <ValidationError
            prefix="Full Name"
            field="full-name"
            errors={state.errors}
          />
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor="email">
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
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor="message">
          Message
        </label>
        <div className="control">
          <textarea
            className="textarea is-medium"
            name="message"
            id="message"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
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
          disabled={state.submitting}
        >
          Submit message
        </button>
      </div>
    </form>
  );
};

export default Form;
