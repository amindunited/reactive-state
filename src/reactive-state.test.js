/**
 * @license
 * Copyright Robin Buckley. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
'use strict';

const fs = require('fs');
const reactiveState = require('./index');
const expect = require('chai').expect

describe('Reactive State', () => {

  beforeEach(() => { });

  it('should export a function', () => {
    expect(reactiveState).to.be.a('function');
  });

  // it('should return a promise', () => {
  //   expect(copyFile(testFilePath, resultFilePath).then).to.be.a('function');
  // });

});
