import styled from "styled-components"; 

const Container = styled.div`
    width:${props=>`${props.size}px`};
    height:${props=>`${props.size}px`};
    background-color:${props=>props.backgroundColor};
    border-radius:${props=>`${props.borderRadius}px`};
    border:none;
`;


export const CheckIcon=({
    size=24, 
    value=false,
    backgroundColor="#fff",
    borderRadius=0 
})=>{
    return (
        <Container size={size} backgroundColor={backgroundColor} borderRadius={borderRadius}>
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none"  xmlns="http://www.w3.org/2000/svg">
                <path d="M19 7L9.66665 17L5 12" stroke={value?"#fff":"#000"} stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </Container>
    )

}