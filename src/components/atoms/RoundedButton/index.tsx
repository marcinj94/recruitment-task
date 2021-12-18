import * as React from 'react';
import { Button } from './style';

interface RoundedButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
}

export const RoundedButton: React.FC<RoundedButtonProps> = ({ onClick, label }) => (
  <Button type="button" onClick={onClick}>
    {label}
  </Button>
);
