import React, {useEffect, useState} from 'react';
import {
  Message,
  Header,
  Segment,
  Form,
  Button,
  Grid,
  Image
} from 'semantic-ui-react';
import { useRouter } from 'next/router';
import { useUser } from '../lib/hooks';

const SignInLayout = () => {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState('');
  const [user, { mutate }] = useUser();
  useEffect(() => {
    // redirect to home if user is authenticated
    if (user) router.replace('/');
  }, [user]);

  async function onSubmit(e) {
    e.preventDefault();
    const body = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (res.status === 200) {
      const userObj = await res.json();
      mutate(userObj);
    } else {
      setErrorMsg('Incorrect username or password. Try again!');
    }
  }
return (
  <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" color="blue" textAlign="center">
        <Image src="../img/logo-small.png" style={{ padding: '5px' }} /> Log-in to your account
      </Header>
      <Form size="large" onSubmit={onSubmit}>
        <Segment stacked>
          <Form.Input id="email" fluid icon="user" iconPosition="left" placeholder="E-mail address" />
          <Form.Input
            id="password"
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />

          <Button type="submit" color="red" fluid size="large">Login</Button>
        </Segment>
      </Form>
      <Message>New to us? 
        <a href="#"> Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
);
};

export default function SignIn() {
  return (
    <SignInLayout />
  );
}