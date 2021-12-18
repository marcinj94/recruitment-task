import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.celadon};
  font-family: ${({ theme }) => theme.fontFamily};
  border: none;
  color: white;
  padding: 10px 25px;
  font-size: 0.9em;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s;

  @media (min-width: ${(props) => props.theme.screenWidthSize.desktop.XGA}) {
    &:hover {
      box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.celadon};
      color: ${({ theme }) => theme.colors.celadon};
      background-color: transparent;
    }
  }
`;
