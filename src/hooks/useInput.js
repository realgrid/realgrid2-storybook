import {useState} from "react"; 

const useInput = (init="")=>{
    // input 데이터를 다루기 위한 state 값 
    const [value,setValue] = useState(init); 

    // input 태그의 onChange 속성에 넣을 function. onchange 마다 매 state 최신화 
    const onChange =e=>{
        const {
            target :{value} 
        } = e; 
        setValue(value); 
    }
    return {value,onChange,setValue};
}

export default useInput;