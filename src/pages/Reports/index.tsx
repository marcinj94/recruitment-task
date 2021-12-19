import * as React from 'react';
import { FilterBar, Header, ReportsCollection } from 'components/organisms';
import { ErrorMsg } from 'components/atoms';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReports } from 'state/reducers/reports';
import { RootState } from 'state/rootReducer';
import { Main } from './style';

export const Reports: React.FC = () => {
  const dispatch = useDispatch();
  const { error, isFetched } = useSelector((state: RootState) => state.reports);
  React.useEffect(() => {
    if (!isFetched) dispatch(fetchReports());
  }, []);
  return (
    <>
      <Header />
      {error && <ErrorMsg description="Brak danych do wyświetlenia..." />}
      {!error && isFetched && (
        <Main>
          <FilterBar />
          <ReportsCollection />
        </Main>
      )}
    </>
  );
};
