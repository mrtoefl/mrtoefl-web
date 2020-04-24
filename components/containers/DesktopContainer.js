/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react';
import Link from 'next/link';
import HomepageHeading from '../HomepageHeading';
import { useUser } from '../../lib/hooks';

const SignInSignUpSection = ({user, updateUser}) => {
  if(user) {
    const {name, email} = user;
    const logout = async () => {
      await fetch('/api/auth', {
        method: 'DELETE',
      });
      // set the user state to null
      updateUser(null);
    };
    return (
      <Menu.Item position="right">
        <Link href="">
          <p>{name}, {email}    </p>
        </Link>
        <Button secondary compact size="small" onClick={logout}>Log Out</Button>
      </Menu.Item>
    );
  } else {
    return (
      <Menu.Item position="right">
        <Link href="/signin" as="/signin">
          <Button as="a" color="blue">
                Sign in
          </Button>
        </Link>
        <Link href="/signup" as="/signup">
          <Button as="a" style={{ marginLeft: '0.5em' }}>
                Sign up
          </Button>
        </Link>
      </Menu.Item>
    );
  }
};

const DesktopContainer = ({children, getWidth, renderHeading }) => {
  
  const [fixed, setFixed] = useState(false);
  const [user, {mutate}] = useUser();
  const height = renderHeading ? 550 : 80;

  const hideFixedMenu = () => {
    setFixed(false);
  }

  const showFixedMenu = () => {
    setFixed(true);
  }

  return (
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <Visibility
        once={false}
        onBottomPassed={showFixedMenu}
        onBottomPassedReverse={hideFixedMenu}
      >
        <Segment
          inverted
          color="blue"
          textAlign="center"
          style={{ minHeight: height, padding: '1em 0em' }}
          vertical
        >
          <Menu
            inverted
            color='blue'
            fixed={fixed ? 'top' : null}
            secondary
            size="large"
          >
            <Container>
              <Menu.Item active>
                <Link href="/index" as="/">
                  <a>Home</a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/courses/courseone" as="/courses/courseone">
                  <a>Course</a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/lesson" as="/lesson">
                  <a>Lesson</a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="" as="">
                  <a>Plans</a>
                </Link>
              </Menu.Item>
              <SignInSignUpSection user={user} updateUser={mutate}/>
            </Container>
          </Menu>
          <HomepageHeading renderHeading={renderHeading} />
        </Segment>
      </Visibility>

      {children}
    </Responsive>
  );
};

export default DesktopContainer;
