interface IAvatar {
  github_username: string;
}

export function Avatar({ github_username }: IAvatar) {
  return (
    <img
      src={`https://github.com/${github_username}.png`}
      alt="Github Image profile Lucas Anselmo"
      className="bg-woodsmoke-800 p-1 w-14 h-14 rounded-lg border-2 border-eucalyptus-600 "
    />
  );
}
