import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operationsAuth';
import { Form, Label, Container, Title, Input, Button } from './LogInForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
       <Title>Welcome back</Title>
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <Input type="email" name="email" placeholder='Enter your email'/>
      </Label>
      <Label>
        Password
        <Input type="password" name="password"placeholder='Enter your password' />
      </Label>
      <Button type="submit">Log In</Button>
      </Form>
      </Container>
  );
};
export default LoginForm;