import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number, select, withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { jsxDecorator } from 'storybook-addon-jsx';

import { Hero } from '../components';

const alignOptions = ['left', 'center', 'right'];

const imagePosOptions = ['left', 'right'];

const gradients = [
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

storiesOf('Components | Hero', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .addDecorator(jsxDecorator)
  .add('Basic', () => (
    <div style={{ padding: '20px', background: '#eee' }}>
      <Hero
        tagline={text('Tagline', 'Presenting to you')}
        title={text('Title', 'SRX - Modern, Responsive UI')}
        paragraph={text(
          'Paragraph',
          'Consistent design focused on improving both User Experience and Developer Experience'
        )}
      />
    </div>
  ))
  .add('w/ Image', () => (
    <div style={{ padding: '20px' }}>
      <Hero
        imagePosition={select('Image Position', imagePosOptions, 'left')}
        align={select('Content Align', alignOptions, 'left')}
        bg={{ gradient: 'ultra-marine' }}
        image={
          <img
            src={text('Image URL', 'https://via.placeholder.com/250')}
            alt="placeholder"
          />
        }
        tagline="Presenting to you"
        title="SRX - Modern, Responsive UI"
        paragraph="Consistent design focused on improving both User Experience and Developer Experience"
      />
    </div>
  ))
  .add('w/ Bg Gradient', () => (
    <div style={{ padding: '20px', background: '#eee' }}>
      <Hero
        bg={{ gradient: select('Linear Gradient', gradients, 'ultra-marine') }}
        tagline="Presenting to you"
        title="SRX - Modern, Responsive UI"
        paragraph="Consistent design focused on improving both User Experience and Developer Experience"
      />
    </div>
  ))
  .add('w/ Bg Image', () => (
    <div style={{ padding: '20px', background: '#eee' }}>
      <Hero
        style={{
          backgroundImage: `url(${text(
            'Image URL',
            'https://picsum.photos/id/1021/800/500'
          )})`,
          backgroundSize: text('Bg Image Size', `cover`),
          backgroundRepeat: text('Bg Image Repeat', `no-repeat`),
          color: text('Text Color', '#fff'),
        }}
        tagline="Presenting to you"
        title="SRX - Modern, Responsive UI"
        paragraph="Consistent design focused on improving both User Experience and Developer Experience"
      />
    </div>
  ))
  .add('Customizable', () => (
    <div style={{ padding: '20px' }}>
      <Hero
        bg={{ gradient: 'yellow' }}
        align={select('Align', alignOptions, 'center')}
        elevation={number('Elevation', 0, numRangeOptions)}
        rounded={number('Rounded Border', 0, numRangeOptions)}
        tagline="Presenting to you"
        title="SRX - Modern, Responsive UI"
        paragraph="Consistent design focused on improving both User Experience and Developer Experience"
      />
    </div>
  ));
