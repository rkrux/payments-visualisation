type MetricTypes = 'userWallets' | 'paymentMethods';
type MetricKeyValueMap = {
  [k: string]: number;
};

type DatePayments = {
  totalTranxCount: number;
  zeroConfTranxCount: number;
  zeroConfTranxTimeSecs: number;
  onchainConfTranxCount: number;
  onchainConfTranxTimeSecs: number;
  userWallets: MetricKeyValueMap;
  paymentMethods: MetricKeyValueMap;
};
type PaymentsByDate = Record<string, DatePayments>;

const paymentsByDate: PaymentsByDate = {
  '2021-01-01': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-01-02': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-01-03': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-01-04': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-01-05': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-01-06': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-01-07': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-01-08': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-01-09': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-01-10': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-01-11': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-01-12': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-01-13': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-01-14': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-01-15': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-01-16': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-01-17': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-01-18': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-01-19': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-01-20': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-01-21': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-01-22': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-01-23': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-01-24': {
    totalTranxCount: 1,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 1,
    onchainConfTranxTimeSecs: 9276330,
    userWallets: {
      Edge: 1,
    },
    paymentMethods: {
      'USDT-ERC20': 1,
    },
  },
  '2021-01-25': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-01-26': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-01-27': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-01-28': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-01-29': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-01-30': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-01-31': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-02-01': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-02-02': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-02-03': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-02-04': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-02-05': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-02-06': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-02-07': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-02-08': {
    totalTranxCount: 118,
    zeroConfTranxCount: 33,
    zeroConfTranxTimeSecs: 12528000,
    onchainConfTranxCount: 85,
    onchainConfTranxTimeSecs: 81808308,
    userWallets: {
      Edge: 118,
    },
    paymentMethods: {
      'USDT-ERC20': 118,
    },
  },
  '2021-02-09': {
    totalTranxCount: 867,
    zeroConfTranxCount: 519,
    zeroConfTranxTimeSecs: 6998400,
    onchainConfTranxCount: 332,
    onchainConfTranxTimeSecs: 33420178,
    userWallets: {
      Edge: 867,
    },
    paymentMethods: {
      'USDT-ERC20': 867,
    },
  },
  '2021-02-10': {
    totalTranxCount: 1361,
    zeroConfTranxCount: 981,
    zeroConfTranxTimeSecs: 4320000,
    onchainConfTranxCount: 374,
    onchainConfTranxTimeSecs: 8579103,
    userWallets: {
      Edge: 1361,
    },
    paymentMethods: {
      'USDT-ERC20': 1361,
    },
  },
  '2021-02-11': {
    totalTranxCount: 1307,
    zeroConfTranxCount: 850,
    zeroConfTranxTimeSecs: 3628800,
    onchainConfTranxCount: 447,
    onchainConfTranxTimeSecs: 25242278,
    userWallets: {
      Edge: 368,
      null: 1,
      Zap: 938,
    },
    paymentMethods: {
      'USDT-ERC20': 368,
      x: 1,
      Lightning: 938,
    },
  },
  '2021-02-12': {
    totalTranxCount: 1187,
    zeroConfTranxCount: 800,
    zeroConfTranxTimeSecs: 3196800,
    onchainConfTranxCount: 378,
    onchainConfTranxTimeSecs: 20012643,
    userWallets: {
      Zap: 1187,
    },
    paymentMethods: {
      Lightning: 1187,
    },
  },
  '2021-02-13': {
    totalTranxCount: 1306,
    zeroConfTranxCount: 1006,
    zeroConfTranxTimeSecs: 1728000,
    onchainConfTranxCount: 293,
    onchainConfTranxTimeSecs: 2462601,
    userWallets: {
      Zap: 1306,
    },
    paymentMethods: {
      Lightning: 1306,
    },
  },
  '2021-02-14': {
    totalTranxCount: 1351,
    zeroConfTranxCount: 1022,
    zeroConfTranxTimeSecs: 86400,
    onchainConfTranxCount: 328,
    onchainConfTranxTimeSecs: 2068010,
    userWallets: {
      Zap: 1351,
    },
    paymentMethods: {
      Lightning: 1351,
    },
  },
  '2021-02-15': {
    totalTranxCount: 1304,
    zeroConfTranxCount: 923,
    zeroConfTranxTimeSecs: 172800,
    onchainConfTranxCount: 381,
    onchainConfTranxTimeSecs: 16827416,
    userWallets: {
      Zap: 1304,
    },
    paymentMethods: {
      Lightning: 1304,
    },
  },
  '2021-02-16': {
    totalTranxCount: 1310,
    zeroConfTranxCount: 928,
    zeroConfTranxTimeSecs: 259200,
    onchainConfTranxCount: 380,
    onchainConfTranxTimeSecs: 38163205,
    userWallets: {
      Zap: 1310,
    },
    paymentMethods: {
      Lightning: 1310,
    },
  },
  '2021-02-17': {
    totalTranxCount: 1246,
    zeroConfTranxCount: 935,
    zeroConfTranxTimeSecs: 432000,
    onchainConfTranxCount: 311,
    onchainConfTranxTimeSecs: 24219639,
    userWallets: {
      Zap: 1246,
    },
    paymentMethods: {
      Lightning: 1246,
    },
  },
  '2021-02-18': {
    totalTranxCount: 1235,
    zeroConfTranxCount: 944,
    zeroConfTranxTimeSecs: 432000,
    onchainConfTranxCount: 287,
    onchainConfTranxTimeSecs: 19863343,
    userWallets: {
      Zap: 1235,
    },
    paymentMethods: {
      Lightning: 1235,
    },
  },
  '2021-02-19': {
    totalTranxCount: 1293,
    zeroConfTranxCount: 983,
    zeroConfTranxTimeSecs: 1728000,
    onchainConfTranxCount: 307,
    onchainConfTranxTimeSecs: 15882600,
    userWallets: {
      Zap: 122,
      null: 1171,
    },
    paymentMethods: {
      Lightning: 122,
      x: 1171,
    },
  },
  '2021-02-20': {
    totalTranxCount: 1212,
    zeroConfTranxCount: 898,
    zeroConfTranxTimeSecs: 432000,
    onchainConfTranxCount: 313,
    onchainConfTranxTimeSecs: 25705396,
    userWallets: {
      null: 1212,
    },
    paymentMethods: {
      x: 1212,
    },
  },
  '2021-02-21': {
    totalTranxCount: 1176,
    zeroConfTranxCount: 897,
    zeroConfTranxTimeSecs: 518400,
    onchainConfTranxCount: 279,
    onchainConfTranxTimeSecs: 11807925,
    userWallets: {
      null: 1176,
    },
    paymentMethods: {
      x: 1176,
    },
  },
  '2021-02-22': {
    totalTranxCount: 1302,
    zeroConfTranxCount: 896,
    zeroConfTranxTimeSecs: 1382400,
    onchainConfTranxCount: 405,
    onchainConfTranxTimeSecs: 37341238,
    userWallets: {
      null: 1302,
    },
    paymentMethods: {
      x: 1302,
    },
  },
  '2021-02-23': {
    totalTranxCount: 1096,
    zeroConfTranxCount: 776,
    zeroConfTranxTimeSecs: 1209600,
    onchainConfTranxCount: 319,
    onchainConfTranxTimeSecs: 18911739,
    userWallets: {
      null: 1096,
    },
    paymentMethods: {
      x: 1096,
    },
  },
  '2021-02-24': {
    totalTranxCount: 1072,
    zeroConfTranxCount: 827,
    zeroConfTranxTimeSecs: 172800,
    onchainConfTranxCount: 244,
    onchainConfTranxTimeSecs: 5302979,
    userWallets: {
      null: 1072,
    },
    paymentMethods: {
      x: 1072,
    },
  },
  '2021-02-25': {
    totalTranxCount: 1204,
    zeroConfTranxCount: 843,
    zeroConfTranxTimeSecs: 345600,
    onchainConfTranxCount: 360,
    onchainConfTranxTimeSecs: 13966455,
    userWallets: {
      null: 1204,
    },
    paymentMethods: {
      x: 1204,
    },
  },
  '2021-02-26': {
    totalTranxCount: 1129,
    zeroConfTranxCount: 808,
    zeroConfTranxTimeSecs: 172800,
    onchainConfTranxCount: 318,
    onchainConfTranxTimeSecs: 3910674,
    userWallets: {
      null: 1129,
    },
    paymentMethods: {
      x: 1129,
    },
  },
  '2021-02-27': {
    totalTranxCount: 1258,
    zeroConfTranxCount: 634,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 622,
    onchainConfTranxTimeSecs: 12238150,
    userWallets: {
      null: 639,
      Rainbow: 619,
    },
    paymentMethods: {
      x: 639,
      BTC: 619,
    },
  },
  '2021-02-28': {
    totalTranxCount: 1250,
    zeroConfTranxCount: 478,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 771,
    onchainConfTranxTimeSecs: 5955123,
    userWallets: {
      Rainbow: 1250,
    },
    paymentMethods: {
      BTC: 1250,
    },
  },
  '2021-03-01': {
    totalTranxCount: 1084,
    zeroConfTranxCount: 684,
    zeroConfTranxTimeSecs: 345600,
    onchainConfTranxCount: 400,
    onchainConfTranxTimeSecs: 6059435,
    userWallets: {
      Rainbow: 1084,
    },
    paymentMethods: {
      BTC: 1084,
    },
  },
  '2021-03-02': {
    totalTranxCount: 1110,
    zeroConfTranxCount: 775,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 335,
    onchainConfTranxTimeSecs: 2583178,
    userWallets: {
      Rainbow: 1110,
    },
    paymentMethods: {
      BTC: 1110,
    },
  },
  '2021-03-03': {
    totalTranxCount: 1230,
    zeroConfTranxCount: 897,
    zeroConfTranxTimeSecs: 259200,
    onchainConfTranxCount: 333,
    onchainConfTranxTimeSecs: 7162104,
    userWallets: {
      Rainbow: 1230,
    },
    paymentMethods: {
      BTC: 1230,
    },
  },
  '2021-03-04': {
    totalTranxCount: 1151,
    zeroConfTranxCount: 873,
    zeroConfTranxTimeSecs: 86400,
    onchainConfTranxCount: 277,
    onchainConfTranxTimeSecs: 3522582,
    userWallets: {
      Rainbow: 1151,
    },
    paymentMethods: {
      BTC: 1151,
    },
  },
  '2021-03-05': {
    totalTranxCount: 1136,
    zeroConfTranxCount: 823,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 313,
    onchainConfTranxTimeSecs: 2400458,
    userWallets: {
      Rainbow: 1136,
    },
    paymentMethods: {
      BTC: 1136,
    },
  },
  '2021-03-06': {
    totalTranxCount: 1207,
    zeroConfTranxCount: 694,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 513,
    onchainConfTranxTimeSecs: 18739676,
    userWallets: {
      Rainbow: 1207,
    },
    paymentMethods: {
      BTC: 1207,
    },
  },
  '2021-03-07': {
    totalTranxCount: 1406,
    zeroConfTranxCount: 665,
    zeroConfTranxTimeSecs: 86400,
    onchainConfTranxCount: 739,
    onchainConfTranxTimeSecs: 7058435,
    userWallets: {
      Rainbow: 1212,
      null: 1,
      Mew: 193,
    },
    paymentMethods: {
      BTC: 1212,
      x: 1,
      ETH: 193,
    },
  },
  '2021-03-08': {
    totalTranxCount: 891,
    zeroConfTranxCount: 506,
    zeroConfTranxTimeSecs: 345600,
    onchainConfTranxCount: 385,
    onchainConfTranxTimeSecs: 19784920,
    userWallets: {
      Mew: 891,
    },
    paymentMethods: {
      ETH: 891,
    },
  },
  '2021-03-09': {
    totalTranxCount: 1128,
    zeroConfTranxCount: 636,
    zeroConfTranxTimeSecs: 172800,
    onchainConfTranxCount: 491,
    onchainConfTranxTimeSecs: 21208859,
    userWallets: {
      Mew: 1128,
    },
    paymentMethods: {
      ETH: 1128,
    },
  },
  '2021-03-10': {
    totalTranxCount: 1356,
    zeroConfTranxCount: 835,
    zeroConfTranxTimeSecs: 86400,
    onchainConfTranxCount: 521,
    onchainConfTranxTimeSecs: 17227407,
    userWallets: {
      Mew: 1356,
    },
    paymentMethods: {
      ETH: 1356,
    },
  },
  '2021-03-11': {
    totalTranxCount: 1312,
    zeroConfTranxCount: 787,
    zeroConfTranxTimeSecs: 86400,
    onchainConfTranxCount: 524,
    onchainConfTranxTimeSecs: 7974287,
    userWallets: {
      Mew: 1312,
    },
    paymentMethods: {
      ETH: 1312,
    },
  },
  '2021-03-12': {
    totalTranxCount: 1316,
    zeroConfTranxCount: 780,
    zeroConfTranxTimeSecs: 172800,
    onchainConfTranxCount: 536,
    onchainConfTranxTimeSecs: 10198400,
    userWallets: {
      Mew: 1316,
    },
    paymentMethods: {
      ETH: 1316,
    },
  },
  '2021-03-13': {
    totalTranxCount: 1244,
    zeroConfTranxCount: 670,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 573,
    onchainConfTranxTimeSecs: 5950631,
    userWallets: {
      Mew: 1244,
    },
    paymentMethods: {
      ETH: 1244,
    },
  },
  '2021-03-14': {
    totalTranxCount: 1474,
    zeroConfTranxCount: 505,
    zeroConfTranxTimeSecs: 86400,
    onchainConfTranxCount: 967,
    onchainConfTranxTimeSecs: 1808112,
    userWallets: {
      Mew: 1474,
    },
    paymentMethods: {
      ETH: 1474,
    },
  },
  '2021-03-15': {
    totalTranxCount: 1336,
    zeroConfTranxCount: 634,
    zeroConfTranxTimeSecs: 86400,
    onchainConfTranxCount: 701,
    onchainConfTranxTimeSecs: 4021720,
    userWallets: {
      Mew: 1085,
      null: 1,
      Trust: 250,
    },
    paymentMethods: {
      ETH: 1085,
      x: 1,
      BTC: 250,
    },
  },
  '2021-03-16': {
    totalTranxCount: 1203,
    zeroConfTranxCount: 824,
    zeroConfTranxTimeSecs: 172800,
    onchainConfTranxCount: 377,
    onchainConfTranxTimeSecs: 3357067,
    userWallets: {
      Trust: 1203,
    },
    paymentMethods: {
      BTC: 1203,
    },
  },
  '2021-03-17': {
    totalTranxCount: 1222,
    zeroConfTranxCount: 829,
    zeroConfTranxTimeSecs: 172800,
    onchainConfTranxCount: 383,
    onchainConfTranxTimeSecs: 5415914,
    userWallets: {
      Trust: 1222,
    },
    paymentMethods: {
      BTC: 1222,
    },
  },
  '2021-03-18': {
    totalTranxCount: 1209,
    zeroConfTranxCount: 920,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 288,
    onchainConfTranxTimeSecs: 2861142,
    userWallets: {
      Trust: 1209,
    },
    paymentMethods: {
      BTC: 1209,
    },
  },
  '2021-03-19': {
    totalTranxCount: 1237,
    zeroConfTranxCount: 806,
    zeroConfTranxTimeSecs: 86400,
    onchainConfTranxCount: 428,
    onchainConfTranxTimeSecs: 4486740,
    userWallets: {
      Trust: 1237,
    },
    paymentMethods: {
      BTC: 1237,
    },
  },
  '2021-03-20': {
    totalTranxCount: 1540,
    zeroConfTranxCount: 634,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 905,
    onchainConfTranxTimeSecs: 2949750,
    userWallets: {
      Trust: 1540,
    },
    paymentMethods: {
      BTC: 1540,
    },
  },
  '2021-03-21': {
    totalTranxCount: 1414,
    zeroConfTranxCount: 574,
    zeroConfTranxTimeSecs: 172800,
    onchainConfTranxCount: 840,
    onchainConfTranxTimeSecs: 5079248,
    userWallets: {
      Trust: 1414,
    },
    paymentMethods: {
      BTC: 1414,
    },
  },
  '2021-03-22': {
    totalTranxCount: 1441,
    zeroConfTranxCount: 865,
    zeroConfTranxTimeSecs: 691200,
    onchainConfTranxCount: 576,
    onchainConfTranxTimeSecs: 2985708,
    userWallets: {
      Trust: 1441,
    },
    paymentMethods: {
      BTC: 1441,
    },
  },
  '2021-03-23': {
    totalTranxCount: 1395,
    zeroConfTranxCount: 880,
    zeroConfTranxTimeSecs: 172800,
    onchainConfTranxCount: 512,
    onchainConfTranxTimeSecs: 8517657,
    userWallets: {
      Trust: 483,
      null: 1,
      Guarda: 911,
    },
    paymentMethods: {
      BTC: 1394,
      x: 1,
    },
  },
  '2021-03-24': {
    totalTranxCount: 1501,
    zeroConfTranxCount: 1026,
    zeroConfTranxTimeSecs: 86400,
    onchainConfTranxCount: 475,
    onchainConfTranxTimeSecs: 18376983,
    userWallets: {
      Guarda: 1501,
    },
    paymentMethods: {
      BTC: 1501,
    },
  },
  '2021-03-25': {
    totalTranxCount: 1814,
    zeroConfTranxCount: 1033,
    zeroConfTranxTimeSecs: 345600,
    onchainConfTranxCount: 780,
    onchainConfTranxTimeSecs: 2886498,
    userWallets: {
      Guarda: 1814,
    },
    paymentMethods: {
      BTC: 1814,
    },
  },
  '2021-03-26': {
    totalTranxCount: 1255,
    zeroConfTranxCount: 950,
    zeroConfTranxTimeSecs: 777600,
    onchainConfTranxCount: 304,
    onchainConfTranxTimeSecs: 2762394,
    userWallets: {
      Guarda: 1255,
    },
    paymentMethods: {
      BTC: 1255,
    },
  },
  '2021-03-27': {
    totalTranxCount: 1715,
    zeroConfTranxCount: 993,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 720,
    onchainConfTranxTimeSecs: 1821864,
    userWallets: {
      Guarda: 1715,
    },
    paymentMethods: {
      BTC: 1715,
    },
  },
  '2021-03-28': {
    totalTranxCount: 1355,
    zeroConfTranxCount: 913,
    zeroConfTranxTimeSecs: 259200,
    onchainConfTranxCount: 441,
    onchainConfTranxTimeSecs: 1937405,
    userWallets: {
      Guarda: 1355,
    },
    paymentMethods: {
      BTC: 1355,
    },
  },
  '2021-03-29': {
    totalTranxCount: 1238,
    zeroConfTranxCount: 884,
    zeroConfTranxTimeSecs: 1209600,
    onchainConfTranxCount: 350,
    onchainConfTranxTimeSecs: 1625710,
    userWallets: {
      Guarda: 1238,
    },
    paymentMethods: {
      BTC: 1238,
    },
  },
  '2021-03-30': {
    totalTranxCount: 1279,
    zeroConfTranxCount: 995,
    zeroConfTranxTimeSecs: 518400,
    onchainConfTranxCount: 283,
    onchainConfTranxTimeSecs: 1152843,
    userWallets: {
      Guarda: 210,
      null: 1,
      Metamask: 1068,
    },
    paymentMethods: {
      BTC: 210,
      x: 1,
      DOGE: 1068,
    },
  },
  '2021-03-31': {
    totalTranxCount: 1478,
    zeroConfTranxCount: 1058,
    zeroConfTranxTimeSecs: 432000,
    onchainConfTranxCount: 418,
    onchainConfTranxTimeSecs: 27068338,
    userWallets: {
      Metamask: 1478,
    },
    paymentMethods: {
      DOGE: 1478,
    },
  },
  '2021-04-01': {
    totalTranxCount: 1589,
    zeroConfTranxCount: 1176,
    zeroConfTranxTimeSecs: 259200,
    onchainConfTranxCount: 412,
    onchainConfTranxTimeSecs: 6324915,
    userWallets: {
      Metamask: 1589,
    },
    paymentMethods: {
      DOGE: 1589,
    },
  },
  '2021-04-02': {
    totalTranxCount: 1309,
    zeroConfTranxCount: 1053,
    zeroConfTranxTimeSecs: 345600,
    onchainConfTranxCount: 256,
    onchainConfTranxTimeSecs: 3524703,
    userWallets: {
      Metamask: 1309,
    },
    paymentMethods: {
      DOGE: 1309,
    },
  },
  '2021-04-03': {
    totalTranxCount: 1259,
    zeroConfTranxCount: 989,
    zeroConfTranxTimeSecs: 86400,
    onchainConfTranxCount: 269,
    onchainConfTranxTimeSecs: 3556970,
    userWallets: {
      Metamask: 1259,
    },
    paymentMethods: {
      DOGE: 1259,
    },
  },
  '2021-04-04': {
    totalTranxCount: 1168,
    zeroConfTranxCount: 989,
    zeroConfTranxTimeSecs: 86400,
    onchainConfTranxCount: 178,
    onchainConfTranxTimeSecs: 665553,
    userWallets: {
      Metamask: 1168,
    },
    paymentMethods: {
      DOGE: 1168,
    },
  },
  '2021-04-05': {
    totalTranxCount: 1341,
    zeroConfTranxCount: 1058,
    zeroConfTranxTimeSecs: 172800,
    onchainConfTranxCount: 283,
    onchainConfTranxTimeSecs: 1287541,
    userWallets: {
      Metamask: 1341,
    },
    paymentMethods: {
      DOGE: 1341,
    },
  },
  '2021-04-06': {
    totalTranxCount: 1272,
    zeroConfTranxCount: 1036,
    zeroConfTranxTimeSecs: 86400,
    onchainConfTranxCount: 235,
    onchainConfTranxTimeSecs: 5759841,
    userWallets: {
      Metamask: 787,
      null: 1,
      Muun: 484,
    },
    paymentMethods: {
      DOGE: 787,
      x: 1,
      Lightning: 484,
    },
  },
  '2021-04-07': {
    totalTranxCount: 1180,
    zeroConfTranxCount: 970,
    zeroConfTranxTimeSecs: 259200,
    onchainConfTranxCount: 205,
    onchainConfTranxTimeSecs: 748223,
    userWallets: {
      Muun: 1180,
    },
    paymentMethods: {
      Lightning: 1180,
    },
  },
  '2021-04-08': {
    totalTranxCount: 1300,
    zeroConfTranxCount: 1017,
    zeroConfTranxTimeSecs: 86400,
    onchainConfTranxCount: 283,
    onchainConfTranxTimeSecs: 2358393,
    userWallets: {
      Muun: 1300,
    },
    paymentMethods: {
      Lightning: 1300,
    },
  },
  '2021-04-09': {
    totalTranxCount: 1313,
    zeroConfTranxCount: 1040,
    zeroConfTranxTimeSecs: 432000,
    onchainConfTranxCount: 273,
    onchainConfTranxTimeSecs: 1113259,
    userWallets: {
      Muun: 1313,
    },
    paymentMethods: {
      Lightning: 1313,
    },
  },
  '2021-04-10': {
    totalTranxCount: 1286,
    zeroConfTranxCount: 985,
    zeroConfTranxTimeSecs: 86400,
    onchainConfTranxCount: 300,
    onchainConfTranxTimeSecs: 5444529,
    userWallets: {
      Muun: 1286,
    },
    paymentMethods: {
      Lightning: 1286,
    },
  },
  '2021-04-11': {
    totalTranxCount: 1208,
    zeroConfTranxCount: 866,
    zeroConfTranxTimeSecs: 172800,
    onchainConfTranxCount: 340,
    onchainConfTranxTimeSecs: 4820990,
    userWallets: {
      Muun: 1208,
    },
    paymentMethods: {
      Lightning: 1208,
    },
  },
  '2021-04-12': {
    totalTranxCount: 1294,
    zeroConfTranxCount: 1032,
    zeroConfTranxTimeSecs: 172800,
    onchainConfTranxCount: 261,
    onchainConfTranxTimeSecs: 3217205,
    userWallets: {
      Muun: 1294,
    },
    paymentMethods: {
      Lightning: 1294,
    },
  },
  '2021-04-13': {
    totalTranxCount: 1320,
    zeroConfTranxCount: 1079,
    zeroConfTranxTimeSecs: 259200,
    onchainConfTranxCount: 236,
    onchainConfTranxTimeSecs: 15188007,
    userWallets: {
      Muun: 1320,
    },
    paymentMethods: {
      Lightning: 1320,
    },
  },
  '2021-04-14': {
    totalTranxCount: 1203,
    zeroConfTranxCount: 951,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 250,
    onchainConfTranxTimeSecs: 7500267,
    userWallets: {
      Muun: 614,
      null: 1,
      Klever: 588,
    },
    paymentMethods: {
      Lightning: 614,
      x: 1,
      'USTD-TRC20': 588,
    },
  },
  '2021-04-15': {
    totalTranxCount: 1244,
    zeroConfTranxCount: 1017,
    zeroConfTranxTimeSecs: 86400,
    onchainConfTranxCount: 226,
    onchainConfTranxTimeSecs: 11315530,
    userWallets: {
      Klever: 1244,
    },
    paymentMethods: {
      'USTD-TRC20': 1244,
    },
  },
  '2021-04-16': {
    totalTranxCount: 1133,
    zeroConfTranxCount: 852,
    zeroConfTranxTimeSecs: 259200,
    onchainConfTranxCount: 275,
    onchainConfTranxTimeSecs: 29100323,
    userWallets: {
      Klever: 1133,
    },
    paymentMethods: {
      'USTD-TRC20': 1133,
    },
  },
  '2021-04-17': {
    totalTranxCount: 940,
    zeroConfTranxCount: 672,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 258,
    onchainConfTranxTimeSecs: 20325531,
    userWallets: {
      Klever: 940,
    },
    paymentMethods: {
      'USTD-TRC20': 940,
    },
  },
  '2021-04-18': {
    totalTranxCount: 787,
    zeroConfTranxCount: 368,
    zeroConfTranxTimeSecs: 259200,
    onchainConfTranxCount: 415,
    onchainConfTranxTimeSecs: 17675973,
    userWallets: {
      Klever: 787,
    },
    paymentMethods: {
      'USTD-TRC20': 787,
    },
  },
  '2021-04-19': {
    totalTranxCount: 877,
    zeroConfTranxCount: 668,
    zeroConfTranxTimeSecs: 950400,
    onchainConfTranxCount: 206,
    onchainConfTranxTimeSecs: 24186268,
    userWallets: {
      Klever: 877,
    },
    paymentMethods: {
      'USTD-TRC20': 877,
    },
  },
  '2021-04-20': {
    totalTranxCount: 808,
    zeroConfTranxCount: 608,
    zeroConfTranxTimeSecs: 604800,
    onchainConfTranxCount: 198,
    onchainConfTranxTimeSecs: 10867444,
    userWallets: {
      Klever: 808,
    },
    paymentMethods: {
      'USTD-TRC20': 808,
    },
  },
  '2021-04-21': {
    totalTranxCount: 802,
    zeroConfTranxCount: 568,
    zeroConfTranxTimeSecs: 1900800,
    onchainConfTranxCount: 233,
    onchainConfTranxTimeSecs: 8514191,
    userWallets: {
      Klever: 802,
    },
    paymentMethods: {
      'USTD-TRC20': 802,
    },
  },
  '2021-04-22': {
    totalTranxCount: 773,
    zeroConfTranxCount: 605,
    zeroConfTranxTimeSecs: 2592000,
    onchainConfTranxCount: 168,
    onchainConfTranxTimeSecs: 3799670,
    userWallets: {
      Klever: 773,
    },
    paymentMethods: {
      'USTD-TRC20': 773,
    },
  },
  '2021-04-23': {
    totalTranxCount: 820,
    zeroConfTranxCount: 655,
    zeroConfTranxTimeSecs: 691200,
    onchainConfTranxCount: 165,
    onchainConfTranxTimeSecs: 2754053,
    userWallets: {
      Klever: 820,
    },
    paymentMethods: {
      'USTD-TRC20': 820,
    },
  },
  '2021-04-24': {
    totalTranxCount: 904,
    zeroConfTranxCount: 738,
    zeroConfTranxTimeSecs: 518400,
    onchainConfTranxCount: 165,
    onchainConfTranxTimeSecs: 1431612,
    userWallets: {
      Klever: 904,
    },
    paymentMethods: {
      'USTD-TRC20': 904,
    },
  },
  '2021-04-25': {
    totalTranxCount: 1080,
    zeroConfTranxCount: 529,
    zeroConfTranxTimeSecs: 518400,
    onchainConfTranxCount: 551,
    onchainConfTranxTimeSecs: 1735101,
    userWallets: {
      Klever: 323,
      null: 1,
      Ledger: 756,
    },
    paymentMethods: {
      'USTD-TRC20': 323,
      x: 1,
      'USDT-ERC20': 756,
    },
  },
  '2021-04-26': {
    totalTranxCount: 1012,
    zeroConfTranxCount: 731,
    zeroConfTranxTimeSecs: 777600,
    onchainConfTranxCount: 280,
    onchainConfTranxTimeSecs: 7853077,
    userWallets: {
      Ledger: 1012,
    },
    paymentMethods: {
      'USDT-ERC20': 1012,
    },
  },
  '2021-04-27': {
    totalTranxCount: 1067,
    zeroConfTranxCount: 867,
    zeroConfTranxTimeSecs: 172800,
    onchainConfTranxCount: 198,
    onchainConfTranxTimeSecs: 1890678,
    userWallets: {
      Ledger: 1067,
    },
    paymentMethods: {
      'USDT-ERC20': 1067,
    },
  },
  '2021-04-28': {
    totalTranxCount: 1260,
    zeroConfTranxCount: 978,
    zeroConfTranxTimeSecs: 691200,
    onchainConfTranxCount: 282,
    onchainConfTranxTimeSecs: 3781110,
    userWallets: {
      Ledger: 1260,
    },
    paymentMethods: {
      'USDT-ERC20': 1260,
    },
  },
  '2021-04-29': {
    totalTranxCount: 1095,
    zeroConfTranxCount: 860,
    zeroConfTranxTimeSecs: 172800,
    onchainConfTranxCount: 235,
    onchainConfTranxTimeSecs: 2519360,
    userWallets: {
      Ledger: 1095,
    },
    paymentMethods: {
      'USDT-ERC20': 1095,
    },
  },
  '2021-04-30': {
    totalTranxCount: 1157,
    zeroConfTranxCount: 891,
    zeroConfTranxTimeSecs: 345600,
    onchainConfTranxCount: 265,
    onchainConfTranxTimeSecs: 1344753,
    userWallets: {
      Ledger: 1157,
    },
    paymentMethods: {
      'USDT-ERC20': 1157,
    },
  },
  '2021-05-01': {
    totalTranxCount: 1261,
    zeroConfTranxCount: 923,
    zeroConfTranxTimeSecs: 345600,
    onchainConfTranxCount: 338,
    onchainConfTranxTimeSecs: 1099073,
    userWallets: {
      Ledger: 1261,
    },
    paymentMethods: {
      'USDT-ERC20': 1261,
    },
  },
  '2021-05-02': {
    totalTranxCount: 1136,
    zeroConfTranxCount: 838,
    zeroConfTranxTimeSecs: 172800,
    onchainConfTranxCount: 296,
    onchainConfTranxTimeSecs: 1516803,
    userWallets: {
      Ledger: 1136,
    },
    paymentMethods: {
      'USDT-ERC20': 1136,
    },
  },
  '2021-05-03': {
    totalTranxCount: 1345,
    zeroConfTranxCount: 1026,
    zeroConfTranxTimeSecs: 259200,
    onchainConfTranxCount: 318,
    onchainConfTranxTimeSecs: 1038194,
    userWallets: {
      Ledger: 1255,
      null: 1,
      Exodus: 89,
    },
    paymentMethods: {
      'USDT-ERC20': 1255,
      x: 1,
      ETH: 89,
    },
  },
  '2021-05-04': {
    totalTranxCount: 1265,
    zeroConfTranxCount: 969,
    zeroConfTranxTimeSecs: 86400,
    onchainConfTranxCount: 294,
    onchainConfTranxTimeSecs: 1203884,
    userWallets: {
      Exodus: 1265,
    },
    paymentMethods: {
      ETH: 1265,
    },
  },
  '2021-05-05': {
    totalTranxCount: 1217,
    zeroConfTranxCount: 953,
    zeroConfTranxTimeSecs: 86400,
    onchainConfTranxCount: 248,
    onchainConfTranxTimeSecs: 1469136,
    userWallets: {
      Exodus: 1217,
    },
    paymentMethods: {
      ETH: 1217,
    },
  },
  '2021-05-06': {
    totalTranxCount: 1314,
    zeroConfTranxCount: 935,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 344,
    onchainConfTranxTimeSecs: 2565036,
    userWallets: {
      Exodus: 1314,
    },
    paymentMethods: {
      ETH: 1314,
    },
  },
  '2021-05-07': {
    totalTranxCount: 1405,
    zeroConfTranxCount: 919,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 460,
    onchainConfTranxTimeSecs: 3805068,
    userWallets: {
      Exodus: 1405,
    },
    paymentMethods: {
      ETH: 1405,
    },
  },
  '2021-05-08': {
    totalTranxCount: 1305,
    zeroConfTranxCount: 826,
    zeroConfTranxTimeSecs: 86400,
    onchainConfTranxCount: 463,
    onchainConfTranxTimeSecs: 2425352,
    userWallets: {
      Exodus: 1305,
    },
    paymentMethods: {
      ETH: 1305,
    },
  },
  '2021-05-09': {
    totalTranxCount: 1229,
    zeroConfTranxCount: 730,
    zeroConfTranxTimeSecs: 172800,
    onchainConfTranxCount: 490,
    onchainConfTranxTimeSecs: 829856,
    userWallets: {
      Exodus: 1229,
    },
    paymentMethods: {
      ETH: 1229,
    },
  },
  '2021-05-10': {
    totalTranxCount: 1173,
    zeroConfTranxCount: 772,
    zeroConfTranxTimeSecs: 86400,
    onchainConfTranxCount: 623,
    onchainConfTranxTimeSecs: 1211961,
    userWallets: {
      Exodus: 1173,
    },
    paymentMethods: {
      ETH: 1173,
    },
  },
  '2021-05-11': {
    totalTranxCount: 1215,
    zeroConfTranxCount: 799,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 1215,
    onchainConfTranxTimeSecs: 731645,
    userWallets: {
      Exodus: 1002,
      null: 1,
      Blockchain: 212,
    },
    paymentMethods: {
      ETH: 1002,
      x: 1,
      BTC: 212,
    },
  },
  '2021-05-12': {
    totalTranxCount: 1286,
    zeroConfTranxCount: 1035,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 1286,
    onchainConfTranxTimeSecs: 362036,
    userWallets: {
      Blockchain: 1286,
    },
    paymentMethods: {
      BTC: 1286,
    },
  },
  '2021-05-13': {
    totalTranxCount: 1130,
    zeroConfTranxCount: 919,
    zeroConfTranxTimeSecs: 86400,
    onchainConfTranxCount: 1130,
    onchainConfTranxTimeSecs: 756730,
    userWallets: {
      Blockchain: 1130,
    },
    paymentMethods: {
      BTC: 1130,
    },
  },
  '2021-05-14': {
    totalTranxCount: 1127,
    zeroConfTranxCount: 880,
    zeroConfTranxTimeSecs: 691200,
    onchainConfTranxCount: 1127,
    onchainConfTranxTimeSecs: 2157935,
    userWallets: {
      Blockchain: 1127,
    },
    paymentMethods: {
      BTC: 1127,
    },
  },
  '2021-05-15': {
    totalTranxCount: 976,
    zeroConfTranxCount: 802,
    zeroConfTranxTimeSecs: 172800,
    onchainConfTranxCount: 976,
    onchainConfTranxTimeSecs: 728525,
    userWallets: {
      Blockchain: 976,
    },
    paymentMethods: {
      BTC: 976,
    },
  },
  '2021-05-16': {
    totalTranxCount: 1070,
    zeroConfTranxCount: 874,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 1070,
    onchainConfTranxTimeSecs: 300629,
    userWallets: {
      Blockchain: 1070,
    },
    paymentMethods: {
      BTC: 1070,
    },
  },
  '2021-05-17': {
    totalTranxCount: 1058,
    zeroConfTranxCount: 827,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 1058,
    onchainConfTranxTimeSecs: 1528804,
    userWallets: {
      Blockchain: 1058,
    },
    paymentMethods: {
      BTC: 1058,
    },
  },
  '2021-05-18': {
    totalTranxCount: 1058,
    zeroConfTranxCount: 816,
    zeroConfTranxTimeSecs: 518400,
    onchainConfTranxCount: 1057,
    onchainConfTranxTimeSecs: 1234181,
    userWallets: {
      Blockchain: 1058,
    },
    paymentMethods: {
      BTC: 1058,
    },
  },
  '2021-05-19': {
    totalTranxCount: 917,
    zeroConfTranxCount: 663,
    zeroConfTranxTimeSecs: 1123200,
    onchainConfTranxCount: 917,
    onchainConfTranxTimeSecs: 3185491,
    userWallets: {
      Blockchain: 917,
    },
    paymentMethods: {
      BTC: 917,
    },
  },
  '2021-05-20': {
    totalTranxCount: 924,
    zeroConfTranxCount: 723,
    zeroConfTranxTimeSecs: 864000,
    onchainConfTranxCount: 923,
    onchainConfTranxTimeSecs: 1135940,
    userWallets: {
      Blockchain: 924,
    },
    paymentMethods: {
      BTC: 924,
    },
  },
  '2021-05-21': {
    totalTranxCount: 241,
    zeroConfTranxCount: 183,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 241,
    onchainConfTranxTimeSecs: 48974,
    userWallets: {
      Blockchain: 241,
    },
    paymentMethods: {
      BTC: 241,
    },
  },
  '2021-05-22': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-05-23': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-05-24': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-05-25': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-05-26': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-05-27': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-05-28': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-05-29': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-05-30': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
  '2021-05-31': {
    totalTranxCount: 0,
    zeroConfTranxCount: 0,
    zeroConfTranxTimeSecs: 0,
    onchainConfTranxCount: 0,
    onchainConfTranxTimeSecs: 0,
    userWallets: {},
    paymentMethods: {},
  },
};

export type { MetricTypes, MetricKeyValueMap, DatePayments, PaymentsByDate };
export { paymentsByDate };
