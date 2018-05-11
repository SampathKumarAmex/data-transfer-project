/*
 * Copyright 2018 The Data Transfer Project Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { PortabilityDemoPage } from './app.po';

describe('portability-demo App', () => {
  let page: PortabilityDemoPage;

  beforeEach(() => {
    page = new PortabilityDemoPage();
  });

  // TODO: add more thorough tests
  it('should display Data Portability header', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Data Portability');
  });
});