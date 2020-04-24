/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Icon
} from 'semantic-ui-react';
import HomepageHeading from '../HomepageHeading';

class MobileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // handleSidebarHide = () => this.setState({ sidebarOpened: false })

  // handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;
    const { getWidth } = this.props;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as="a" active>
                Home
          </Menu.Item>
          <Menu.Item as="a">Lessons</Menu.Item>
          <Menu.Item as="a">Practice</Menu.Item>
          <Menu.Item as="a">Plans</Menu.Item>
          <Menu.Item as="a">Sign in</Menu.Item>
          <Menu.Item as="a">Sign up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            color="blue"
            textAlign="center"
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" color="blue">
                        Sign in
                  </Button>
                  <Button as="a" color="blue" style={{ marginLeft: '0.5em' }}>
                        Sign up
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

export default MobileContainer;
