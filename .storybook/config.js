import { addParameters, configure } from '@storybook/react';
import '@storybook/addon-console';
import { create } from '@storybook/theming';

addParameters({
  backgrounds: [
    { name: 'Yellow', value: '#ffc107' },
    { name: 'Red', value: '#a4123f' },
    { name: 'Dark Grey', value: '#333' },
  ],
  options: {
    name: 'SRX React UI Library',
    theme: create({
      base: 'light',
      brandTitle: 'Rivivo SRX UI Library',
    }),
  },
});

function loadStories() {
  require('../stories/storybook-stories.js');
}

configure(loadStories, module);
