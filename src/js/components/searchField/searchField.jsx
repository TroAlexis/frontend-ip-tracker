import React from 'react';
import PropTypes from 'prop-types';

import './searchField.module';

const SearchField = ({ placeholder, clickHandler, className }) => pug`
  .search-field(className=className)
    input.search-field__input(type="text" placeholder=placeholder)
    button.search-field__button(type="button" onClick=clickHandler)
  `;

SearchField.propTypes = {
  placeholder: PropTypes.string,
  clickHandler: PropTypes.func,
  className: PropTypes.string,
};

export default SearchField;
