import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/header';
import { Home } from './pages/home';

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <main className="max-w-[70rem] my-8 mx-auto py-0 px-4 grid grid-cols-1 lg:grid-cols-[256px_1fr] gap-8 items-start">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
