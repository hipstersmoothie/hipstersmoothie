import React from 'react';
import Link from 'next/link';
import { prefixURL } from './utils';

const PrefixedLink = props => (
  <Link {...props} as={prefixURL(props.as ? props.as : props.href)} />
);

export default PrefixedLink;
