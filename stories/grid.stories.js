import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { jsxDecorator } from 'storybook-addon-jsx';

import { Col, Row } from '../components';

const paddingOption = {
  range: true,
  min: 0,
  max: 5,
  step: 1,
};

const marginOption = {
  range: true,
  min: -5,
  max: 5,
  step: 1,
};

const widthOption = {
  range: true,
  min: 1,
  max: 12,
  step: 1,
};

const orderOption = {
  range: true,
  min: 1,
  max: 4,
  step: 1,
};

storiesOf('Layout | Grid', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .addDecorator(jsxDecorator)
  .add('Basic Grid', () => (
    <Row
      p={number('Padding', 2, paddingOption)}
      m={number('Margin', 2, marginOption)}
      gutter={number('Gutter', 0, paddingOption)}
      style={{ textAlign: 'center' }}
    >
      <Col width={number('Column Width', 3, widthOption)}> Col 1</Col>
      <Col width={number('Column Width', 3, widthOption)}> Col 2</Col>
      <Col width={number('Column Width', 3, widthOption)}> Col 3</Col>
      <Col width={number('Column Width', 3, widthOption)}> Col 4</Col>
    </Row>
  ))
  .add('Ordered Grid', () => (
    <Row style={{ textAlign: 'center' }}>
      <Col width={3} order={number('Order 1', 4, orderOption)}>
        {' '}
        Col 1
      </Col>
      <Col width={3} order={number('Order 2', 3, orderOption)}>
        {' '}
        Col 2
      </Col>
      <Col width={3} order={number('Order 3', 1, orderOption)}>
        {' '}
        Col 3
      </Col>
      <Col width={3} order={number('Order 4', 2, orderOption)}>
        {' '}
        Col 4
      </Col>
    </Row>
  ))
  .add('Responsive Grid', () => (
    <Row style={{ textAlign: 'center' }}>
      <Col
        width={[
          number('Extra Small Screen Width', 12, widthOption),
          number('Small Screen Width', 6, widthOption),
          number('Medium Screen Width', 4, widthOption),
          number('Large Screen Width', 3, widthOption),
          number('Extra Large Screen Width', 2, widthOption),
        ]}
        style={{ background: '#FFCDD2' }}
      >
        Col 1
      </Col>
      <Col
        width={[
          number('Extra Small Screen Width', 12, widthOption),
          number('Small Screen Width', 6, widthOption),
          number('Medium Screen Width', 4, widthOption),
          number('Large Screen Width', 3, widthOption),
          number('Extra Large Screen Width', 2, widthOption),
        ]}
        style={{ background: '#B2EBF2' }}
      >
        Col 2
      </Col>
      <Col
        width={[
          number('Extra Small Screen Width', 12, widthOption),
          number('Small Screen Width', 6, widthOption),
          number('Medium Screen Width', 4, widthOption),
          number('Large Screen Width', 3, widthOption),
          number('Extra Large Screen Width', 2, widthOption),
        ]}
        style={{ background: '#DCEDC8' }}
      >
        Col 3
      </Col>
      <Col
        width={[
          number('Extra Small Screen Width', 12, widthOption),
          number('Small Screen Width', 6, widthOption),
          number('Medium Screen Width', 4, widthOption),
          number('Large Screen Width', 3, widthOption),
          number('Extra Large Screen Width', 2, widthOption),
        ]}
        style={{ background: '#FFE0B2' }}
      >
        Col 4
      </Col>
    </Row>
  ));
