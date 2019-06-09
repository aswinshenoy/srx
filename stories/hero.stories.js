import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { number, select, withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { jsxDecorator } from 'storybook-addon-jsx';

import { Hero } from '../components';

const options = {
  left: "left",
  center: "center",
  right: "right"
};

const gradients = [
  "blue-violet",
  "blue-pink",
  "green",
  "light-blue",
  "light-red",
  "magenta",
  "orange",
  "pink",
  "purple",
  "red",
  "red-pink",
  "ultra-marine",
  "yellow",
];

const elevationOption = {
  range: true,
  min: 0,
  max: 4,
  step: 1,
};


storiesOf('Components | Hero', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .addDecorator(jsxDecorator)
  .add('Basic Hero', () => (
    <div style={{padding: "20px"}}>
      <Hero
          bg={{gradient: select("Linear Gradient", gradients, "ultra-marine")}}
          align={select("Align", options, "center")}
          elevation={number('Elevation', 0, elevationOption)}
          tagline="Presenting to you"
          title="SRX - Modern, Responsive UI"
          paragraph="Consistent design focused on improving both User Experience and Developer Experience"
      />
    </div>
  ));