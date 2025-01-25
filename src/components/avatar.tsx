import { twMerge } from 'tailwind-merge';

interface IAvatar {
  github_username: string;
  className?: string;
}

export function Avatar({ github_username, className }: IAvatar) {
  return (
    <img
      src={`https://github.com/${github_username}.png`}
      alt="Github Image profile Lucas Anselmo"
      className={twMerge(
        'bg-woodsmoke-800 p-1 w-14 h-14 rounded-lg',
        className
      )}
    />
  );
}
