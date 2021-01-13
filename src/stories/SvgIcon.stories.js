
import React from 'react';
import {CheckIcon} from "./SvgIcon"

export default {
    title:"ATM/SvgIcon",
    component:CheckIcon
}

const Template=(args)=><CheckIcon {...args}/>


export const Unchecked = Template.bind({});
Unchecked.args = {
    value:false,
    size:24,
    backgroundColor:"#fff",
    borderRadius:50
};

export const Checked = Template.bind({});
Checked.args = {
    value:true,
    size:24,
    backgroundColor:"#00cec9",
    borderRadius:50
};