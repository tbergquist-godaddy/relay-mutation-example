// @flow

import * as React from 'react';
import InputField from '@kiwicom/orbit-components/lib/InputField';
import Button from '@kiwicom/orbit-components/lib/Button';

import SearchQuery from './SearchQuery';

const SearchForm = () => {
  const [query, onQueryChanged] = React.useState('');
  const [inputValue, onInputValueChange] = React.useState('');

  function onSubmit(e) {
    e.preventDefault();
    onQueryChanged(inputValue);
  }

  function inputValueChange(e) {
    onInputValueChange(e.target.value);
  }
  return (
    <form onSubmit={onSubmit}>
      <InputField value={inputValue} onChange={inputValueChange} />
      <Button submit={true}>Search</Button>
      {query !== '' && <SearchQuery query={query} />}
    </form>
  );
};

export default SearchForm;
