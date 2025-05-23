import React from 'react';

import { AspectRatioWrapper } from '../../components';

import classNames from 'classnames';

import css from './NoListingImagePreview.module.css';

const NoListingImagePreview = props => {
  const { style, listingTitle } = props;

  const classes = classNames(css.preview, css[style]);

  return (
    <div className={css.container}>
      <AspectRatioWrapper width={366} height={275}>
        <div className={classes}>{listingTitle ? listingTitle : null}</div>
      </AspectRatioWrapper>
    </div>
  );
};

export default NoListingImagePreview;
