import { formStyles } from 'components/atoms/TextInput/style';
import { VscChevronDown } from 'react-icons/vsc';
import styled from 'styled-components';

export const Label = styled.label`
  display: inline-block;
  position: relative;
  margin-top: 20px;
`;

export const Select = styled.select`
  ${formStyles}
  padding: 15px 55px 15px 20px;
  cursor: pointer;
  position: relative;
  /* hide arrow */
  appearance: none;
  font-weight: bold;
`;

export const StyledIcon = styled(VscChevronDown)`
  position: absolute;
  top: 45%;
  right: 10px;
  transform: translateY(-45%);
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.celadon};
  cursor: pointer;
  pointer-events: none;
`;

export const Option = styled.option``;
