import React from 'react';
import classNames from 'classnames';

import { Field, Form as FinalForm } from 'react-final-form';

import FilterCategories from './FilterCategories';
import FilterDateRange from './FilterDateRange';
import FilterLocation from './FilterLocation';
import FilterKeyword from './FilterKeyword';
import { Button, Form } from '../../../../components';

import css from './SearchCTA.module.css';

const GRID_CONFIG = [
  { gridCss: css.gridCol1 },
  { gridCss: css.gridCol2 },
  { gridCss: css.gridCol3 },
  { gridCss: css.gridCol4 },
];

const getIndex = numberOfFields => numberOfFields - 1;

const getGridCss = numberOfFields => {
  const gridConfig = GRID_CONFIG[getIndex(numberOfFields)];
  return gridConfig ? gridConfig.gridCss : GRID_CONFIG[0].gridCss;
};

export const SearchCTA = React.forwardRef((props, ref) => {
  const { categories, dateRange, keywordSearch, locationSearch } = props.searchFields;

  const noSearchFields = !(categories || dateRange || keywordSearch || locationSearch);

  if (noSearchFields) {
    return null;
  }

  const handleSubmit = values => {
    console.log({ values });
  };

  const fieldCount = [categories, dateRange, keywordSearch, locationSearch].filter(f => !!f).length;
  console.log({ fieldCount });

  const categoriesMaybe = categories ? <FilterCategories className={css.searchField} /> : null;
  const locationMaybe = locationSearch ? <FilterLocation className={css.searchField} /> : null;
  const keywordsMaybe = keywordSearch ? <FilterKeyword className={css.searchField} /> : null;
  const dateRangeMaybe = dateRange ? <FilterDateRange className={css.searchField} /> : null;

  return (
    <div className={css.searchContainer}>
      <FinalForm
        onSubmit={handleSubmit}
        {...props}
        render={fieldRenderProps => {
          return (
            <Form className={classNames(css.grid, getGridCss(fieldCount))}>
              {categoriesMaybe}
              {locationMaybe}
              {keywordsMaybe}
              {dateRangeMaybe}
              <Button type="submit">Search!</Button>
            </Form>
          );
        }}
      />
    </div>
  );
});

SearchCTA.displayName = 'SearchCTA';
