// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Siddham`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v14.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x011580, 0x0115B5],
    [0x0115B8, 0x0115DD]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Siddham}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Siddham}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Sidd}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Sidd}"
);
testPropertyEscapes(
  /^\p{scx=Siddham}+$/u,
  matchSymbols,
  "\\p{scx=Siddham}"
);
testPropertyEscapes(
  /^\p{scx=Sidd}+$/u,
  matchSymbols,
  "\\p{scx=Sidd}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x01157F],
    [0x0115B6, 0x0115B7],
    [0x0115DE, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Siddham}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Siddham}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Sidd}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Sidd}"
);
testPropertyEscapes(
  /^\P{scx=Siddham}+$/u,
  nonMatchSymbols,
  "\\P{scx=Siddham}"
);
testPropertyEscapes(
  /^\P{scx=Sidd}+$/u,
  nonMatchSymbols,
  "\\P{scx=Sidd}"
);
