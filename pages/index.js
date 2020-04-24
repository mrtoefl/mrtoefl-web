/* eslint-disable react/destructuring-assignment */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Segment
} from 'semantic-ui-react';
import ResponsiveContainer from '../components/containers/ResponsiveContainer';

const Homepage = () => (
  <ResponsiveContainer renderHeading>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: '2em' }}>
                Ensure a great performance for the Toefl
            </Header>
            <ul>
              <li>
                <p style={{ fontSize: '1.33em' }}>
                  8 Entire TOEFL Tests for practice
                </p>
              </li>
              <li>
                <p style={{ fontSize: '1.33em' }}>
                  Practice in our brand new TEST PREPARATION MODE
                </p>
              </li>
              <li>
                <p style={{ fontSize: '1.33em' }}>
                  More than 101 countries with MisterToefl.com
                </p>
              </li>
            </ul>
            <Header as="h3" style={{ fontSize: '2em' }}>
                Get custom plans
            </Header>
            <p style={{ fontSize: '1.33em' }}>
                Get what you need with plans you can customize according to your own time and the amount
                of practice you require.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image rounded size="large" src="https://exam-practice.com/wp-content/uploads/2019/11/toefl-logo-600x250-1024x585.jpg" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Button size="huge">See our plans</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Image avatar src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png" style={{ fontSize: '2em' }} />
            <p style={{ fontSize: '1.33em' }}>Lorena</p>
            <Header as="h5" style={{ fontSize: '2em' }}>
                "With MisterToefl I have learned a lot for the test. I have increased my score by 8 points"
            </Header>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as="h5" style={{ fontSize: '2em' }}>
                "MisterToefl has plenty of material available. I have improved my score by 5 points"
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src="https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg" />
            </p>
            <p style={{ fontSize: '1.33em' }}>Mark</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ borderBottom: '0em' }}>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em', paddingLeft: '15em', paddingRight: '15em' }}>
            <Header as="h5" style={{ fontSize: '2em' }}>
                "I really like MisterToefl’s TEST PREPARATION MODE. It is so realistic. I have boosted my score by 12 points"
            </Header>
            <Image avatar src="https://png.pngtree.com/svg/20161217/43a873f79c.svg" style={{ fontSize: '2em' }} />
            <p style={{ fontSize: '1.33em' }}>Sergio</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Divider
      as="h4"
      className="header"
      horizontal
      style={{ margin: '1em 0em', textTransform: 'uppercase' }}
    >
      <a>ADVANTAGES</a>
    </Divider>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: '2em' }}>
            ¿Why use MrToefl?
        </Header>
        <ul>
          <li>
            <p style={{ fontSize: '1.33em' }}>
              Prep anytime from your desktop with our self-study platform
            </p>
          </li>
          <li>
            <p style={{ fontSize: '1.33em' }}>
              You can get 4 speaking questions and 4 writing questions scored by our team of experts with your subscriptions
            </p>
          </li>
          <li>
            <p style={{ fontSize: '1.33em' }}>
              Thousands of timed practice questions
            </p>
          </li>
          <li>
            <p style={{ fontSize: '1.33em' }}>
              Video lessons taught by experts
            </p>
          </li>
          <li>
            <p style={{ fontSize: '1.33em' }}>
              Track your progress
            </p>
          </li>
          <li>
            <p style={{ fontSize: '1.33em' }}>
              Friendly support team
            </p>
          </li>
        </ul>
        <Button as="a" size="large">
            See our Plans
        </Button>
      </Container>
    </Segment>
  </ResponsiveContainer>
);

export default function Main() {
  return (
    <Homepage />
  );
}
