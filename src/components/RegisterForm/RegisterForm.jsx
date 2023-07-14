import { useDispatch } from 'react-redux';

import { register } from 'redux/auth/operationsAuth';

import { Form, Label, Container, Title, InfoRegister, Input, Button, CheckboxLabel, Checkbox, CheckboxContainer } from './RegisterForm.styled';


const RegisterForm = () => {
  const dispatch = useDispatch();
  
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
      <Title>Your PhoneBook details</Title>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <InfoRegister>Create your own personal PhoneBook account by completing the form below 👇</InfoRegister>
        <Label>
          Username
          <Input type="text" name="name" placeholder='What is your name?' required />
        </Label>
        <Label>
          Email
          <Input type="email" name="email" placeholder='What is your email address?' required />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" placeholder='Create a password' autocomplete="off" required />
        </Label>
        <CheckboxContainer>
          <Checkbox type="checkbox" required />
          <CheckboxLabel>
            Yes, I agree to the terms and conditions by PhoneBook.
          </CheckboxLabel>
        </CheckboxContainer>
        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );
};

export default RegisterForm; 
