const BLACK_COLORS = {
  black900: '#212529',
  black800: '#343A40',
  black700: '#495057',
  black600: '#6C757D',
  black500: '#ADB5BD',
  black400: '#CED4DA',
  black300: '#DEE2E6',
  black200: '#E9ECEF',
  black100: '#F8F9FA',
};

const BROWN_COLORS = {
  brown100: '#EDE0D4',
  brown200: '#E6CCB2',
  brown300: '#DDB892',
  brown400: '#B08968',
  brown500: '#7F5539',
  brown600: '#9C6644',
};

const Colors = {
  ...BLACK_COLORS,
  ...BROWN_COLORS,
} as const;

export type ColorKey = keyof typeof Colors;

export default Colors;
