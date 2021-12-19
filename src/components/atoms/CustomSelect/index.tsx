import * as React from 'react';
import { Label, Select, Option, StyledIcon } from './style';

interface CustomSelectProps {
  value: string;
  options: string[];
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  flexOrder?: number;
}
export const CustomSelect: React.FC<CustomSelectProps> = ({
  value,
  options,
  onChange,
  flexOrder,
}) => (
  <Label flexOrder={flexOrder}>
    <Select value={value} onChange={onChange}>
      {options.map((id) => (
        <Option key={id} value={id}>
          {id}
        </Option>
      ))}
    </Select>
    <StyledIcon />
  </Label>
);
