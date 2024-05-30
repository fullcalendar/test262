// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Old_Hungarian`
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
    [0x010C80, 0x010CB2],
    [0x010CC0, 0x010CF2],
    [0x010CFA, 0x010CFF]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Old_Hungarian}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Old_Hungarian}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Hung}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Hung}"
);
testPropertyEscapes(
  /^\p{scx=Old_Hungarian}+$/u,
  matchSymbols,
  "\\p{scx=Old_Hungarian}"
);
testPropertyEscapes(
  /^\p{scx=Hung}+$/u,
  matchSymbols,
  "\\p{scx=Hung}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x010C7F],
    [0x010CB3, 0x010CBF],
    [0x010CF3, 0x010CF9],
    [0x010D00, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Old_Hungarian}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Old_Hungarian}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Hung}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Hung}"
);
testPropertyEscapes(
  /^\P{scx=Old_Hungarian}+$/u,
  nonMatchSymbols,
  "\\P{scx=Old_Hungarian}"
);
testPropertyEscapes(
  /^\P{scx=Hung}+$/u,
  nonMatchSymbols,
  "\\P{scx=Hung}"
);
