import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((r) => r.json());

export function useUser() {
  const { data, mutate } = useSWR('/api/user', fetcher);
  const user = data && data.user;
  return [user, { mutate }];
}

export function useLesson(lessonId) {
  const { data, mutate } = useSWR('/api/lesson?lessonId='+lessonId, fetcher);
  console.log("fetching lesson: lessonId = "+lessonId);
  console.log(data);
  const lesson = data && data.lesson;
  return [lesson, { mutate }];
}