import { twMerge } from 'tailwind-merge';

interface IAvatar {
  githubURL: string;
  className?: string;
}

export function Avatar({ githubURL, className }: IAvatar) {
  return (
    <img
      src={`${githubURL}`}
      alt="Github Image profile Lucas Anselmo"
      className={twMerge(
        'bg-woodsmoke-800 p-1 w-14 h-14 rounded-lg',
        className
      )}
    />
  );
}
