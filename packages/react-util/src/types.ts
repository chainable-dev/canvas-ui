// Copyright 2017-2020 @canvas-ui/react-components authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export interface DropdownOption {
  className?: string;
  key?: string;
  text: React.ReactNode;
  value: string;
}

export type DropdownOptions = DropdownOption[];

export type StringOrNull = string | null;

export type VoidFn = () => void;
