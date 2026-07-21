#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');

const name = 'ADMOB_PUBLISHER_ID';
const value = process.env[name];
const pattern = /^pub-[0-9]{16}$/;

if (typeof value !== 'string' || !pattern.test(value) || value.includes('3940256099942544') || /testids?|sample/i.test(value)) {
  console.error(`${name}: FAIL`);
  process.exit(1);
}

const target = path.resolve(__dirname, '..', 'app-ads.txt');
const line = `google.com, ${value}, DIRECT, f08c47fec0942fa0\n`;
fs.writeFileSync(target, line, { encoding: 'utf8', mode: 0o644 });
console.log(`${name}: PASS`);
