// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Palmyrene`
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
    [0x010860, 0x01087F]
  ]
});
testPropertyEscapes(
  /^\p{Script=Palmyrene}+$/u,
  matchSymbols,
  "\\p{Script=Palmyrene}"
);
testPropertyEscapes(
  /^\p{Script=Palm}+$/u,
  matchSymbols,
  "\\p{Script=Palm}"
);
testPropertyEscapes(
  /^\p{sc=Palmyrene}+$/u,
  matchSymbols,
  "\\p{sc=Palmyrene}"
);
testPropertyEscapes(
  /^\p{sc=Palm}+$/u,
  matchSymbols,
  "\\p{sc=Palm}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x01085F],
    [0x010880, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Palmyrene}+$/u,
  nonMatchSymbols,
  "\\P{Script=Palmyrene}"
);
testPropertyEscapes(
  /^\P{Script=Palm}+$/u,
  nonMatchSymbols,
  "\\P{Script=Palm}"
);
testPropertyEscapes(
  /^\P{sc=Palmyrene}+$/u,
  nonMatchSymbols,
  "\\P{sc=Palmyrene}"
);
testPropertyEscapes(
  /^\P{sc=Palm}+$/u,
  nonMatchSymbols,
  "\\P{sc=Palm}"
);
