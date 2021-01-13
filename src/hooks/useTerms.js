import {useState} from "react"; 

const useTerms = (t,req,link)=>{
    const [value,setValue] = useState(false); 
    const required = req?true:false;     
    const contentLink=link?link:undefined;
    const text = t;
    return {value,setValue,required,contentLink,text};
}

export default useTerms;