// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link as MuiLink } from '@mui/material';
import { Link as ReactRouterLink } from 'react-router-dom';

const Link = (props) => {
  return (
    // eslint-disable-next-line react/prop-types
    <MuiLink {...props} component={ReactRouterLink} to={props.href ?? '#'} />
  );
};

export default Link;
