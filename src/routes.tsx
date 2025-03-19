import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/header';
import { Home } from './pages/home';
import { TrainingTracker } from './pages/training-tracker';

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <main className="my-8 mx-auto py-0 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/training-tracker" element={<TrainingTracker />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
