import React from 'react';
import { render } from 'react-dom';

import App from 'Components/App/App';

const wrapper = document.querySelector('.root');

render(pug`App`, wrapper);

if (module.hot) {
  module.hot.accept();
}
