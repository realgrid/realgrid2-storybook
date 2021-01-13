
import React from 'react';
import TermsOfServiceItem from "./TermsOfServiceItem"

export default {
    title:"ATM/TermsOfServiceItem",
    component:TermsOfServiceItem
}

const Template=(args)=>(
        <>
            <TermsOfServiceItem {...args[0]}/>
            <TermsOfServiceItem {...args[1]}/>
            <TermsOfServiceItem {...args[2]}/>
        </>
)

export const checked = Template.bind({});
checked.args = [
    {
        total:true,
        value:true,
        text:"전체 동의",
        color:"#fff",
        setValue:()=>{},
        required:true,
        contentLink:"https://naver.com"
    },
    {
        value:true,
        text:"이용 약관 동의",
        color:"#fff",
        setValue:()=>{},
        required:true,
        contentLink:"https://naver.com"
    },
    {
        value:true,
        text:"마케팅 수신 동의",
        color:"#fff",
        setValue:()=>{},
        required:false,
        contentLink:"https://naver.com"
    }
];


export const Uncheck = Template.bind({});
Uncheck.args = [
    {
        total:true,
        value:false,
        text:"전체 동의",
        color:"#fff",
        setValue:()=>{},
        required:true,
        contentLink:"https://naver.com"
    },
    {
        value:false,
        text:"이용 약관 동의",
        color:"#fff",
        setValue:()=>{},
        required:true,
        contentLink:"https://naver.com"
    },
    {
        value:false,
        text:"마케팅 수신 동의",
        color:"#fff",
        setValue:()=>{},
        required:false,
        contentLink:"https://naver.com"
    }
];
