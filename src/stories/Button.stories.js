import React from 'react';
import Button from '../components/Button';


export default {
  title: 'ATM/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => (
  <>
    <Button {...args[0]} />
    <Button {...args[1]} />
    <Button {...args[2]} />
    <Button {...args[2]} />
  </>
)

export const primary = Template.bind({});
primary.args = [
  {
    size:"sm", 
    text:"default",
    type:"primary",
  },
  {
    size:"md", 
    text:"default",
    type:"primary",
  },
  {
    size:"lg", 
    text:"default",
    type:"primary",
  }
]

export const secondary = Template.bind({});
secondary.args = [
  {
    size:"sm", 
    text:"default",
    type:"secondary",
  },
  {
    size:"md", 
    text:"default",
    type:"secondary",
  },
  {
    size:"lg", 
    text:"default",
    type:"secondary",
  }
]

export const outline = Template.bind({});
outline.args = [
  {
    size:"sm", 
    text:"default",
    type:"outline",
  },
  {
    size:"md", 
    text:"default",
    type:"outline",
  },
  {
    size:"lg", 
    text:"default",
    type:"outline",
  }
]

export const grey = Template.bind({});
grey.args =  [
  {
    size:"sm", 
    text:"default",
    type:"grey",
  },
  {
    size:"md", 
    text:"default",
    type:"grey",
  },
  {
    size:"lg", 
    text:"default",
    type:"grey",
  }
]

