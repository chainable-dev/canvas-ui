// Copyright 2017-2020 @canvas-ui/apps-routing authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Routes } from './types';

import deploy from './deploy';
import execute from './execute';
import upload from './upload';
import settings from './settings';

export default function create (t: <T = string> (key: string, text: string, options: { ns: string }) => T): Routes {
  return [
    upload(t),
    deploy(t),
    execute(t),
    settings(t)
  ];
}
