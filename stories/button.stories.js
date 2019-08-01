import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, select, withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { jsxDecorator } from 'storybook-addon-jsx';

import { Button } from '../components';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

const colors = ['white', 'blue', 'black', 'red', 'yellow'];

const gradients = [
  null,
  'blue-violet',
  'blue-pink',
  'green',
  'light-blue',
  'light-red',
  'magenta',
  'orange',
  'pink',
  'purple',
  'red',
  'red-pink',
  'ultra-marine',
  'yellow',
];

const numRangeOptions = {
  range: true,
  min: 0,
  max: 4,
  step: 1,
};

storiesOf('Components | Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .addDecorator(jsxDecorator)
  .add('Basic', () => <Button text="Button" />)
  .add('Disabled', () => (
    <Button bg={{ color: 'yellow' }} disabled text="Button" />
  ))
  .add('w/ Color Bg', () => (
    <Button
      bg={{
        color: select('Color', colors, 'yellow'),
        gradient: select('Gradient', gradients, null),
      }}
      text="Button"
      elevation={3}
      rounded={1}
      onHoverInvert={boolean('Invert on Hover', false)}
    />
  ))
  .add('Customizations', () => (
    <Button
      text="Button"
      fullWidth={boolean('Full Width', false)}
      size={select('Size', sizes, 'md')}
      rounded={number('Rounded Border', 4, numRangeOptions)}
      elevation={number('Elevation', 3, numRangeOptions)}
    />
  ));
