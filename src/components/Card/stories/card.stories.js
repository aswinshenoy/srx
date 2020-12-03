import React from 'react';

import Card from '../index';
import StoryPreviewContainer from '../../../utils/StoryPreviewContainer';

export default {
  title: 'Elements/Card',
  component: Card,
  argTypes: {
    theme: { control: { type: 'select', options: ['dark', 'light', 'color'] } },
    bg: { control: 'color' },
    color: { control: 'color' },
    p: { control: { type: 'range', min: 0, max: 5, step: 1 } },
    m: { control: { type: 'range', min: 0, max: 5, step: 1 } },
    shadow: { control: { type: 'range', min: 1, max: 3, step: 1 } },
    px: { control: { type: 'range', min: 0, max: 5, step: 1 } },
    py: { control: { type: 'range', min: 0, max: 5, step: 1 } },
    mx: { control: { type: 'range', min: 0, max: 5, step: 1 } },
    my: { control: { type: 'range', min: 0, max: 5, step: 1 } },
    round: { control: { type: 'range', min: 0, max: 5, step: 1 } },
  },
};

const Template = args => {
  return (
    <StoryPreviewContainer theme={args.theme}>
      <Card {...args} />
    </StoryPreviewContainer>
  );
};

export const SimpleCard = Template.bind({});
SimpleCard.args = {
  children: (
    <div>
      <h4 className="mb-2">A Simple Card</h4>
      <p className="mb-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt dui non luctus vehicula. Aenean
        dictum, augue et fermentum luctus, velit mi fringilla urna, sed tempor elit metus ut sapien.
      </p>
    </div>
  ),
  theme: 'dark',
  p: 3,
  px: null,
  py: null,
  round: 2,
  shadow: 2,
};
SimpleCard.storyName = 'Card';
