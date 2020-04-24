import { useRouter } from 'next/router';
import Lesson from '../../components/lesson/lessonPage';
import Course from '../../components/course/coursePage';

export default function CoursePage() {
  const router = useRouter();
  const { courseId, lessonId } = router.query;
  if(lessonId && lessonId > 0) {
      return <Lesson lessonId={lessonId} />;
  }
  return (
    <Course />
  );
}