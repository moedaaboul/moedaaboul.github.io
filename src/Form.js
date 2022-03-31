import React, { useState, useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';

import { validateEmail } from './utils/helpers';

const Form = () => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [state, handleSubmit] = useForm('xknyvvlj');
  const [errorMessage, setErrorMessage] = useState('');
  const isFirstRun = useRef(0);

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'full-name') {
      setUserName(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue);
    }
  };

  // useEffect(() => {
  //   if (isFirstRender) {
  //     console.log(isFirstRender);
  //     setisFirstRender(false);
  //     return;
  //   } else if (email && !validateEmail(email)) {
  //     setErrorMessage('Email does not match format criteria');
  //     return;
  //   } else if (!userName) {
  //     setErrorMessage('Username should not be empty');
  //     return;
  //   } else if (!message) {
  //     setErrorMessage('Message should not be empty');
  //     return;
  //   }
  // }, [email, userName, message]);

  useEffect(() => {
    if (isFirstRun.current < 3) {
      isFirstRun.current++;
      return;
    } else if (email && !validateEmail(email)) {
      setErrorMessage('Email does not match format criteria');
      return;
    }
  }, [email]);

  useEffect(() => {
    if (isFirstRun.current < 3) {
      isFirstRun.current++;
      return;
    } else if (!message) {
      setErrorMessage('Message should not be empty');
      return;
    }
  }, [message]);

  useEffect(() => {
    if (isFirstRun.current < 3) {
      isFirstRun.current++;
      return;
    } else if (!userName) {
      setErrorMessage('Username should not be empty');
      return;
    }
  }, [userName]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setErrorMessage('');
    }, 5000);
    return () => clearTimeout(timeout);
  }, [errorMessage]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label" htmlFor="full-name">
            Name
          </label>
          <div className="control">
            <input
              value={userName}
              onChange={handleInputChange}
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
                value={email}
                onChange={handleInputChange}
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
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor="message">
            Message
          </label>
          <div className="control">
            <textarea
              className="textarea is-medium"
              value={message}
              onChange={handleInputChange}
              name="message"
              id="message"
              required
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
            className={`
                    submit
                    button
                    ${state.submitting && `is-loading`}
                    is-link is-fullwidth
                    has-text-weight-medium
                    is-medium is-success
                  `}
            disabled={state.submitting}
          >
            Submit message
          </button>
        </div>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      {state.succeeded && (
        <div>
          <p>Thanks for messaging. I will respond to you shortly!</p>;
        </div>
      )}
    </>
  );
};

export default Form;
