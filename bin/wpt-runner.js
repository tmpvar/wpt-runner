#!/usr/bin/env node
"use strict";
/* eslint-disable no-console */
const path = require("path");
const wptRunner = require("../lib/wpt-runner.js");

const testsPath = process.argv[2];
const setup = process.argv[3] ? require(path.resolve(process.argv[3])) : () => {};

wptRunner(testsPath, setup)
  .then(failures => process.exit(failures))
  .catch(e => {
    console.error(e.stack);
    process.exit(1);
  });
