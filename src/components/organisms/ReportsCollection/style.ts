import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 0;
`;

export const ListItem = styled.li`
  list-style-type: none;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 1px;
    background-color: #dfdfdf;
  }
`;

export const LeftWrapper = styled.div`
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 18%;
`;

export const RightWrapper = styled.div`
  flex-basis: 78%;
`;

export const ActionWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;
