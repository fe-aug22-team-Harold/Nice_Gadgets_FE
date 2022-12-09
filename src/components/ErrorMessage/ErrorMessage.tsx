import React from 'react';

type Props = {
  message: string | null,
}

export const ErrorMessage: React.FC<Props> = ({ message }) => {
  const errorText = message || 'Something went wrong';

  return (
    <div className="error-box">
      <span className="error-box__err">Error:</span>{errorText}
    </div>
  );
};
