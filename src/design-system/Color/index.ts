const Colors = {
  main0: '#EDEDE9',
  main1: '#D6CCC2',
  main2: '#F5EBE0',
  main3: '#E3D5CA',
  main4: '#D5BDAF',
} as const;

export type ColorKey = keyof typeof Colors;

export default Colors;
