import * as React from 'react';
import { Input } from './style';

interface TextInputProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}

export const TextInput: React.FC<TextInputProps> = ({ value, onChange, placeholder }) => (
  <Input type="text" value={value} onChange={onChange} placeholder={placeholder} />
);
