import React from 'react';
import PropTypes from 'prop-types';

import './title.module';

const Title = ({ text }) => pug`
  h1.main-title=text
  `;

Title.propTypes = {
  text: PropTypes.string,
};

export default Title;
