import React, { useState, useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaEnvelope, FaCheck, FaUser } from 'react-icons/fa';

import { validateEmail } from '../../utils/Validators';

const Form = () => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [state, handleSubmit] = useForm('xknyvvlj');
  const [errorMessage, setErrorMessage] = useState('');
  const [isEmailSuccess, setisEmailSuccess] = useState(false);
  const isFirstRun = useRef(true);

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

  useEffect(() => {
    isFirstRun.current = true;
  }, []);

  useEffect(() => {
    if (isFirstRun.current === true) {
      isFirstRun.current = false;
      return;
    } else if ((email && !validateEmail(email)) || !email) {
      setErrorMessage('Email does not match format criteria');
      setisEmailSuccess(false);
      return;
    } else if (email && validateEmail(email)) {
      setErrorMessage('');
      setisEmailSuccess(true);
      return;
    }
  }, [email]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setErrorMessage('');
    }, 3000);
    return () => clearTimeout(timeout);
  }, [errorMessage]);

  const onUsernameBlur = () => {
    if (!userName) {
      setErrorMessage('Username should not be empty');
      return;
    }
  };

  const onEmailBlur = () => {
    if (!email) {
      setErrorMessage('Email should not be empty');
      return;
    }
  };

  const onMessageBlur = () => {
    if (!message) {
      setErrorMessage('Message should not be empty');
      return;
    }
  };

  if (state.succeeded) {
    return (
      <div>
        <p className="help is-success is-size-4">
          Thanks for messaging. I will respond to you shortly!
        </p>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label" htmlFor="full-name">
            Name
          </label>
          <div className="control has-icons-left has-icons-right">
            <input
              value={userName}
              onChange={handleInputChange}
              className="input is-medium"
              id="full-name"
              type="text"
              name="full-name"
              onBlur={onUsernameBlur}
              required
            />
            <span className="icon is-small is-left">
              <FaUser />
            </span>
            <span className="icon is-small is-right">
              <i>{userName && <FaCheck />}</i>
            </span>
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
                onBlur={onEmailBlur}
                name="email"
                type="email"
                id="email"
                placeholder="Email"
                required
              />
              <span className="icon is-small is-left">
                <FaEnvelope />
              </span>
              <span className="icon is-small is-right">
                <i>{isEmailSuccess && <FaCheck />}</i>
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
          <div className="control has-icons-left has-icons-right">
            <textarea
              className="textarea is-medium"
              value={message}
              onChange={handleInputChange}
              onBlur={onMessageBlur}
              name="message"
              id="message"
              placeholder="Text area"
              required
            ></textarea>
            <span className="icon is-small is-right">
              <i>{message && <FaCheck />}</i>
            </span>
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
          <p className="help is-white is-size-4">{errorMessage}</p>
        </div>
      )}
    </>
  );
};

export default Form;
