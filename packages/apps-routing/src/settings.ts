// Copyright 2017-2020 @canvas-ui/apps-routing authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Route } from './types';

import Settings from '@canvas-ui/app-settings';

export default function create (t: <T = string> (key: string, text: string, options: { ns: string }) => T): Route {
  return {
    Component: Settings,
    display: {},
    isIgnored: true,
    name: 'settings',
    text: t<string>('nav.settings', 'Settings', { ns: 'apps-routing' })
  };
}
