import * as React from 'react';
import App from 'App';

interface TestProps {
  message: string;
}

export const Test2: React.FC<TestProps> = ({ message }) => {
  console.log('message:', message);

  return (
    <>
      <div>hi</div>
      <span>elo</span>
      <App />
    </>
  );
};
