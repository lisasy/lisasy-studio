import { getAllNotes } from '@/lib/notes';
import NotesFeed from '@/components/NotesFeed';

export default function Notes() {
  const posts = getAllNotes();
  return <NotesFeed posts={posts} />;
}
