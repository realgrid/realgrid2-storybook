import React from 'react';
import styled from "styled-components"; 
import {CheckIcon} from "./SvgIcon" 

const Container = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    cursor: pointer;
`;

const Text = styled.span`
    flex-grow:1;
    font-size:14px;
    margin-left:10px;
    color:${props=>props.color};
`;

const ToContent = styled.a`
    font-size:12px;
    z-index:10;
    color:black;
`; 

const TermsOfServiceItem = ({
    total,
    value,
    setValue, 
    text,
    required,
    contentLink,
    checkAll
}) =>{
    console.log(checkAll);
    
    return (
        <Container onClick={()=>total?checkAll(value):setValue(prev=>!prev)}>
            <CheckIcon value={value} size={24} backgroundColor= {value?"#00cec9":"#fff"} borderRadius={50}/>
            <Text>{text}{total?"":required?" (필수)":" (선택)"}</Text>
            {total?"":required?<ToContent href={contentLink}>내용 보기</ToContent>:<></>}
        </Container>
    );
}

export default TermsOfServiceItem;