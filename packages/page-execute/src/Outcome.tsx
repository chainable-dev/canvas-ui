// Copyright 2017-2020 @polkadot/app-contracts authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ContractCallOutcome } from '@polkadot/api-contract/types';
import { BareProps } from '@canvas-ui/react-components/types';

import React from 'react';
import styled from 'styled-components';
import { Button, MessageSignature, Output } from '@canvas-ui/react-components';

interface Props extends BareProps {
  onClear?: () => void;
  outcome: ContractCallOutcome;
}

function Outcome ({ className, onClear, outcome: { isSuccess, message, output, params, time } }: Props): React.ReactElement<Props> | null {
  const dateTime = new Date(time);

  return (
    <div className={className}>
      <div className='info'>
        {/* <AddressMini
          className='origin'
          isPadded={false}
          value={origin}
          withAddress={false}
        /> */}
        <MessageSignature
          message={message}
          params={params}
        />
        <span className='date-time'>
          {dateTime.toLocaleDateString()}
          {' '}
          {dateTime.toLocaleTimeString()}
        </span>
        <Button
          className='icon-button clear-btn'
          icon='close'
          isPrimary
          onClick={onClear}
          size='mini'
        />
      </div>
      <Output
        isError={!isSuccess}
        value={(output || '()').toString()}
        withCopy
        withLabel={false}
      />
    </div>
  );
}

export default React.memo(styled(Outcome)`
  & {
    .info {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem 0;

      & > *:not(:first-child) {
        padding-left: 1.5rem !important;
      }
    }

    .clear-btn {
      display: none;
      opacity: 0;
    }

    .date-time {
      color: #aaa;
      white-space: nowrap;
    }

    .origin {
      padding-left: 0 !important;

      * {
        margin-left: 0 !important;
      }
    }

    &:hover {
      .clear-btn {
        opacity: 1;
      }
    }
  }
`);
