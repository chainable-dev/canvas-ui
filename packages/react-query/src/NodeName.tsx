// Copyright 2017-2020 @canvas-ui/react-query authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BareProps } from '@canvas-ui/react-api/types';

import React from 'react';
import { useApi } from '@canvas-ui/react-hooks';

interface Props extends BareProps {
  children?: React.ReactNode;
  label?: React.ReactNode;
}

function NodeName ({ children, className = '', label }: Props): React.ReactElement<Props> {
  const { systemName } = useApi();

  return (
    <div className={className}>
      {label || ''}{systemName}{children}
    </div>
  );
}

export default React.memo(NodeName);
