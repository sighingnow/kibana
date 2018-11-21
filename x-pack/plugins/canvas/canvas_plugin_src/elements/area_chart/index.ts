/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

<<<<<<< HEAD:x-pack/plugins/canvas/canvas_plugin_src/elements/area_chart/index.ts
import { ElementFactory } from '../types';
import header from './header.png';

export const areaChart: ElementFactory = () => ({
=======
import header from './header.png';

export const areaChart: CanvasElement = () => ({
>>>>>>> [i18n][prereq] Refactor Elements to TypeScript:x-pack/plugins/canvas/canvas_plugin_src/elements/area_chart/index.ts
  name: 'areaChart',
  displayName: 'Area chart',
  help: 'A line chart with a filled body',
  image: header,
  expression: `filters
  | demodata
  | pointseries x="time" y="mean(price)"
  | plot defaultStyle={seriesStyle lines=1 fill=1}
  | render`,
});
