import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';

import { useState } from 'react';
import { Avatar } from './avatar';
import { Comment } from './comment';

interface IAuthor {
  avatarURL: string;
  name: string;
  role: string;
}

interface IContent {
  type: 'paragraph' | 'link' | 'hashtag';
  content: string;
}

interface IPost {
  author: IAuthor;
  content: IContent[];
  publishedAt: Date;
}

export function Post({ author, content, publishedAt }: IPost) {
  const publishedFateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const [comment, setComment] = useState('');

  return (
    <article className="bg-woodsmoke-800 rounded-lg p-10">
      <header className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex items-center gap-4">
          <Avatar
            githubURL={author.avatarURL}
            className="border-2 border-eucalyptus-600"
          />
          <div className="flex flex-col gap-1">
            <strong className="text-base font-roboto-bold text-woodsmoke-200">
              {author.name}
            </strong>
            <span className="text-sm text-woodsmoke-400">{author.role}</span>
          </div>
        </div>

        <time
          title={publishedFateFormatted}
          dateTime={publishedAt.toISOString()}
          className="mt-2 lg:mt-0 lg:ml-auto text-sm text-woodsmoke-400"
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className="mt-6 text-base text-woodsmoke-400 space-y-4">
        {content.map((item, index) => {
          if (item.type === 'paragraph') {
            return <p key={index}>{item.content}</p>;
          } else if (item.type === 'link') {
            return (
              <p key={index}>
                👉{' '}
                <a
                  href={item.content}
                  className="text-eucalyptus-500 font-roboto-bold font-bold transition-colors hover:text-eucalyptus-700"
                >
                  {item.content}
                </a>
              </p>
            );
          }
          return null;
        })}

        <div className="space-x-1">
          {content
            .filter((item) => item.type === 'hashtag')
            .map((item, index) => (
              <a
                href="#"
                key={index}
                className="text-sm text-eucalyptus-500 font-roboto-bold font-bold transition-colors hover:text-eucalyptus-700"
              >
                {item.content}
              </a>
            ))}
        </div>
      </div>

      <form className="w-full mt-6 py-6 border-t border-woodsmoke-600 flex flex-col gap-4">
        <strong className="text-base text-woodsmoke-200 font-roboto-bold font-bold">
          Deixe seu feedback
        </strong>

        <textarea
          className="h-20 bg-woodsmoke-900 py-3 px-4 rounded-lg outline-none focus:outline focus:outline-eucalyptus-500 placeholder:text-sm placeholder:font-normal placeholder:text-woodsmoke-300"
          placeholder="Escreva um comentário..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        {comment.length > 0 && (
          <button
            type="submit"
            className="max-w-[108px] py-4 px-6 bg-eucalyptus-700 rounded-lg font-roboto-bold font-bold transition-colors hover:bg-eucalyptus-500 hover:text-eucalyptus-50"
          >
            Publicar
          </button>
        )}
      </form>

      <div className="mt-8 space-y-6">
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
