import { useRouter } from 'next/router';
import Lesson from '../../components/lesson/lessonPage'

export default function LessonById() {
    const router = useRouter();
    return (
        <Lesson lessonId={router.query.id} />
    );
}