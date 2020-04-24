/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import {
  Button,
  Container,
  Header,
  Image,
} from 'semantic-ui-react';

const HomepageHeading = ({ mobile, renderHeading }) => {
  if (!renderHeading) {
    return <div />;
  }
  return (
    <Container text>
      <Image
        size="large"
        src="../img/white-logo-small.png"
        style={{ marginLeft: '1.8em' }}
      />
      <Header
        as="h2"
        content="Educación en Inglés Especializada"
        inverted
        style={{
          fontSize: mobile ? '1.5em' : '1.7em',
          fontWeight: 'normal',
          marginTop: mobile ? '0.5em' : '0.5em',
          marginLeft: '-4.8em'
        }}
      />
      <Button color="red" size="huge">
          Start
      </Button>
    </Container>
  );
};

export default HomepageHeading;
