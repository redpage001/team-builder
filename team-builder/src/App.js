import React, {useState} from 'react';
import './App.css';
import Form from "./components/Form";
import styled from "styled-components";

const Container = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: steelblue;
  padding: 20px 0;
  height: 100vh;
`;

const initialUsers = [
  {userName: "Manuel", userEmail: "redpage001@yahoo.com", userRoll: "FrontEnd",},
  {userName: "Timmy", userEmail: "Timmy@yahoo.com", userRoll: "BackEnd",}
]

function App() {
  const [user, setUser] = useState(initialUsers)
  const [formValues, setFormValues] = useState({ 
    userName: "", 
    userEmail: "", 
    userRoll: "",
  })

  const onImputChange = event => {
    const imputThatChanged = event.target.name
    const newValueforImput = event.target.value

    setFormValues({
      ...formValues,
      [imputThatChanged]: newValueforImput,
    })
  }

  const onSubmitForm = event => {
    event.preventDefault()
    const newUsers = {
      userName: formValues.userName,
      userEmail: formValues.userEmail,
      userRoll: formValues.userRoll,
    }

    // if ((formValues.userName == Number(formValues.userName)) ||
    //     (formValues.userEmail == Number(formValues.userEmail)) ||
    //     (formValues.userRoll == Number(formValues.userRoll)))
    //   {
    //     return alert('No Numbers!')
    //   } else {
    //     setUser([
    //       ...user, newUsers
    //     ])
    //   }  
      setUser([
        ...user, newUsers
      ])
    }
    

  return (
    <Container>
    <Form
      onImputChange = {onImputChange}
      formValues = {formValues}
      onSubmitForm = {onSubmitForm}
    />

    <h3>List of Users:</h3>
    {
      user.map((user, index) => <div key={index}>{user.userName} {user.userEmail} {user.userRoll}</div>)
    }
    </Container>
  );
}

export default App;
