/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import {
  Container,
  Header,
  Segment,
  Grid
} from 'semantic-ui-react';
import ResponsiveContainer from '../components/containers/ResponsiveContainer';
import {
  RegularLessonNav,
  LessonTabs,
  LessonTab,
  LessonMenuButton
} from '../components/lesson/lessonComponents';

const textTabMenuItem = value => ({ key: value, icon: 'file text', content: value });

const videoTabMenuItem = value => ({ key: value, icon: 'film', content: value });

const less1content = () => (
  <Container text style={{ height: '500px' }}>
    <Header as="h2">Lesson 1 Overview</Header>
    <Header as="h4">Part One</Header>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nasceturridiculus mus.
    </p>
    <Header as="h4">Part Two</Header>
    <p>
      Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nasceturridiculus mus.
    </p>
    <Header as="h4">Part Three</Header>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      <ul>
        <li>Aenean massa strong.</li>
        <li>Aenean commodo ligula eget dolor.</li>
      </ul>
    </p>
  </Container>
);

const less2content = () => (
  <Container text style={{ minHeight: '300px' }}>
    <Header as="h2">Lesson 2 Overview</Header>
    <Header as="h4">Part One</Header>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      <ul>
        <li>Aenean massa strong.</li>
        <li>Aenean commodo ligula eget dolor.</li>
      </ul>
    </p>
    <Header as="h4">Part Three</Header>
    <p>
      Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nasceturridiculus mus.
    </p>
  </Container>
);

const lesson1 = {
  title: 'Lesson One',
  description: 'In this lesson you will learn the basics',
  panes: [
    {
      menuItem: textTabMenuItem('Lesson 1 Overview'),
      render: () => <LessonTab tabType="text" content={less1content()} />
    },
    {
      menuItem: videoTabMenuItem('Video Lesson'),
      render: () => <LessonTab tabType="video" content={{ title: 'Video Lesson 1:', videoId: '188171839' }} />
    }
  ]
};

const lesson2 = {
  title: 'Lesson Two',
  description: 'Intermediate lesson with two videos',
  panes: [
    {
      menuItem: textTabMenuItem('Lesson 2 Overview'),
      render: () => <LessonTab tabType="text" content={less2content()} />
    },
    {
      menuItem: videoTabMenuItem('Video Lesson: Part I'),
      render: () => <LessonTab tabType="video" content={{ title: 'Video Lesson 2 - Part I:', videoId: '114900089' }} />
    },
    {
      menuItem: videoTabMenuItem('Video Lesson: Part II'),
      render: () => <LessonTab tabType="video" content={{ title: 'Video Lesson 2 - Part II:', videoId: '188171839' }} />
    }
  ]
};

const lesson3 = {
  title: 'Lesson Three',
  description: 'Course conclusions',
  panes: [
    {
      menuItem: textTabMenuItem('Lesson 3 Overview'),
      render: () => <LessonTab tabType="text" content={less1content()} />
    },
    {
      menuItem: videoTabMenuItem('Video Lesson: Conclusion'),
      render: () => <LessonTab tabType="video" content={{ title: 'Video Lesson 3 - Conclusion:', videoId: '114900089' }} />
    }
  ]
};

const lessonsArray = [lesson1, lesson2, lesson3];

class LessonClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lessonIndex: 0,
      lessonsList: props.lessonsList,
      lesson: props.lessonsList[0]
    };
    this.nextLesson = this.nextLesson.bind(this);
    this.prevLesson = this.prevLesson.bind(this);
  }

  nextLesson() {
    if (this.state.lessonIndex < this.state.lessonsList.length - 1) {
      this.setState(state => ({ lesson: state.lessonsList[state.lessonIndex + 1], lessonIndex: state.lessonIndex + 1 }));
    }
  }

  prevLesson() {
    if (this.state.lessonIndex > 0) {
      this.setState(state => ({ lesson: state.lessonsList[state.lessonIndex - 1], lessonIndex: state.lessonIndex - 1 }));
    }
  }

  render() {
    const { lesson } = this.state;
    return (
      <Container style={{ paddingTop: '1em' }}>
        <Segment.Group raised>
          <Segment vertical padded secondary>
            <Grid container columns={3}>
              <Grid.Row stretched>
                <Grid.Column width={1} style={{ paddingRight: 0 }}>
                  <LessonMenuButton />
                </Grid.Column>
                <Grid.Column width={2}>
                  <RegularLessonNav direction="left" navFunc={this.prevLesson} />
                </Grid.Column>
                <Grid.Column width={11} inverted color="red" verticalAlign="middle" style={{ borderRadius: 5 }}>
                  <Header inverted as="h2">
                    <b>{lesson.title}</b>
                    <Header.Subheader>{lesson.description}</Header.Subheader>
                  </Header>
                </Grid.Column>
                <Grid.Column width={2}>
                  <RegularLessonNav direction="right" navFunc={this.nextLesson} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <Segment vertical secondary style={{ border: 0 }}>
            <LessonTabs lesson={lesson} />
          </Segment>
        </Segment.Group>
      </Container>
    );
  }
}

export default function Lessons() {
  return (
    <ResponsiveContainer renderHeading={false}>
      <LessonClass lessonsList={lessonsArray} />
    </ResponsiveContainer>
  );
}
