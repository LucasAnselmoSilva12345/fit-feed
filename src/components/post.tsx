import { useState } from 'react';
import { Avatar } from './avatar';

export function Post() {
  const [comment, setComment] = useState('');

  return (
    <article className="bg-woodsmoke-800 rounded-lg p-10">
      <header className="flex items-center">
        <div className="flex items-center gap-4">
          <Avatar github_username="LucasAnselmoSilva12345" />
          <div className="flex flex-col gap-1">
            <strong className="text-base font-roboto-bold text-woodsmoke-200">
              Lucas Anselmo
            </strong>
            <span className="text-sm text-woodsmoke-400">
              Front-end Software Developer
            </span>
          </div>
        </div>

        <time
          title="25 de Janeiro às 14:47"
          dateTime="2025-01-25 14:48:30"
          className="ml-auto text-sm text-woodsmoke-400"
        >
          Publicado há 1h
        </time>
      </header>

      <div className="mt-6 text-base text-woodsmoke-400 space-y-4">
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀{' '}
        </p>
        <p>
          👉{' '}
          <a
            href=""
            className="text-eucalyptus-500 font-roboto-bold font-bold transition-colors hover:text-eucalyptus-700"
          >
            jane.design/doctorcare
          </a>
        </p>
        <div className="space-x-1">
          <a
            href="#"
            className="text-sm text-eucalyptus-500 font-roboto-bold font-bold transition-colors hover:text-eucalyptus-700"
          >
            #novoprojeto
          </a>
          <a
            href="#"
            className="text-sm text-eucalyptus-500 font-roboto-bold font-bold transition-colors hover:text-eucalyptus-700"
          >
            #nlw
          </a>
          <a
            href="#"
            className="text-sm text-eucalyptus-500 font-roboto-bold font-bold transition-colors hover:text-eucalyptus-700"
          >
            #rocketseat
          </a>
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
    </article>
  );
}
