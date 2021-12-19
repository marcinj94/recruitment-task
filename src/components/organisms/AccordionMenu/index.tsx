/* eslint-disable object-curly-newline */
import { ReportLink, ReportLinkLabel, ReportLinkSize } from 'components/atoms';
import * as React from 'react';
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc';
import { FileElement } from 'state/types/reports';
import { formatBytesToSize } from 'utils/formatBytesToSize';
import {
  ToggleButton,
  ButtonLabel,
  ButtonDescription,
  getStyledIcon,
  List,
  ListItem,
  Wrapper,
} from './style';

interface AccordionMenuProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  active: boolean;
  files: FileElement[];
}
export const AccordionMenu: React.FC<AccordionMenuProps> = ({ onClick, active, files }) => {
  const icon = active ? VscChevronUp : VscChevronDown;
  const StyledIcon = getStyledIcon(icon);
  return (
    <Wrapper>
      <ToggleButton onClick={onClick} active={active}>
        <ButtonLabel>
          <ButtonDescription>Pliki do pobrania ({files.length})</ButtonDescription>
          <StyledIcon />
        </ButtonLabel>
      </ToggleButton>
      {active && (
        <List>
          {files.map(({ filename, filesize }) => {
            const size = formatBytesToSize(filesize, 0);
            const label = `${filename}.pdf`;
            return (
              <ListItem key={`${filename}_${filesize}`}>
                <ReportLink href="#">
                  <ReportLinkLabel>{label}</ReportLinkLabel>
                  <ReportLinkSize>({size})</ReportLinkSize>
                </ReportLink>
              </ListItem>
            );
          })}
        </List>
      )}
    </Wrapper>
  );
};
