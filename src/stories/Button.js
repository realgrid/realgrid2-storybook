import React from 'react';
import styled from "styled-components";

const size= {
    sm:{
        height:"36px",
        fontSize:"12px",
        padding:"8px 20px"
    },
    md:{
        height:"48px",
        fontSize:"14px",
        padding:"13px 20px"
    },
    lg:{
        height:"56px",
        fontSize:"18px",
        padding:"15px 20px"
    }
};
const type={
    primary:{
        backgroundColor:"#00cec9",
        textColor:"#fff"
    },
    secondary:{
        backgroundColor:"#004f4e",
        textColor:"#fff"
    },
    outline:{
        backgroundColor:"#fff",
        border:"1px solid #c1c1c1",
        textColor:"#c1c1c1"
    },
    grey:{
        backgroundColor:"#c1c1c1",
        textColor:"#fff"
    }
}

const status={
    default:{
        backgroundColor:"#00cec9",
    },
    hover:{
        backgroundColor:"#00b5b2"
    },
    focus:{
        backgroundColor:"#00b5b2"
    },
    loading:{
        backgroundColor:"#00cec9"

    },
    disabled:{
        backgroundColor:"#c0f3f2"
    }
}

const Btn= styled.button`
    height:${props=>size[props.size].height};
    padding:${props=>size[props.size].padding}; 
    font-size:${props=>size[props.size].fontSize};
    background-color:${props=>type[props.type].backgroundColor};
    color:${props=>type[props.type].textColor};
    border:none;
        /* background-color:${props=>status[props.status].backgroundColor};  */
    border:${props=>type[props.type].border?type[props.type].border:""};
    border-radius: 4px;
    outline:none;

    &:hover{
        background-color:${status.hover.backgroundColor}; 
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
    }

    &:focus{
        background-color:${status.focus.backgroundColor}; 
        border: 2px solid #00cec9;
        /* border: 2px solid white; */
    }
    &:disabled{
        background-color:${status.disabled.backgroundColor}; 
    }

    &:left{
        background-color:red;
    }
`; 



const Button = ({
    size="sm", 
    text="default",
    type="primary",
    status="default",
    onSubmit,
}) => (
    <Btn 
    onSubmit={onSubmit}
    size={size}
    type={type}
    >
        {text}
    </Btn>
    );

export default Button;

