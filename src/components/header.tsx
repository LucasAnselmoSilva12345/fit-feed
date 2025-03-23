import { FitFeedLogo } from '../assets/fit-feed-logo';

export function Header() {
  return (
    <header className="bg-eucalyptus-950 ">
      <a href="/" className="flex items-center justify-center">
        <FitFeedLogo />
        <h1 className="sr-only">FitFeed</h1>
      </a>
    </header>
  );
}
