import React from "react";
import styled from "styled-components";

const FormDiv = styled.div `
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin: 5px 0;
`;

const FormLabel = styled.label `
font-size: 1.5rem;
color: white;
`;

const FormInput = styled.input `
width: 200px;
height: 20px;
color: black;
margin: 0 5px;
`;

const Button = styled.input `

`;

const Form = (props) => {
return (
    <form onSubmit={props.onSubmitForm}>
        <FormDiv>
        <FormLabel>Username:
            <FormInput
                onChange = {props.onImputChange}
                value = {props.formValues.userName}
                name = "userName"
                type = "text"
                pattern = "[A-Za-z]{4,}"
            >
            </FormInput>
        </FormLabel>
        </FormDiv>

        <FormDiv>
        <FormLabel>Email:
            <FormInput
                onChange = {props.onImputChange}
                value = {props.formValues.userEmail}
                name = "userEmail"
                type = "text"
                pattern = "[A-Za-z]{4,}"
            >
            </FormInput>
        </FormLabel>
        </FormDiv>
        
        <FormDiv>
        <FormLabel>Role:
            <FormInput
                onChange = {props.onImputChange}
                value = {props.formValues.userRoll}
                name = "userRoll"
                type = "text"
                pattern = "[A-Za-z]{4,}"
            >
            </FormInput>
        </FormLabel>
        </FormDiv>
        
        <input type='submit' />
        
    </form>
)

}

export default Form;