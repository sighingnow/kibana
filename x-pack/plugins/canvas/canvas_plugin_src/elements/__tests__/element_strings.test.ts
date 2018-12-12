/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { elementSpecs } from '../';
import { ElementStrings } from '../strings';

describe('ElementStrings', () => {
  const elementNames = elementSpecs.map(spec => spec().name);
  const stringKeys = Object.keys(ElementStrings);

  test('All element names should exist in the strings definition', () => {
    elementNames.forEach(name => expect(stringKeys).toContain(name));
  });

  test('All string definitions should correspond to an existing element', () => {
    stringKeys.forEach(key => expect(elementNames).toContain(key));
  });

  const strings = Object.values(ElementStrings);

  test('All elements should have a displayName string defined', () => {
    strings.forEach(value => {
      expect(value).toHaveProperty('displayName');
    });
  });

  test('All elements should have a help string defined', () => {
    strings.forEach(value => {
      expect(value).toHaveProperty('help');
    });
  });
});
