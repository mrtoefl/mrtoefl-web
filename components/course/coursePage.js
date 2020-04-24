/* eslint-disable react/no-multi-comp */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Link from 'next/link';
import {
  Container,
  Header,
  Accordion,
  Icon,
  Segment,
  Button
} from 'semantic-ui-react';
import ResponsiveContainer from '../containers/ResponsiveContainer';

const defaultPanels = [
  { 
    key: 'text',
    title: 'Lesson Summary',
    icon: 'file alternate outline',
    content: 'Summary of the selected lesson' },
  {
    key: 'video',
    title: 'Video Lesson',
    icon: 'file video outline',
    content: 'Description of the video'
  },
  {
    key: 'reading',
    title: 'Reading Quiz',
    icon: 'file book outline',
    content: 'Reading Quiz description'
  }
];

const defaultSubLesson = (
  <Accordion.Accordion exclusive panels={defaultPanels} />
);

const lessonsArray = [
  {
    key: 'lessonOne',
    title: 'Lesson One',
    content: 'Lesson One overview and description',
    subLesson: defaultSubLesson,
    lessonUrl: '/lessons/3'
  },
  {
    key: 'lessonTwo',
    title: 'Lesson Two',
    content: 'Lesson Two overview and description',
    subLesson: defaultSubLesson,
    lessonUrl: '/lessons/3'
  },
  {
    key: 'lessonThree',
    title: 'Lesson Three',
    content: 'Lesson Three overview and description',
    subLesson: defaultSubLesson,
    lessonUrl: '/lessons/3'
  }
];

const LessonComp = ({ lesson, activeLessonKey, updateActiveKeyFunc }) => {
  const isActive = lesson.key === activeLessonKey;
  return (
    <Container text>
      <Accordion.Title active={isActive} onClick={() => updateActiveKeyFunc(lesson.key)}>
        <Segment clearing size='large'>
          <Icon name='dropdown' />
          {lesson.title}
          <Link href={lesson.lessonUrl}>
            <Button basic color='teal' floated='right' content='Go' icon='right arrow' labelPosition='right' />
          </Link>
        </Segment>
      </Accordion.Title>
      <Accordion.Content active={isActive}>
        <p style={{ fontSize: '13px', fontStyle: 'italic' }}>{lesson.content}</p>
        {lesson.subLesson}
      </Accordion.Content>
    </Container>
  );
};

const generateLessons = (lessons, activeLessonKey, handleClickFunc) => {
  const lessonComps = [];
  lessons.forEach((lesson) => {
    lessonComps.push(
      <LessonComp lesson={lesson} activeLessonKey={activeLessonKey} updateActiveKeyFunc={handleClickFunc} />
    );
  });
  return (
    <div>
      {lessonComps}
    </div>
  );
};

class LessonsList extends Component {
  constructor(props) {
    super(props);
    this.state = { activeLessonKey: '' };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    const { lessons } = this.props;
    this.setActiveLesson(lessons);
  }

  setActiveLesson(lessons) {
    lessons.forEach((l) => {
      if (l.active) {
        this.setState({ activeLessonKey: l.key });
      }
    });
  }

  handleClick(lessonKey) {
    const { activeLessonKey } = this.state;
    const newLessonKey = activeLessonKey === lessonKey ? -1 : lessonKey;

    this.setState({ activeLessonKey: newLessonKey });
  }

  render() {
    const { lessons } = this.props;
    const { activeLessonKey } = this.state;
    return (
      <Accordion styled fluid>
        {generateLessons(lessons, activeLessonKey, this.handleClick)}
      </Accordion>
    );
  }
}

export default function Course() {
  
  return (
    <ResponsiveContainer renderHeading={false}>
      <Container text style={{ paddingTop: '1em' }}>
        <Header as="h2" floating>Course One Overview</Header>
        <LessonsList lessons={lessonsArray} />
      </Container>
    </ResponsiveContainer>
  );
}
