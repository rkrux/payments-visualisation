const BASE_COLORS = [
  '#1984c5',
  '#22a7f0',
  '#63bff0',
  '#99AEBB',
  '#00C6CF',
  '#e1a692',
  '#de6e56',
  '#e14b31',
  '#c23728',
];

type DateRangeType = {
  startDate: Date;
  endDate: Date;
};

const DEFAULT_DATE_RANGE = {
  startDate: new Date('2021-01-01'),
  endDate: new Date('2021-05-31'),
};

export type { DateRangeType };
export { BASE_COLORS, DEFAULT_DATE_RANGE };
