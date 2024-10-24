'use client';

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return (
    <div>
      {error.message} <button onClick={reset}>Try Agin</button>
    </div>
  );
};

export default ErrorBoundary;
