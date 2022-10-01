import { formatISO } from 'date-fns';

export const getFormattedNumber = (locale: string, value) =>
  new Intl.NumberFormat(locale, { maximumFractionDigits: 2 }).format(value);

export const getFormattedPercent = (locale: string, value) =>
  new Intl.NumberFormat(locale, { maximumFractionDigits: 2 }).format(value);

export const getBodyStyleByKey = (key: string) =>
  getComputedStyle(document.body).getPropertyValue(key);

export const getISOFormattedDate = (date: Date) =>
  `${formatISO(date, {
    representation: 'date',
  })}`;
