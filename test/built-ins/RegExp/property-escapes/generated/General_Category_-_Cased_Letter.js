// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `General_Category=Cased_Letter`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v14.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x0000B5,
    0x00037F,
    0x000386,
    0x00038C,
    0x0010C7,
    0x0010CD,
    0x001F59,
    0x001F5B,
    0x001F5D,
    0x001FBE,
    0x002102,
    0x002107,
    0x002115,
    0x002124,
    0x002126,
    0x002128,
    0x002139,
    0x00214E,
    0x002D27,
    0x002D2D,
    0x00A7D3,
    0x00A7FA,
    0x01D4A2,
    0x01D4BB,
    0x01D546
  ],
  ranges: [
    [0x000041, 0x00005A],
    [0x000061, 0x00007A],
    [0x0000C0, 0x0000D6],
    [0x0000D8, 0x0000F6],
    [0x0000F8, 0x0001BA],
    [0x0001BC, 0x0001BF],
    [0x0001C4, 0x000293],
    [0x000295, 0x0002AF],
    [0x000370, 0x000373],
    [0x000376, 0x000377],
    [0x00037B, 0x00037D],
    [0x000388, 0x00038A],
    [0x00038E, 0x0003A1],
    [0x0003A3, 0x0003F5],
    [0x0003F7, 0x000481],
    [0x00048A, 0x00052F],
    [0x000531, 0x000556],
    [0x000560, 0x000588],
    [0x0010A0, 0x0010C5],
    [0x0010D0, 0x0010FA],
    [0x0010FD, 0x0010FF],
    [0x0013A0, 0x0013F5],
    [0x0013F8, 0x0013FD],
    [0x001C80, 0x001C88],
    [0x001C90, 0x001CBA],
    [0x001CBD, 0x001CBF],
    [0x001D00, 0x001D2B],
    [0x001D6B, 0x001D77],
    [0x001D79, 0x001D9A],
    [0x001E00, 0x001F15],
    [0x001F18, 0x001F1D],
    [0x001F20, 0x001F45],
    [0x001F48, 0x001F4D],
    [0x001F50, 0x001F57],
    [0x001F5F, 0x001F7D],
    [0x001F80, 0x001FB4],
    [0x001FB6, 0x001FBC],
    [0x001FC2, 0x001FC4],
    [0x001FC6, 0x001FCC],
    [0x001FD0, 0x001FD3],
    [0x001FD6, 0x001FDB],
    [0x001FE0, 0x001FEC],
    [0x001FF2, 0x001FF4],
    [0x001FF6, 0x001FFC],
    [0x00210A, 0x002113],
    [0x002119, 0x00211D],
    [0x00212A, 0x00212D],
    [0x00212F, 0x002134],
    [0x00213C, 0x00213F],
    [0x002145, 0x002149],
    [0x002183, 0x002184],
    [0x002C00, 0x002C7B],
    [0x002C7E, 0x002CE4],
    [0x002CEB, 0x002CEE],
    [0x002CF2, 0x002CF3],
    [0x002D00, 0x002D25],
    [0x00A640, 0x00A66D],
    [0x00A680, 0x00A69B],
    [0x00A722, 0x00A76F],
    [0x00A771, 0x00A787],
    [0x00A78B, 0x00A78E],
    [0x00A790, 0x00A7CA],
    [0x00A7D0, 0x00A7D1],
    [0x00A7D5, 0x00A7D9],
    [0x00A7F5, 0x00A7F6],
    [0x00AB30, 0x00AB5A],
    [0x00AB60, 0x00AB68],
    [0x00AB70, 0x00ABBF],
    [0x00FB00, 0x00FB06],
    [0x00FB13, 0x00FB17],
    [0x00FF21, 0x00FF3A],
    [0x00FF41, 0x00FF5A],
    [0x010400, 0x01044F],
    [0x0104B0, 0x0104D3],
    [0x0104D8, 0x0104FB],
    [0x010570, 0x01057A],
    [0x01057C, 0x01058A],
    [0x01058C, 0x010592],
    [0x010594, 0x010595],
    [0x010597, 0x0105A1],
    [0x0105A3, 0x0105B1],
    [0x0105B3, 0x0105B9],
    [0x0105BB, 0x0105BC],
    [0x010C80, 0x010CB2],
    [0x010CC0, 0x010CF2],
    [0x0118A0, 0x0118DF],
    [0x016E40, 0x016E7F],
    [0x01D400, 0x01D454],
    [0x01D456, 0x01D49C],
    [0x01D49E, 0x01D49F],
    [0x01D4A5, 0x01D4A6],
    [0x01D4A9, 0x01D4AC],
    [0x01D4AE, 0x01D4B9],
    [0x01D4BD, 0x01D4C3],
    [0x01D4C5, 0x01D505],
    [0x01D507, 0x01D50A],
    [0x01D50D, 0x01D514],
    [0x01D516, 0x01D51C],
    [0x01D51E, 0x01D539],
    [0x01D53B, 0x01D53E],
    [0x01D540, 0x01D544],
    [0x01D54A, 0x01D550],
    [0x01D552, 0x01D6A5],
    [0x01D6A8, 0x01D6C0],
    [0x01D6C2, 0x01D6DA],
    [0x01D6DC, 0x01D6FA],
    [0x01D6FC, 0x01D714],
    [0x01D716, 0x01D734],
    [0x01D736, 0x01D74E],
    [0x01D750, 0x01D76E],
    [0x01D770, 0x01D788],
    [0x01D78A, 0x01D7A8],
    [0x01D7AA, 0x01D7C2],
    [0x01D7C4, 0x01D7CB],
    [0x01DF00, 0x01DF09],
    [0x01DF0B, 0x01DF1E],
    [0x01E900, 0x01E943]
  ]
});
testPropertyEscapes(
  /^\p{General_Category=Cased_Letter}+$/u,
  matchSymbols,
  "\\p{General_Category=Cased_Letter}"
);
testPropertyEscapes(
  /^\p{General_Category=LC}+$/u,
  matchSymbols,
  "\\p{General_Category=LC}"
);
testPropertyEscapes(
  /^\p{gc=Cased_Letter}+$/u,
  matchSymbols,
  "\\p{gc=Cased_Letter}"
);
testPropertyEscapes(
  /^\p{gc=LC}+$/u,
  matchSymbols,
  "\\p{gc=LC}"
);
testPropertyEscapes(
  /^\p{Cased_Letter}+$/u,
  matchSymbols,
  "\\p{Cased_Letter}"
);
testPropertyEscapes(
  /^\p{LC}+$/u,
  matchSymbols,
  "\\p{LC}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x0000D7,
    0x0000F7,
    0x0001BB,
    0x000294,
    0x00037E,
    0x000387,
    0x00038B,
    0x00038D,
    0x0003A2,
    0x0003F6,
    0x000530,
    0x0010C6,
    0x001D78,
    0x001F58,
    0x001F5A,
    0x001F5C,
    0x001F5E,
    0x001FB5,
    0x001FBD,
    0x001FC5,
    0x001FF5,
    0x002114,
    0x002125,
    0x002127,
    0x002129,
    0x00212E,
    0x002D26,
    0x00A770,
    0x00A78F,
    0x00A7D2,
    0x00A7D4,
    0x01057B,
    0x01058B,
    0x010593,
    0x010596,
    0x0105A2,
    0x0105B2,
    0x0105BA,
    0x01D455,
    0x01D49D,
    0x01D4AD,
    0x01D4BA,
    0x01D4BC,
    0x01D4C4,
    0x01D506,
    0x01D515,
    0x01D51D,
    0x01D53A,
    0x01D53F,
    0x01D545,
    0x01D551,
    0x01D6C1,
    0x01D6DB,
    0x01D6FB,
    0x01D715,
    0x01D735,
    0x01D74F,
    0x01D76F,
    0x01D789,
    0x01D7A9,
    0x01D7C3,
    0x01DF0A
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000040],
    [0x00005B, 0x000060],
    [0x00007B, 0x0000B4],
    [0x0000B6, 0x0000BF],
    [0x0001C0, 0x0001C3],
    [0x0002B0, 0x00036F],
    [0x000374, 0x000375],
    [0x000378, 0x00037A],
    [0x000380, 0x000385],
    [0x000482, 0x000489],
    [0x000557, 0x00055F],
    [0x000589, 0x00109F],
    [0x0010C8, 0x0010CC],
    [0x0010CE, 0x0010CF],
    [0x0010FB, 0x0010FC],
    [0x001100, 0x00139F],
    [0x0013F6, 0x0013F7],
    [0x0013FE, 0x001C7F],
    [0x001C89, 0x001C8F],
    [0x001CBB, 0x001CBC],
    [0x001CC0, 0x001CFF],
    [0x001D2C, 0x001D6A],
    [0x001D9B, 0x001DFF],
    [0x001F16, 0x001F17],
    [0x001F1E, 0x001F1F],
    [0x001F46, 0x001F47],
    [0x001F4E, 0x001F4F],
    [0x001F7E, 0x001F7F],
    [0x001FBF, 0x001FC1],
    [0x001FCD, 0x001FCF],
    [0x001FD4, 0x001FD5],
    [0x001FDC, 0x001FDF],
    [0x001FED, 0x001FF1],
    [0x001FFD, 0x002101],
    [0x002103, 0x002106],
    [0x002108, 0x002109],
    [0x002116, 0x002118],
    [0x00211E, 0x002123],
    [0x002135, 0x002138],
    [0x00213A, 0x00213B],
    [0x002140, 0x002144],
    [0x00214A, 0x00214D],
    [0x00214F, 0x002182],
    [0x002185, 0x002BFF],
    [0x002C7C, 0x002C7D],
    [0x002CE5, 0x002CEA],
    [0x002CEF, 0x002CF1],
    [0x002CF4, 0x002CFF],
    [0x002D28, 0x002D2C],
    [0x002D2E, 0x00A63F],
    [0x00A66E, 0x00A67F],
    [0x00A69C, 0x00A721],
    [0x00A788, 0x00A78A],
    [0x00A7CB, 0x00A7CF],
    [0x00A7DA, 0x00A7F4],
    [0x00A7F7, 0x00A7F9],
    [0x00A7FB, 0x00AB2F],
    [0x00AB5B, 0x00AB5F],
    [0x00AB69, 0x00AB6F],
    [0x00ABC0, 0x00DBFF],
    [0x00E000, 0x00FAFF],
    [0x00FB07, 0x00FB12],
    [0x00FB18, 0x00FF20],
    [0x00FF3B, 0x00FF40],
    [0x00FF5B, 0x0103FF],
    [0x010450, 0x0104AF],
    [0x0104D4, 0x0104D7],
    [0x0104FC, 0x01056F],
    [0x0105BD, 0x010C7F],
    [0x010CB3, 0x010CBF],
    [0x010CF3, 0x01189F],
    [0x0118E0, 0x016E3F],
    [0x016E80, 0x01D3FF],
    [0x01D4A0, 0x01D4A1],
    [0x01D4A3, 0x01D4A4],
    [0x01D4A7, 0x01D4A8],
    [0x01D50B, 0x01D50C],
    [0x01D547, 0x01D549],
    [0x01D6A6, 0x01D6A7],
    [0x01D7CC, 0x01DEFF],
    [0x01DF1F, 0x01E8FF],
    [0x01E944, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{General_Category=Cased_Letter}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Cased_Letter}"
);
testPropertyEscapes(
  /^\P{General_Category=LC}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=LC}"
);
testPropertyEscapes(
  /^\P{gc=Cased_Letter}+$/u,
  nonMatchSymbols,
  "\\P{gc=Cased_Letter}"
);
testPropertyEscapes(
  /^\P{gc=LC}+$/u,
  nonMatchSymbols,
  "\\P{gc=LC}"
);
testPropertyEscapes(
  /^\P{Cased_Letter}+$/u,
  nonMatchSymbols,
  "\\P{Cased_Letter}"
);
testPropertyEscapes(
  /^\P{LC}+$/u,
  nonMatchSymbols,
  "\\P{LC}"
);
