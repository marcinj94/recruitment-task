import * as React from 'react';
import { IconType } from 'react-icons/lib';
import { VscArrowLeft } from 'react-icons/vsc';
import { Button } from './style';

export type PositionAbsolute = boolean;

interface IconButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  icon?: IconType;
  positionAbsolute?: PositionAbsolute;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const IconButton: React.FC<IconButtonProps> = ({
  type = 'button',
  icon = <VscArrowLeft />,
  positionAbsolute,
  onClick,
}) => (
  <Button type={type} positionAbsolute={positionAbsolute} onClick={onClick}>
    {icon}
  </Button>
);
