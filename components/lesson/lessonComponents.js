/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React, { useState, useEffect } from 'react';
import {
  Button,
  Icon,
  Card,
  Tab,
  Segment,
  Header,
  Embed,
  Form,
  Radio,
  TextArea,
  Container,
  Dropdown
} from 'semantic-ui-react';

const getNavigationParams = (direction) => {
  // Right by default
  let dirText = 'Next Lesson';
  let labelPos = 'right';
  let icon = 'angle right';
  let moveDir = 'move right';
  if (direction === 'left') {
    dirText = 'Previous Lesson';
    labelPos = 'left';
    icon = 'angle left';
    moveDir = 'move';
  }
  const res = {};
  res.dirText = dirText;
  res.labelPos = labelPos;
  res.icon = icon;
  res.moveDir = moveDir;
  return res;
};

export const LessonNavigationButton = ({ dirParams, navFunc }) => (
  <Button
    fluid
    color='black'
    icon
    onClick={navFunc}
  >
    {dirParams.dirText}
    <Icon name={dirParams.icon} style={dirParams.iconMargin} />
  </Button>
);

const options = [
  {
    key: 'home',
    value: 'home',
    content:
    <Header as="h4">
      <Icon name="home" />
      <Header.Content>Home</Header.Content>
    </Header>
  }
];

export const LessonMenuButton = () => (
  <Button.Group color="black">
    <Dropdown
      className="button icon"
      icon={<Icon fluid inverted bordered name="list ul" />}
      options={options}
      trigger={<React.Fragment />}
    />
  </Button.Group>
  // <Dropdown icon={<Icon fluid inverted bordered name="list ul" />}>
  //   <Dropdown.Menu>
  //     <Dropdown.Item text={<Header as="h4" icon="home" content="Home" />} />
  //   </Dropdown.Menu>
  // </Dropdown>
);

export const RegularLessonNav = ({ direction, navFunc }) => {
  const dirParams = getNavigationParams(direction);
  return (
    <Card>
      <Button fluid onClick={navFunc} style={{ backgroundColor: '#1b1c1d' }}>
        <Icon fluid inverted bordered name={dirParams.icon} />
      </Button>
    </Card>
  );
};

export const ButtonWithReveal = ({ direction, navFunc }) => {
  const dirParams = getNavigationParams(direction);
  return (
    <Button animated color='black'>
      <Button.Content visible>
        <Icon name={dirParams.icon} inverted/>
      </Button.Content>
      <Button.Content hidden>
        <LessonNavigationButton dirParams={dirParams} navFunc={navFunc}/>
      </Button.Content>
    </Button>
);
};

export const LessonTabs = ({ lesson }) => (
  <Tab menu={{ secondary: true, pointing: true }} panes={lesson.panes} style={{ paddingLeft: '5em', paddingRight: '5em' }} />
);

const LessonTabPane = props => (
  // eslint-disable-next-line react/destructuring-assignment
  <Tab.Pane style={{ border: 0 }}>{props.children}</Tab.Pane>
);

const TextLessonTabPane = ({ content }) => (
  <LessonTabPane>{content}</LessonTabPane>
);

const VideoLessonTabPane = ({ content }) => (
  <LessonTabPane>
    <Container text>
      <Segment vertical padded>
        <Header as='h2'>
          {content.title}
          <Header.Subheader>Pay attention to the video and take notes if you want</Header.Subheader>
        </Header>
        <Embed id='188171839' placeholder="../../img/logo-med.png" source='vimeo' defaultActive={true} />
      </Segment>
      <Segment vertical>
        <Header as="h2">Notes</Header>
        <Form>
          <TextArea placeholder="Take your notes here" style={{ minHeight: 150 }} />
        </Form>
      </Segment>
    </Container>
  </LessonTabPane>
);

const ReadingLessonTabPane = ({ tabContent }) => {

  const [question1Value, setQuestion1Value] = useState('');
  const [q1error, setQ1Error] = useState('');
  const [question2Value, setQuestion2Value] = useState('');
  const [q2error, setQ2Error] = useState('');
  const [missingAnswers, setMissingAnswers] = useState(true);
  const [errorFields, setErrorFields] = useState([]);

  useEffect(() => {
    setMissingAnswers(question1Value === '' || question2Value === '');
  }, [question1Value, question2Value]);

  useEffect(() => {

  }, [q1error, q2error]);

  const checkForError = (fieldName, error) => {
    console.log(error)
    console.log(fieldName)
    return error && fieldName === error;
  }

  const reviewQuiz = () => {
    console.log("reviewing...")
    if(question1Value != "that") {
      setQ1Error(question1Value);
    }
    if(question2Value != "a") {
      setQ2Error(question2Value);
    }
  };
  
  return (
    <LessonTabPane>
      <Container text style={{ height: '500px' }}>
        <Header as='h2'>Reading Quiz</Header>
        <Form.Field>Read the following text then answer the questions below</Form.Field>
        <Segment raised>
          Pellentesque habitant morbi tristique senectus.
          Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nasceturridiculus mus.
          Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nasceturridiculus mus.
          Pellentesque habitant morbi tristique senectus.
          Pellentesque habitant morbi tristique senectus.
          Pellentesque habitant morbi tristique senectus.
          Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nasceturridiculus mus.
        </Segment>
        <Form>
        <Form.Field>
          Question 1:
        </Form.Field>
        <Form.Field>
          <Form.Radio
            label='Choose this'
            name='radioGroup'
            value='this'
            checked={question1Value === 'this'}
            onChange={() => setQuestion1Value('this')}
          />
        </Form.Field>
        <Form.Field>
          <Form.Radio
            label='Or that'
            name='radioGroup'
            value='that'
            checked={question1Value === 'that'}
            onChange={() => setQuestion1Value('that')}
          />
        </Form.Field>
        <Form.Field>
          Question 2:
        </Form.Field>
        <Form.Field>
          <Form.Radio
            label='Option a'
            name='radioGroup2'
            value='a'
            checked={question2Value === 'a'}
            onChange={() => setQuestion2Value('a')}
          />
        </Form.Field>
        <Form.Field>
          <Form.Radio
            label='Option b'
            name='radioGroup2'
            value='b'
            checked={question2Value === 'b'}
            onChange={() => setQuestion2Value('b')}
          />
        </Form.Field>
        <Form.Field>
          <Form.Radio
            label='Option c'
            name='radioGroup2'
            value='c'
            checked={question2Value === 'c'}
            onChange={() => setQuestion2Value('c')}
          />
        </Form.Field>
        <Form.Button primary size='large' floated='right' disabled={missingAnswers} onClick={reviewQuiz}>Submit</Form.Button>
      </Form>
      </Container>
    </LessonTabPane>
  );
};

const WritingLessonTabPane = ({ tabContent }) => {
  return (
    <LessonTabPane>
      <Container text style={{ height: '500px' }}>
        <Header as='h2'>Writing Quiz</Header>
        <Form.Field>Consider the following topic then write a paragraph (+100 words) with your thougts about it </Form.Field>
        <Segment raised>
        <strong>Topic 1: </strong>Pellentesque habitant morbi tristique senectus.
          Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nasceturridiculus mus.
          Pellentesque habitant morbi tristique senectus.
        </Segment>
        <Form.Field>Type your response here:</Form.Field>
        <Form.TextArea rows='5'/>
        <Form.Button primary size='large' floated='right' disabled>Submit</Form.Button>
      </Container>
    </LessonTabPane>
  );
};

export const TextTabContent = ({ tabContent }) => (
  <Container text style={{ height: '500px' }}>
    <Header as="h2">{tabContent.title}</Header>
    <Header as="h4">{tabContent.subtitle}</Header>
    <p>
      {tabContent.content}
    </p>
  </Container>
);

export const VideoTabContent = ({ tabContent }) => {
  return { title: tabContent.tabTitle, videoId: '188171839' };
};

export const ReadingTabContent = ({ tabContent }) => {
  return { tabContent: tabContent };
}

export const WritingTabContent = ({ tabContent }) => {
  return { tabContent: tabContent };
}

export const LessonTab = ({ tabType, content }) => {
  switch (tabType) {
    case 'text':
      return (
        <TextLessonTabPane content={content} />
      );
    case 'video':
      return (
        <VideoLessonTabPane content={content} />
      );
    case 'reading':
      return (
        <ReadingLessonTabPane content={content} />
      );
    case 'writing':
      return (
        <WritingLessonTabPane content={content} />
      );
    default:
      return (
        <Tab.Pane>Tab Content</Tab.Pane>
      );
  }
};
