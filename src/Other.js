
import React from 'react';

const Other = ({ headings }) => (
  <div dangerouslySetInnerHTML={{ __html: headings }} />
);

export default Other