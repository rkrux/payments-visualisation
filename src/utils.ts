export const getFormattedValue = (locale, value) =>
  new Intl.NumberFormat(locale).format(value);

export const getBodyStyleByKey = (key) =>
  getComputedStyle(document.body).getPropertyValue(key);
