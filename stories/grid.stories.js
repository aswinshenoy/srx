import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { number, withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { jsxDecorator } from 'storybook-addon-jsx';

import { Col, Row } from '../components';

const KnobOption = {
  range: true,
  min: 0,
  max: 4,
  step: 1,
};

const WidthOption = {
  range: true,
  min: 1,
  max: 12,
  step: 1,
};

addDecorator(withKnobs);
addDecorator(withA11y);

storiesOf('Layout | Grid', module)
  .addDecorator(jsxDecorator)
  .add('Basic Grid', () => (
    <Row
      p={number('Padding', 2, KnobOption)}
      m={number('Margin', 2, KnobOption)}
      style={{ textAlign: 'center' }}
    >
      <Col width={number('Column Width', 3, WidthOption)}> Col 1</Col>
      <Col width={number('Column Width', 3, WidthOption)}> Col 2</Col>
      <Col width={number('Column Width', 3, WidthOption)}> Col 3</Col>
      <Col width={number('Column Width', 3, WidthOption)}> Col 4</Col>
    </Row>
  ))
  .add('Responsive Grid', () => (
    <Row style={{ textAlign: 'center' }}>
      <Col
        width={[
          number('Extra Small Screen Width', 12, WidthOption),
          number('Small Screen Width', 6, WidthOption),
          number('Medium Screen Width', 4, WidthOption),
          number('Large Screen Width', 3, WidthOption),
          number('Extra Large Screen Width', 2, WidthOption),
        ]}
        style={{ background: '#FFCDD2' }}
      >
        {' '}
        Col 1
      </Col>
      <Col
        width={[
          number('Extra Small Screen Width', 12, WidthOption),
          number('Small Screen Width', 6, WidthOption),
          number('Medium Screen Width', 4, WidthOption),
          number('Large Screen Width', 3, WidthOption),
          number('Extra Large Screen Width', 2, WidthOption),
        ]}
        style={{ background: '#B2EBF2' }}
      >
        {' '}
        Col 2
      </Col>
      <Col
        width={[
          number('Extra Small Screen Width', 12, WidthOption),
          number('Small Screen Width', 6, WidthOption),
          number('Medium Screen Width', 4, WidthOption),
          number('Large Screen Width', 3, WidthOption),
          number('Extra Large Screen Width', 2, WidthOption),
        ]}
        style={{ background: '#DCEDC8' }}
      >
        {' '}
        Col 3
      </Col>
      <Col
        width={[
          number('Extra Small Screen Width', 12, WidthOption),
          number('Small Screen Width', 6, WidthOption),
          number('Medium Screen Width', 4, WidthOption),
          number('Large Screen Width', 3, WidthOption),
          number('Extra Large Screen Width', 2, WidthOption),
        ]}
        style={{ background: '#FFE0B2' }}
      >
        {' '}
        Col 4
      </Col>
    </Row>
  ));
