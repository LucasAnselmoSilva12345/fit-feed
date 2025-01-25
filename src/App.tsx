import { Header } from './components/header';
import { Post } from './components/post';
import { Sidebar } from './components/sidebar';

export function App() {
  return (
    <>
      <Header />

      <main className="max-w-[70rem] my-8 mx-auto py-0 px-4 grid grid-cols-[256px_1fr] gap-8 items-start">
        <Sidebar />

        <section>
          <Post />
        </section>
      </main>
    </>
  );
}
