// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Khudawadi`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v15.1.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x000964, 0x000965],
    [0x00A830, 0x00A839],
    [0x0112B0, 0x0112EA],
    [0x0112F0, 0x0112F9]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Khudawadi}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Khudawadi}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Sind}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Sind}"
);
testPropertyEscapes(
  /^\p{scx=Khudawadi}+$/u,
  matchSymbols,
  "\\p{scx=Khudawadi}"
);
testPropertyEscapes(
  /^\p{scx=Sind}+$/u,
  matchSymbols,
  "\\p{scx=Sind}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000963],
    [0x000966, 0x00A82F],
    [0x00A83A, 0x00DBFF],
    [0x00E000, 0x0112AF],
    [0x0112EB, 0x0112EF],
    [0x0112FA, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Khudawadi}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Khudawadi}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Sind}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Sind}"
);
testPropertyEscapes(
  /^\P{scx=Khudawadi}+$/u,
  nonMatchSymbols,
  "\\P{scx=Khudawadi}"
);
testPropertyEscapes(
  /^\P{scx=Sind}+$/u,
  nonMatchSymbols,
  "\\P{scx=Sind}"
);
