export const getFormattedValue = (locale, value) =>
  new Intl.NumberFormat(locale).format(value);
