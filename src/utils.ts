export const getFormattedNumber = (locale, value) =>
  new Intl.NumberFormat(locale).format(value);

export const getFormattedPercent = (locale, value) =>
  new Intl.NumberFormat(locale, { maximumFractionDigits: 2 }).format(value);

export const getBodyStyleByKey = (key) =>
  getComputedStyle(document.body).getPropertyValue(key);
