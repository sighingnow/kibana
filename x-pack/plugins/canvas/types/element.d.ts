/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

declare interface CanvasElementConfig {
  name: string;
  image: any;
  expression: string;
  displayName?: string;
  help?: string;
  filter?: string;
  width?: number;
  height?: number;
}

declare type CanvasElement = () => CanvasElementConfig;
