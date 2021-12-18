/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { Header } from 'components/organisms';
import styled from 'styled-components';
import { RoundedButton, CustomSelect, TextInput, TagButton } from 'components/atoms';

const Section = styled.section`
  background-color: white;
  margin: 0 10%;

  padding: 20px;
`;

export const Reports: React.FC = () => {
  // test input
  const [input, setInput] = React.useState('');
  const onChangeTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // test select
  const options = ['2019', '2020', '2021'];
  const [select, setSelect] = React.useState(options[0]);
  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value);
  };

  return (
    <>
      <Header />
      <Section>
        <RoundedButton label="Wyszukaj" />
        <TextInput
          value={input}
          onChange={onChangeTextInput}
          placeholder="Podaj nazwę, numer lub datę raportu"
        />
        <CustomSelect value={select} options={options} onChange={onChangeSelect} />
        <TagButton active>Wszystkie</TagButton>
        <TagButton active={false}>Bieżące ESPI</TagButton>
        <TagButton active={false}>Bieżące EBI</TagButton>
      </Section>
    </>
  );
};
