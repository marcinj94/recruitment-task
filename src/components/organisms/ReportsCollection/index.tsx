/* eslint-disable object-curly-newline */
import {
  ReportCategory,
  ReportDatetime,
  WhiteSection,
  ReportTitle,
  ReportDescription,
  ReportLink,
} from 'components/atoms';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'state/rootReducer';
import { DownloadFiles } from 'components/organisms/DownloadFiles';
import { List, ListItem, LeftWrapper, RightWrapper, ActionWrapper } from './style';

export const ReportsCollection: React.FC = () => {
  const reportsState = useSelector((state: RootState) => state.reports);
  return (
    <WhiteSection>
      <List>
        {reportsState.data.map((report) => (
          <ListItem key={report.date}>
            <LeftWrapper>
              <ReportDatetime timestamp={report.date} />
              <ReportCategory category={report.category} />
            </LeftWrapper>
            <RightWrapper>
              <ReportTitle>{report.title}</ReportTitle>
              <ReportDescription>{report.description}</ReportDescription>
              <ActionWrapper>
                <ReportLink href="#">Zobacz raport</ReportLink>
                <DownloadFiles files={report.files} />
              </ActionWrapper>
            </RightWrapper>
          </ListItem>
        ))}
      </List>
    </WhiteSection>
  );
};
