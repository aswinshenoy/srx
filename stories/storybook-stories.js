import React from 'react';
import { addDecorator, configure } from '@storybook/react';

const req = require.context('../stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => (
  <div style={{ padding: '20px', background: '#eee' }}>{story()}</div>
));

configure(loadStories, module);
