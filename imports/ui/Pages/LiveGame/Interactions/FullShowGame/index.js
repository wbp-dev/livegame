import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  question: PropTypes.string.isRequired,
  hasSubmitted: PropTypes.bool.isRequired,
  submit: PropTypes.func.isRequired,
};

const FullShowGame = ({ question, hasSubmitted, submit }) => (
  <div>
    <h1>FullShowGame</h1>
    <p>Question: {question}</p>
    {hasSubmitted && <p>submitted</p>}

    <button onClick={() => submit('PAUL')}>PAUL</button>
    <button onClick={() => submit('CANDIDATE')}>KANDIDAT</button>
  </div>
);

FullShowGame.propTypes = propTypes;

export default FullShowGame;