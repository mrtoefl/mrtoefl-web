import React, { useEffect, useState } from 'react';
import {
  Container,
  Header,
  Segment,
  Grid,
  Icon,
  Tab,
  Dimmer,
  Loader,
  Image
} from 'semantic-ui-react';
import ResponsiveContainer from '../../components/containers/ResponsiveContainer';
import {
  RegularLessonNav,
  LessonMenuButton,
  LessonTabs,
  LessonTab,
  TextTabContent,
  VideoTabContent,
  ReadingTabContent,
  WritingTabContent
} from './lessonComponents';
import { useLesson } from '../../lib/hooks';

const textTabMenuItem = value => ({ key: value, icon: 'file text', content: value });
const videoTabMenuItem = value => ({ key: value, icon: 'film', content: value });
const readingTabMenuItem = (value, completed) => (
  {
    key: value,
    icon: completed ? <Icon name='book' color='green' /> : 'book',
    content: value
  }
);
const writingTabMenuItem = (value, completed) => (
  {
    key: value,
    icon: completed ? <Icon name='pencil' color='green' /> : 'pencil',
    content: value
  }
);

const tabMenuItem = (lessonTab) => {
  const { tabType, tabTitle, completed } = lessonTab;
  switch (tabType) {
    case 'text':
      return textTabMenuItem(tabTitle);
    case 'video':
      return videoTabMenuItem(tabTitle);
    case 'reading':
      return readingTabMenuItem(tabTitle, completed);
    case 'writing':
      return writingTabMenuItem(tabTitle, completed);
    default:
      return (
        { key: value, content: value }
      );
  }
};

const generateTabContent = (tabType, tabContent) => {
  switch (tabType) {
    case 'text':
      return (
        <TextTabContent tabContent={tabContent} />
      );
    case 'video':
      return (
        <VideoTabContent tabContent={tabContent} />
      );
    case 'reading':
      return (
        <ReadingTabContent tabContent={tabContent} />
      );
    case 'writing':
      return (
        <WritingTabContent tabContent={tabContent} />
      );
    default:
      return (
        <Tab.Pane>Tab Content</Tab.Pane>
      );
  }
};

const generatePanes = (lessonTabs) => {
  let panes = [];
  lessonTabs.forEach(lessonTab => {
    const { tabType, tabContent } = lessonTab;
    panes.push(
      { 
        menuItem: tabMenuItem(lessonTab),
        render: () => <LessonTab tabType={tabType} content={generateTabContent(tabType, tabContent)} />
      }
    );
  });
  return panes;
};

const generateLesson = (lessonData) => {
  const { title, description, lessonTabs } = lessonData;
  const lesson = {
    title: title,
    description: description,
    panes: generatePanes(lessonTabs)
  };
  return lesson;
};

const emptyLesson = {
  lessonId: 0,
  title: "Emtpy title",
  description: "Empty description",
  lessonTabs: [
    {
      tabType: 'text',
      tabTitle: "Empty Lesson Tab",
      tabContent: {
        title: "Empty Lesson",
        subtitle: "-",
        content: "-"
      }
    }
  ]

};

const LessonPage = ({ lessonId }) => {
  const [lessonData, { mutate }] = useLesson(lessonId);
  const [lesson, setLesson] = useState(generateLesson(emptyLesson));
  const [loaded, isLoaded] = useState(false);

  useEffect(()=>{
    if(lessonData) {
      setLesson(generateLesson(lessonData));
      isLoaded(true);
    }
  }, [lessonData]);
  if(!loaded) {
    return (
    <Container text>
      <Segment>
        <Dimmer active inverted>
          <Loader size='huge'>Loading</Loader>
        </Dimmer>
        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      </Segment>
    </Container>
    );
  } else return(
    <LessonContent lesson={lesson}/>
  );
}

const LessonContent = ({ lesson }) => {
  const nextLesson = () => {}
  const prevLesson = () => {}
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
                <RegularLessonNav direction='left' navFunc={prevLesson} />
              </Grid.Column>
              <Grid.Column width={11} color='red' verticalAlign='middle' style={{ borderRadius: 5 }}>
                <Header inverted as='h2'>
                  <b>{lesson.title}</b>
                  <Header.Subheader>{lesson.description}</Header.Subheader>
                </Header>
              </Grid.Column>
              <Grid.Column width={2}>
                <RegularLessonNav direction='right' navFunc={nextLesson} />
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
  
const Lesson = ({lessonId}) => (
  <ResponsiveContainer renderHeading={false}>
    <LessonPage lessonId={lessonId} />
  </ResponsiveContainer>
);

export default Lesson;
