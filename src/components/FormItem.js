import React from 'react';


const FormItem = ({
    ko,
    idfor,
    type,
    value,
    onChange,
    placeholder,
    required,
    auth
}) =>{

    switch (type) {
        case "email":
            return (
                <>
                    <label for={idfor}>{ko}<b>{required===true?"*":""}</b></label>
                    <input type={type} id={idfor} value={value} onChange={onChange} placeholder={placeholder} />
                </>
            )
        case "password": // 비밀번호, 휴대폰번호
            return (
                <>
                    <label for={idfor}>{ko}</label>
                    <input type={type} id={idfor} value={value} onChange={onChange} placeholder={placeholder} />
                </>
            )
        case "text":
            return (
            <>
                <label for={idfor}>{ko}</label>
                <input type={type} id={idfor} value={value} onChange={onChange} placeholder={placeholder} />
            </>
            )
        case "option":
        case "radio":

    }
}

export default FormItem;