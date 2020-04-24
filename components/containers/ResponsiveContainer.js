/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import {
  Responsive,
  Segment,
  Container,
  Grid,
  Header,
  List
} from 'semantic-ui-react';
import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';

const getWidth = () => {
  const isSSR = typeof window === 'undefined';
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const MainFooter = () => (
  <Segment inverted vertical style={{ padding: '3em 0em' }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Services" />
            <List link inverted>
              <List.Item as="a">FAQ</List.Item>
              <List.Item as="a">About the Toefl</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={6}>
            <Header inverted as="h4" content="Contacts" />
            <List link inverted>
              <List.Item as="a">
                <b>Email:</b>
                <p>info@mrtoefl.com</p>
              </List.Item>
              <List.Item as="a">
                <b>Headquarters Cochabamba, Bolivia:</b>
                <p>+000 000-0000</p>
              </List.Item>
              <List.Item as="a">
                <b>Headquarters Miami, Florida:</b>
                <p>+000 000-0000</p>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header as="h4" inverted>
                Development
            </Header>
            <p>
                dev.vrodriguez@gmail.com
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

const ResponsiveContainer = ({ children, renderHeading }) => (
  <div>
    <Segment style={{ padding: 0, border: 0 }}>
      <DesktopContainer getWidth={getWidth} renderHeading={renderHeading}>{children}</DesktopContainer>
      <MobileContainer getWidth={getWidth} renderHeading={renderHeading}>{children}</MobileContainer>
    </Segment>
    <Segment style={{
      padding: 0,
      border: 0
    }}
    >
      <MainFooter />
    </Segment>
  </div>
);

export default ResponsiveContainer;
