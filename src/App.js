import styled from "styled-components"; 
import Button from "./components/Button";
 

const Container = styled.div`
  width:500px;
  margin: 0 auto; 
  margin-top:100px;

`; 

function App() {

  return (
    <Container>

         <Button 
         size={"sm"}
         text={"버튼명"}
         type={"outline"}
         status
         />
         
         <Button 
         size={"md"}
         text={"버튼명"}
         type={"outline"}
         />
         
         <Button 
         size={"lg"}
         text={"버튼명"}
         type={"outline"}
         />
         <br></br>
         
         <Button 
         size={"sm"}
         text={"버튼명"}
         type={"primary"}
         />
         
         <Button 
         size={"md"}
         text={"버튼명"}
         type={"primary"}
         />
         
         <Button 
         size={"lg"}
         text={"버튼명"}
         type={"primary"}
         />
         
         <br></br>
         
         <Button 
         size={"sm"}
         text={"버튼명"}
         type={"grey"}
         />
         
         <Button 
         size={"md"}
         text={"버튼명"}
         type={"grey"}
         />
         
         <Button 
         size={"lg"}
         text={"버튼명"}
         type={"grey"}
         />
         
         
         <br></br>
         
         <Button 
         size={"sm"}
         text={"버튼명"}
         type={"secondary"}
         />
         
         <Button 
         size={"md"}
         text={"버튼명"}
         type={"secondary"}
         />
         
         <Button 
         size={"lg"}
         text={"버튼명"}
         type={"secondary"}
         />
         
    </Container>
  )

}

export default App;
