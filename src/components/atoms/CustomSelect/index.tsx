import * as React from 'react';
import { Label, Select, Option, StyledIcon } from './style';

interface CustomSelectProps {
  value: string;
  options: string[];
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}
export const CustomSelect: React.FC<CustomSelectProps> = ({ value, options, onChange }) => (
  <Label>
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
