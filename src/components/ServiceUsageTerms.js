import useTerms from "../hooks/useTerms";
import TermsOfServiceItem from "./TermsOfServiceItem";
 


function ServiceUsageTerms() {

  const total = useTerms("전체 동의",true);
  const usage = useTerms("이용 약관 동의",true,"https://naver.com");
  const personalInfo = useTerms("개인정보 취급방침 동의",true,"https://naver.com");
  const marketting = useTerms("마케팅 수신 동의",false);

  const checkAll = (val)=>{
    total.setValue(val!==true?true:false);
    usage.setValue(val!==true?true:false);
    personalInfo.setValue(val!==true?true:false);
    marketting.setValue(val!==true?true:false);
  }
  
  return (
      <>
      <TermsOfServiceItem total checkAll={checkAll} {...total} />
      <TermsOfServiceItem {...usage}/>
      <TermsOfServiceItem {...personalInfo}/>
      <TermsOfServiceItem {...marketting}/>
    </>
  )

}

export default ServiceUsageTerms;
