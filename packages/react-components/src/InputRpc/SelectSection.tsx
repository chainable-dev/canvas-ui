// Copyright 2017-2020 @canvas-ui/react-components authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DefinitionRpcExt } from '@polkadot/types/types';
import { DropdownOptions } from '@canvas-ui/react-util/types';
import { BareProps } from '../types';

import React from 'react';

import Dropdown from '../Dropdown';
import { classes } from '@canvas-ui/react-util';

interface Props extends BareProps {
  defaultValue?: string;
  isError?: boolean;
  onChange: (value: string) => void;
  options: DropdownOptions;
  value: DefinitionRpcExt;
}

function SelectSection ({ className = '', defaultValue, isError, onChange, options, value }: Props): React.ReactElement<Props> {
  return (
    <Dropdown
      className={classes('ui--DropdownLinked-Sections', className)}
      defaultValue={defaultValue}
      isError={isError}
      onChange={onChange}
      options={options}
      value={value.section}
      withLabel={false}
    />
  );
}

export default React.memo(SelectSection);
