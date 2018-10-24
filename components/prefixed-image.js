import React from 'react';
import { prefixURL } from './utils';

const PrefixedImage = props => <img {...props} src={prefixURL(props.src)} />;

export default PrefixedImage;
