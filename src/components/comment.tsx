import { CheckCircledIcon, TrashIcon } from '@radix-ui/react-icons';
import { Avatar } from './avatar';
import { useState } from 'react';

interface IComment {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: IComment) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  return (
    <div className="flex items-start gap-2 lg:gap-4">
      <Avatar githubURL="https://github.com/LucasAnselmoSilva12345.png" />

      <div className="w-full">
        <div className="bg-woodsmoke-900 rounded-lg px-4 pt-4 pb-6 space-y-4">
          <header className="flex items-start">
            <div>
              <h3 className="text-sm font-roboto-bold font-bold text-woodsmoke-200">
                Devon Lane <span className="text-woodsmoke-400">(você)</span>
              </h3>
              <time
                title="25 de Janeiro às 14:47"
                dateTime="2025-01-25 14:48:30"
                className="ml-auto text-xs text-woodsmoke-400"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button
              onClick={handleDeleteComment}
              title="Deletar comentário"
              className="block ml-auto leading-[0] transition-colors outline-none focus:outline focus:outline-eucalyptus-500 hover:text-carnation-400"
            >
              <TrashIcon />
            </button>
          </header>
          <p className="text-sm text-woodsmoke-300">{content}</p>
        </div>
        <footer className="mt-3">
          <button
            onClick={handleLikeComment}
            className="flex items-center gap-2 transition-colors hover:text-eucalyptus-500"
          >
            <CheckCircledIcon />
            Aplaudir{' '}
            <span className='before:py-0 before:pr-2 before:content-["\2022"]'>
              {likeCount}
            </span>
          </button>
        </footer>
      </div>
    </div>
  );
}
