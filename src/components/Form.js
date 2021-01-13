import { select } from '@storybook/addon-knobs';
import React,{useState} from 'react';
import useInput from '../hooks/useInput';
import FormItem from './FormItem';
import styled from "styled-components";

const Forms = styled.form`
    display:flex;
    flex-direction:column;
`;


const Form = ({}) =>{
    const email = useInput(""); 
    const password = useInput("")
    const passwordCheck  = useInput("")
    const firstName  = useInput("")
    const lastName  = useInput("")
    const phonenumber  = useInput("")
    const route = useInput("")
    const job  = useInput("")
    const gender  = useInput("")

    // return {value,onChange,setValue};


    // 유형 1 이메일, 비밀번호, 비밀번호 확인 
    // 컴포넌트에 
    // props으로 
    // normal
    // type = normal, name, option,radio 
    // placeholder = string or string[] 
    // required = boolean 
    // options = string[] 
    // jobs = string[] 

    return (
        <Form>
            {/* <FormItem />  */}
            <FormItem 
            ko={"이메일"}
            idfor={"email"}
            type={"email"}
            value={email.value}
            onChange={email.onChange}
            placeholder={"이메일을 입력해주세요."}
            required
            />
            
            <FormItem 
            ko={"비밀번호"}
            idfor={"password"}
            type={"password"}
            value={email.value}
            onChange={email.onChange}
            placeholder={"영문, 숫자, 특수문자 포함 8자 이상으로 입력해주세요/"}
            required
            />
            
            <FormItem 
            ko={"비밀번호 확인"}
            idfor={"passwordCheck"}
            type={"password"}
            value={email.value}
            onChange={email.onChange}
            placeholder={"비밀번호를 한번 더 입력해주세요."}
            required
            />
            
            <FormItem 
            ko={"이름"}
            idfor={"name"}
            type={"text"}
            value={email.value}
            onChange={email.onChange}

            
            placeholder={"이름을 입력해주세요."}
            required
            />
            
        </Form>
    );
    
}



export default Form;