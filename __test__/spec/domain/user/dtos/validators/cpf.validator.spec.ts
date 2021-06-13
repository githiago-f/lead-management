import { CPFValidator } from 'src/domain/services/user/validators/cpf.validator';

describe('# CPFValidator', () => {
  const cpfValidator = new CPFValidator();

  describe('when the same number is passed 11 times', () => {
    it('is invalid', async () => {
      const valid = cpfValidator.validate('000.000.000-00');
      const valid2 = cpfValidator.validate('111.111.111-11');

      expect(valid).toBe(false);
      expect(valid2).toBe(false);
    });
  });

  describe('when empty value is passed', () => {
    it('is invalid', () => {
      const emptyCpf = cpfValidator.validate('');
      const nulledCpf = cpfValidator.validate(null);

      expect(emptyCpf).toBe(false);
      expect(nulledCpf).toBe(false);
    });
  });

  describe('when cpf is well formated', () => {
    describe('invalid if', () => {
      it('don\'t satisfy the CPF validation algorithm', () => {
        const invalidCpf = cpfValidator.validate('012.123.123-12');
        expect(invalidCpf).toBe(false);
      });
      it('don\'t have exactly 11 numbers', () => {
        const moreThan11 = cpfValidator.validate('012.123.123-111');
        const lessThan11 = cpfValidator.validate('012.123.123-');
        expect(moreThan11).toBe(false);
        expect(lessThan11).toBe(false);
      });
    });

    describe('valid if', () => {
      it('satisfy all the requirements', () => {
        const validCpf = cpfValidator.validate('542.249.810-09');
        expect(validCpf).toBe(true);
      });
    });
  });

});
