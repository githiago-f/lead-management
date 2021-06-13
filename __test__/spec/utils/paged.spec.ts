import { paged } from 'src/utils/paged';

describe('# Paged', () => {
  describe('when no number is passed', () => {
    it('returns 0', () => {
      expect(paged()).toBe(0);
    });
  });
  describe('when either 0 or 1 is passed', () => {
    it('returns 0', () => {
      expect(paged(0)).toBe(0);
      expect(paged(1)).toBe(0);
    });
  });
  describe('when any other number is passed', () => {
    it('returns n-1', () => {
      const num = 15;
      expect(paged(num)).toBe(14);
    });
  });

  describe('when number is lower than 0', () => {
    it('returns 0', () => {
      expect(paged(-1)).toBe(0);
    });
  });
});
