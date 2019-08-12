import * as React from 'react';
import Link from '../link';

const AnchorTag = ({ children: link, ...props }) => {
  if (link) {
    const external = props.href.startsWith('http') ? '_blank' : '';

    if (external) {
      return (
        <a href={props.href} target="_blank">
          {link}
        </a>
      );
    }

    return <Link to={props.href}>{link}</Link>;
  } else {
    return null;
  }
};

export default AnchorTag;
