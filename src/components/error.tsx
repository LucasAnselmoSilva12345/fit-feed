interface ErrorProps {
  message: string | undefined;
}

export function Error({ message }: ErrorProps) {
  return (
    <p className="text-carnation-600 text-xs font-roboto-semi-bold font-semibold text-left">
      {message}
    </p>
  );
}
