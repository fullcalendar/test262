// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Han`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v15.1.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x003005,
    0x003007
  ],
  ranges: [
    [0x002E80, 0x002E99],
    [0x002E9B, 0x002EF3],
    [0x002F00, 0x002FD5],
    [0x003021, 0x003029],
    [0x003038, 0x00303B],
    [0x003400, 0x004DBF],
    [0x004E00, 0x009FFF],
    [0x00F900, 0x00FA6D],
    [0x00FA70, 0x00FAD9],
    [0x016FE2, 0x016FE3],
    [0x016FF0, 0x016FF1],
    [0x020000, 0x02A6DF],
    [0x02A700, 0x02B739],
    [0x02B740, 0x02B81D],
    [0x02B820, 0x02CEA1],
    [0x02CEB0, 0x02EBE0],
    [0x02EBF0, 0x02EE5D],
    [0x02F800, 0x02FA1D],
    [0x030000, 0x03134A],
    [0x031350, 0x0323AF]
  ]
});
testPropertyEscapes(
  /^\p{Script=Han}+$/u,
  matchSymbols,
  "\\p{Script=Han}"
);
testPropertyEscapes(
  /^\p{Script=Hani}+$/u,
  matchSymbols,
  "\\p{Script=Hani}"
);
testPropertyEscapes(
  /^\p{sc=Han}+$/u,
  matchSymbols,
  "\\p{sc=Han}"
);
testPropertyEscapes(
  /^\p{sc=Hani}+$/u,
  matchSymbols,
  "\\p{sc=Hani}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x002E9A,
    0x003006
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x002E7F],
    [0x002EF4, 0x002EFF],
    [0x002FD6, 0x003004],
    [0x003008, 0x003020],
    [0x00302A, 0x003037],
    [0x00303C, 0x0033FF],
    [0x004DC0, 0x004DFF],
    [0x00A000, 0x00DBFF],
    [0x00E000, 0x00F8FF],
    [0x00FA6E, 0x00FA6F],
    [0x00FADA, 0x016FE1],
    [0x016FE4, 0x016FEF],
    [0x016FF2, 0x01FFFF],
    [0x02A6E0, 0x02A6FF],
    [0x02B73A, 0x02B73F],
    [0x02B81E, 0x02B81F],
    [0x02CEA2, 0x02CEAF],
    [0x02EBE1, 0x02EBEF],
    [0x02EE5E, 0x02F7FF],
    [0x02FA1E, 0x02FFFF],
    [0x03134B, 0x03134F],
    [0x0323B0, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Han}+$/u,
  nonMatchSymbols,
  "\\P{Script=Han}"
);
testPropertyEscapes(
  /^\P{Script=Hani}+$/u,
  nonMatchSymbols,
  "\\P{Script=Hani}"
);
testPropertyEscapes(
  /^\P{sc=Han}+$/u,
  nonMatchSymbols,
  "\\P{sc=Han}"
);
testPropertyEscapes(
  /^\P{sc=Hani}+$/u,
  nonMatchSymbols,
  "\\P{sc=Hani}"
);
