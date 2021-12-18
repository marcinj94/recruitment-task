import styled, { css } from 'styled-components';

export const formStyles = css`
  display: block;
  box-shadow: 0 0 12px #ddd;
  border: none;
  border-bottom: 2px solid black;
  letter-spacing: 1.2px;
`;

export const Input = styled.input`
  ${formStyles}
  width: 100%;
  padding: 15px 15px 15px 20px;
  margin-top: 20px;

  &::placeholder {
    color: #acacac;
  }
`;
