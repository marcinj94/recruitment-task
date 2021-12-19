import * as React from 'react';
import { FilterBar, Header, ReportsCollection } from 'components/organisms';
import styled from 'styled-components';
import { ErrorMsg } from 'components/atoms';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReports } from 'state/reducers/reports';
import { RootState } from 'state/rootReducer';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Reports: React.FC = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state: RootState) => state.reports);

  React.useEffect(() => {
    dispatch(fetchReports());
  }, []);

  return (
    <>
      <Header />
      {error ? (
        <ErrorMsg description="Brak danych do wyświetlenia..." />
      ) : (
        <Main>
          <FilterBar />
          <ReportsCollection />
        </Main>
      )}
    </>
  );
};
